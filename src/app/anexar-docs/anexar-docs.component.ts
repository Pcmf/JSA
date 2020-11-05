import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-anexar-docs',
  templateUrl: './anexar-docs.component.html',
  styleUrls: ['./anexar-docs.component.css']
})
export class AnexarDocsComponent implements OnInit {
  documentos: any = [];
  private indice: number;
  private filename: string;
  lead: number;

  constructor(private dataService: DadosService, private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer ) {

    this.route.paramMap.subscribe(
      param => {
        this.lead = +param.get('lead');
        this.loadDados();
      }
    );
  }

  handleInputChange(e, id) {
    this.indice = id;
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.filename = file.name;
    const pattern = /pdf-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    const obj: any = {};
    obj.id = this.indice;
    obj.nomefx = this.filename;
    obj.base64 = reader.result;
    this.dataService.saveData('savedocs/' + this.lead, obj)
      .subscribe( resp => {
        if (resp) {
          this.loadDados();
        }
      });
  }



  deleteDoc (doc) {
    console.log(doc);
    this.dataService.delete('docs/' + this.lead, doc.id).subscribe(
      resp0 => this.loadDados()
    );
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => this.lead = +params.get('lead'));
  }

  loadDados () {
    this.dataService.getData('docs/' + this.lead).subscribe(
      resp => {
        this.documentos = resp.json();
      }
    );
  }

}
