import {Component, OnInit} from '@angular/core';
import {LoanCalculatorService} from "../../services/loan-calculator.service";
import {CalculationPayload} from "../../models/calculation-payload.model";
import {MessageService} from 'primeng/api';
import {catchError} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss'],
  providers: [MessageService]
})
export class LoanCalculatorComponent implements OnInit {

  constructor(
    private loanCalculatorService: LoanCalculatorService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
  }

  calculateLoan(payload: CalculationPayload) {
    this.loanCalculatorService.calculate(payload)
      .pipe(catchError(error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Something went wrong.'})
        return of(error)
      }))
      .subscribe(console.log);
  }

}
