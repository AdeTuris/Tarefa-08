import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface DatetimeResponse {
  status: string;
  data: string;
  hora: string;
  timestamp: number;
  iso: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api/datetime';

  constructor(private http: HttpClient) { }

  /**
   * Obtém a data e hora da API
   * @returns Observable com os dados de data e hora
   */
  getDateTime(): Observable<DatetimeResponse> {
    return this.http.get<DatetimeResponse>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Erro ao buscar data e hora:', error);
          return of({
            status: 'erro',
            data: 'Erro ao conectar',
            hora: '--:--:--',
            timestamp: 0,
            iso: ''
          });
        })
      );
  }

  /**
   * Obtém a data e hora em tempo real (atualiza a cada segundo)
   * @returns Observable que emite a cada segundo
   */
  getDateTimeRealtime(): Observable<DatetimeResponse> {
    return interval(1000).pipe(
      switchMap(() => this.getDateTime())
    );
  }
}
