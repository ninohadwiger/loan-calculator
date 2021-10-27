import {LoanCalculatorService} from './loan-calculator.service';
import {of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";


describe('LoanCalculatorService', () => {
  let service: LoanCalculatorService;
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new LoanCalculatorService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected calculation result', (done: DoneFn) => {

    const expectedResult = {
      "loanAmount": 25100000,
      "interestRate": 2500
    };

    httpClientSpy.post.and.returnValue(of(expectedResult));

    const payload = {
      monthlyIncome: 8000000,
      requestedAmount: 25100000,
      loanTerm: 36,
      children: "NONE",
      coapplicant: "NONE"
    }

    service.calculate(payload).subscribe(
      result => {
        expect(result).toEqual(expectedResult, 'expected result');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  })

  it('should return an error if monthlyIncome is less than 800', (done: DoneFn) => {

    const errorResponse = new HttpErrorResponse({
      status: 400, statusText: 'Bad Request',
      error: {
        general: {},
        fields: [
          {
            params: "monthlyIncome",
            message: "Monthly income is too low. Minimum income is 800 EUR"
          }
        ]
      }
    });

    httpClientSpy.post.and.returnValue(throwError(errorResponse))

    const payload = {
      monthlyIncome: 7500000,
      requestedAmount: 25100000,
      loanTerm: 36,
      children: "NONE",
      coapplicant: "NONE"
    }

    service.calculate(payload).subscribe(
      _ => done.fail('expected an error'),
      error => {
        expect(error.error.fields[0].params).toContain('monthlyIncome');
        expect(error.error.fields[0].message).toContain('too low');
        done()
      }
    );

    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  })
});
