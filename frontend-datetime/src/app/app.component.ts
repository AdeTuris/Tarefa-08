import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatetimeService, DatetimeResponse } from './services/datetime.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sistema de Consulta de Data e Hora';
  
  // Dados da API
  datetimeData: DatetimeResponse | null = null;
  loading = true;
  erro = false;
  mensagemErro = '';
  
  // Subscription para atualização em tempo real
  private subscription: Subscription | null = null;

  constructor(private datetimeService: DatetimeService) { }

  ngOnInit(): void {
    this.carregarDataHora();
  }

  /**
   * Carrega os dados de data e hora em tempo real
   */
  carregarDataHora(): void {
    this.loading = true;
    this.erro = false;
    
    // Cancelar subscription anterior se existir
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Subscrever para atualização em tempo real (a cada segundo)
    this.subscription = this.datetimeService.getDateTimeRealtime()
      .subscribe({
        next: (data: DatetimeResponse) => {
          if (data.status === 'sucesso') {
            this.datetimeData = data;
            this.erro = false;
            this.mensagemErro = '';
            this.loading = false;
          } else {
            this.erro = true;
            this.mensagemErro = 'Erro ao conectar com a API';
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Erro na requisição:', error);
          this.erro = true;
          this.mensagemErro = 'Falha ao conectar com a API. Verifique se o servidor está disponível.';
          this.loading = false;
        }
      });
  }

  /**
   * Recarrega os dados manualmente
   */
  recarregar(): void {
    this.carregarDataHora();
  }

  /**
   * Copia o conteúdo para a área de transferência
   */
  copiarParaAreaTransferencia(): void {
    if (this.datetimeData) {
      const texto = `Data: ${this.datetimeData.data}\nHora: ${this.datetimeData.hora}`;
      navigator.clipboard.writeText(texto).then(() => {
        alert('Dados copiados com sucesso!');
      }).catch(() => {
        alert('Erro ao copiar dados');
      });
    }
  }

  ngOnDestroy(): void {
    // Limpar a subscription ao destruir o componente
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
