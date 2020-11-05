import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css']
})
export class UtilizadoresComponent implements OnInit {
  public elementos: any = [];
  public elem: any = {};
  constructor(private dataService: DadosService) {
    this.dataService.getAll('users').subscribe(
      (resp: any) => {
          this.elementos = resp.json();
      }
    );
   }

  ngOnInit() {

  }

  editar (elem) {
    this.elem = elem;
  }

  criar () {
    this.elem = {};
  }

  remover (elem) {
    this.dataService.delete('users', elem.id).subscribe(
      resp => {
        this.dataService.getAll('users').subscribe(
          respd => this.elementos = respd.json()
        );
      }
    );
  }

  save (elem) {
    if ( elem.password && elem.password.length >= 3 ) {
      if (elem.id) {
        this.dataService.update('users', elem.id, elem).subscribe(
          resp => {
            this.dataService.getAll('users').subscribe(
              respd => this.elementos = respd.json()
            );
          }
        );
      } else {
        this.dataService.set('users', elem).subscribe(
          resp => {
            this.dataService.getAll('users').subscribe(
              respd => this.elementos = respd.json()
            );
          }
        );
      }
    } else {
      alert('Tem de inserir a password!');
    }
  }

}
