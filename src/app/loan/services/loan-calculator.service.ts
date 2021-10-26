import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CalculationPayload} from "../models/calculation-payload.model";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class LoanCalculatorService {

  constructor(private http: HttpClient) {
  }

  calculate(payload: CalculationPayload): Observable<any> {
    return this.http.post(environment.apiUrl, payload);
  }
}
