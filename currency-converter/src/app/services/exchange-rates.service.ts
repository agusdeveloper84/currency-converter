import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from './PAYLOADS/exchange-rates-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private http: HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(`https://api.exchangerate.host/latest?source=ecb&base=${base}`);
  }
}
