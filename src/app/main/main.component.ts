import { Component } from '@angular/core';
import { DadosService } from '../dados.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  public novas: number;
  public agendaativas: number;
  public agendadas: number;
  public agdocs: number;
  public agpag: number;
  public anul: number;
  public lista: any = [];
  constructor(private dadosService: DadosService, private loginService: LoginService) {
    const userId = this.loginService.getUserId();
    console.log(userId);
    this.dadosService.getOne('getcount', userId).subscribe(
      resp => {
        this.novas = resp.json().novas;
        this.agendaativas = resp.json().agendaativas;
        this.agendadas = resp.json().agendadas;
        this.agdocs = resp.json().agdocs;
        this.anul = resp.json().anul;
        this.agpag = resp.json().agpag;
        this.lista = resp.json().lista;
      }
    );
  }


}
