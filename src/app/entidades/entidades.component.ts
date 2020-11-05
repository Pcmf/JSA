import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {
  elementos: any = [];
  elem: any = {};
  constructor(private dataService: DadosService) {
    this.dataService.getAll('categorias').subscribe(
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
    this.dataService.delete('categorias', elem.id).subscribe(
      resp => {
        this.dataService.getAll('categorias').subscribe(
          respd => this.elementos = respd.json()
        );
      }
    );
  }

  save (elem) {
    if (elem.id) {
      this.dataService.update('categorias', elem.id, elem).subscribe(
        resp => {
          this.dataService.getAll('categorias').subscribe(
            respd => this.elementos = respd.json()
          );
        }
      );
    } else {
      this.dataService.set('categorias', elem).subscribe(
        resp => {
          this.dataService.getAll('categorias').subscribe(
            respd => this.elementos = respd.json()
          );
        }
      );
    }
  }

}
