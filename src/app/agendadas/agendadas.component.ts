import { Component } from '@angular/core';
import { DadosService } from '../dados.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-agendadas',
  templateUrl: './agendadas.component.html',
  styleUrls: ['./agendadas.component.css']
})
export class AgendadasComponent  {
  public elementos: any = [];
  private userId: number;
  constructor(private dadosService: DadosService, private loginService: LoginService) {
    this.userId = this.loginService.getUserId();
    this.dadosService.getAll('agenda/' + this.userId ).subscribe(
      resp => this.elementos = resp.json()
    );
   }

  verAgenda( obj: any) {
    console.log(obj);
  }

}
