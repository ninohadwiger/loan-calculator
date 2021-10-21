import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorFormComponent } from './components/calculator-form/calculator-form.component';
import { LoanCalculatorComponent } from './containers/loan-calculator/loan-calculator.component';
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    CalculatorFormComponent,
    LoanCalculatorComponent
  ],
  exports: [
    LoanCalculatorComponent
  ],
  imports: [
    CommonModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule
  ]
})
export class LoanModule { }
