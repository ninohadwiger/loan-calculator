import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CalculationPayload} from "../../models/calculation-payload.model";

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent implements OnInit {

  @Output() calculate = new EventEmitter<CalculationPayload>();

  // these values would probably be fetched from a backend or stored in
  // a config file in an actual project. Hardcoded in this example.
  childrenOptions = [
    {label: 'None', value: 'NONE'},
    {label: 'Single', value: 'SINGLE'},
    {label: 'Multiple', value: 'MULTIPLE'}
  ]

  // these values would probably be fetched from a backend or stored in
  // a config file in an actual project. Hardcoded in this example.
  coapplicantOptions = [
    {label: 'None', value: 'NONE'},
    {label: 'Single Borrower', value: 'SINGLE_BORROWER'},
    {label: 'Multiple Borrowers', value: 'MULTIPLE_BORROWERS'},
  ];

  monthlyIncomeControl = new FormControl(800, [
    Validators.min(800)
  ]);

  requestedAmountControl = new FormControl(25000, [
    Validators.min(25000),
    Validators.max(50000)
  ]);

  loanTermControl = new FormControl(36, [
    Validators.min(36),
    Validators.max(360)
  ]);

  calculateFormGroup = new FormGroup({
    monthlyIncome: this.monthlyIncomeControl,
    requestedAmount: this.requestedAmountControl,
    loanTerm: this.loanTermControl,
    children: new FormControl('NONE'),
    coapplicant: new FormControl('NONE'),
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  emitCalculateEvent() {
    this.calculate.emit({
      ...this.calculateFormGroup.value,

      // amount numbers multiplied by 1000 in order to achieve three spaces after comma
      monthlyIncome: this.monthlyIncomeControl.value * 1000,
      requestedAmount: this.requestedAmountControl.value * 1000
    });
  }
}
