import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  private userId: number;
  public lead: any = [];
  public dfamiliares: any = [];
  public dprofissionais: any = [];
  public dpessoais: any = [];
  public dhabitacao: any = [];
  public d2proponente: any = [];

  public OCArr: any = [{}];


  constructor(private dadosService: DadosService, private router: Router, private loginService: LoginService) {
    this.userId = loginService.getUserId();
    this.dadosService.getOne('getlead', this.userId).subscribe(
      resp => {
        this.lead = resp.json();
        this.dhabitacao = this.lead.dhabitacao ? JSON.parse(this.lead.dhabitacao) : [];
        this.dprofissionais = this.lead.dprofissionais ? JSON.parse(this.lead.dprofissionais) : [];
        this.d2proponente = this.lead.d2proponente ? JSON.parse(this.lead.d2proponente) : null;
      }
    );
  }

  saveAndAnexa (form) {
    console.log(form);
    console.log(this.dhabitacao);
    console.log(this.d2proponente);
      // this.dadosService.saveData('leads/' + this.userId, form.value).subscribe(
      //   (resp: any) => {
      //     console.log(resp);
      //     if  (resp.status === 200) {
      //      this.router.navigate(['/anexar/' + +resp._body ]);
      //      // console.log(resp);
      //     } else  {
      //       alert('Erro nos dados');
      //     }
      //   }
      // );
  }

  cancelar () {
    this.router.navigate(['/']);
  }
  // Outros creditos
  addLineOutrosCreditos () {
    this.OCArr.push({});
  }
  removeLineOutrosCreditos (i) {
    this.OCArr.splice(i, 1);
  }

  rejeitar (lead: any) {
    this.dadosService.update('leads/rej', lead.lead, lead).subscribe(
      resp => this.router.navigate( ['/'] )
    );

  }

  naoAtende (lead: any) {
    this.dadosService.update('leads/nat/' + this.userId, lead.lead, lead).subscribe(
      resp => this.router.navigate( ['/'] )
    );
  }

  agendar (lead) {

  }
}
