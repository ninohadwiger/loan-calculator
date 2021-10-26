import {Component, Input, OnInit} from '@angular/core';
import {CalculationResult} from "../../models/calculation-result.model";

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.scss']
})
export class CalculatorResultComponent implements OnInit {

  @Input() result?: CalculationResult | null;
  @Input() loading?: boolean | null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
