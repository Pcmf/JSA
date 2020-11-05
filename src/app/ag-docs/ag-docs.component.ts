import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-ag-docs',
  templateUrl: './ag-docs.component.html',
  styleUrls: ['./ag-docs.component.css']
})
export class AgDocsComponent {
  public elementos: any = [];
  private userId: number;
  constructor(private dadosService: DadosService, private loginService: LoginService) {
    this.userId = this.loginService.getUserId();
    this.dadosService.getAll('agdocs/' + this.userId ).subscribe(
      resp => this.elementos = resp.json()
    );
   }

  verDocs( obj: any) {
    console.log(obj);
  }

}

