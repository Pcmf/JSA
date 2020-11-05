import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  elementos: any = [];
  elem: any = {};
  constructor(private dataService: DadosService) {
    this.dataService.getAll('listadocs').subscribe(
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
    this.dataService.delete('listadocs', elem.id).subscribe(
      resp => {
        this.dataService.getAll('listadocs').subscribe(
          respd => this.elementos = respd.json()
        );
      }
    );
  }

  save (elem) {
    if (elem.id) {
      this.dataService.update('listadocs', elem.id, elem).subscribe(
        resp => {
          this.dataService.getAll('listadocs').subscribe(
            respd => this.elementos = respd.json()
          );
        }
      );
    } else {
      this.dataService.set('listadocs', elem).subscribe(
        resp => {
          this.dataService.getAll('listadocs').subscribe(
            respd => this.elementos = respd.json()
          );
        }
      );
    }
  }

}
