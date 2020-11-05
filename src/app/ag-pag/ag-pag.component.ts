import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-ag-pag',
  templateUrl: './ag-pag.component.html',
  styleUrls: ['./ag-pag.component.css']
})
export class AgPagComponent  {
  public elementos: any = [];
  private userId: number;
  constructor(private dadosService: DadosService, private loginService: LoginService) {
    this.userId = this.loginService.getUserId();
    this.dadosService.getAll('agpag/' + this.userId ).subscribe(
      resp => this.elementos = resp.json()
    );
   }

  verDocs( obj: any) {
    console.log(obj);
  }

}
