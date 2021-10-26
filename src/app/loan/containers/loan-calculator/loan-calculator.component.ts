import {Component, OnInit} from '@angular/core';
import {LoanCalculatorService} from "../../services/loan-calculator.service";
import {CalculationPayload} from "../../models/calculation-payload.model";
import {MessageService} from 'primeng/api';
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, Observable, of} from "rxjs";
import {CalculationResult} from "../../models/calculation-result.model";

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss'],
  providers: [MessageService]
})
export class LoanCalculatorComponent implements OnInit {

  calculationResult$?: Observable<CalculationResult>;
  loading$ = new BehaviorSubject(false);

  constructor(
    private loanCalculatorService: LoanCalculatorService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
  }

  calculateLoan(payload: CalculationPayload) {
    this.loading$.next(true);
    this.calculationResult$ = this.loanCalculatorService.calculate(payload)
      .pipe(
        catchError(error => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Something went wrong.'})
          return of(error)
        }),
        tap(_ => this.loading$.next(false))
      );
  }

}
