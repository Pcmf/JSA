import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private ADDRESS = 'http://localhost/JSA_RestFul/';

  constructor(private http: Http) { }

  checkuser (param: string, obj: any) {
    return this.http.post( this.ADDRESS + param, JSON.stringify(obj));
  }

  getAll (param: string) {
    return this.http.get(this.ADDRESS  + param );
  }

  getOne (param: string, id) {
    return this.http.get( this.ADDRESS + param + '/' + id);
  }

  set (param: string, obj: any) {
    return this.http.post(this.ADDRESS + param , JSON.stringify(obj));
  }

  update (param: string, id, obj: any) {
    return this.http.put(this.ADDRESS + param + '/' + id, JSON.stringify(obj));
  }

  delete (param: string, id) {
    return this.http.delete(this.ADDRESS + param + '/' + id);
  }

  /**  */
  getData ( params) {
    return this.http.get(this.ADDRESS + params);
  }

  saveData (path: string, obj: any) {
    return this.http.post(this.ADDRESS + path, JSON.stringify(obj));
    // incluir uma forma de notificar que os dados foram inseridos ou erro
  }
}

