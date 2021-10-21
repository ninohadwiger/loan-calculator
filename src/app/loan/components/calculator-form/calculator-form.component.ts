import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CalculationPayload} from "../../models/calculation-payload.model";

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent implements OnInit {

  @Output() calc = new EventEmitter<CalculationPayload>();

  childrenOptions = [
    {label: 'None', value: 'NONE'},
    {label: 'Single', value: 'SINGLE'},
    {label: 'Multiple', value: 'MULTIPLE'}
  ]

  coapplicantOptions = [
    {label: 'None', value: 'NONE'},
    {label: 'Single Borrower', value: 'SINGLE_BORROWER'},
    {label: 'Multiple Borrowers', value: 'MULTIPLE_BORROWERS'},
  ];

  calculateFormGroup = new FormGroup({
    monthlyIncome: new FormControl(800000),
    requestedAmount: new FormControl(25000000),
    loanTerm: new FormControl(36, [Validators.min(36), Validators.max(360)]),
    children: new FormControl('NONE'),
    coapplicant: new FormControl('NONE'),
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate() {
    this.calc.emit(this.calculateFormGroup.value);
  }
}
