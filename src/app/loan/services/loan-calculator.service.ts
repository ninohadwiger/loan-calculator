import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {CalculationPayload} from "../models/calculation-payload.model";

@Injectable({providedIn: 'root'})
export class LoanCalculatorService {

  constructor(private http: HttpClient) {
  }

  calculate(payload: CalculationPayload): Observable<any> {
    return this.http.post(environment.apiUrl, payload);
  }
}
