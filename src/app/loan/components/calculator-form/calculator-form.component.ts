import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
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
    monthlyIncome: new FormControl(800, [Validators.min(800)]),
    requestedAmount: new FormControl(25000, [Validators.min(25000), Validators.max(50000)]),
    loanTerm: new FormControl(36, [Validators.min(36), Validators.max(360)]),
    children: new FormControl('NONE'),
    coapplicant: new FormControl('NONE'),
  })

  get monthlyIncome(): AbstractControl | null {
    return this.calculateFormGroup.get('monthlyIncome');
  }

  get requestedAmount(): AbstractControl | null {
    return this.calculateFormGroup.get('requestedAmount');
  }

  get loanTerm(): AbstractControl | null {
    return this.calculateFormGroup.get('loanTerm');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate() {
    this.calc.emit(this.calculateFormGroup.value);
  }
}
