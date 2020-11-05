import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-anulados',
  templateUrl: './anulados.component.html',
  styleUrls: ['./anulados.component.css']
})
export class AnuladosComponent  {
  public elementos: any = [];
  private userId: number;
  constructor(private dadosService: DadosService, private loginService: LoginService) {
    this.userId = this.loginService.getUserId();
    this.dadosService.getAll('anul/' + this.userId ).subscribe(
      resp => this.elementos = resp.json()
    );
   }

  verDocs( obj: any) {
    console.log(obj);
  }

}
