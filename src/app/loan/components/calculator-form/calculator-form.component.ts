import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent implements OnInit {

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
    monthlyIncome: new FormControl(),
    requestedAmount: new FormControl(),
    loanTerm: new FormControl(36, [Validators.min(36), Validators.max(360)]),
    children: new FormControl('NONE'),
    coapplicant: new FormControl('NONE'),
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate() {
    console.log(this.calculateFormGroup.value);
  }
}
