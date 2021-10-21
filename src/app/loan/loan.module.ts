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
import {TooltipModule} from "primeng/tooltip";
import {HttpClientModule} from "@angular/common/http";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";



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
    HttpClientModule,
    MessageModule,
    ToastModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    TooltipModule
  ]
})
export class LoanModule { }
