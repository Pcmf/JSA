import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ControloComponent } from './controlo/controlo.component';
import { UtilizadoresComponent } from './utilizadores/utilizadores.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { FormComponent } from './form/form.component';
import { AuthGuardService } from './auth-guard.service';
import { ChangeComponent } from './change/change.component';
import { AnexarDocsComponent } from './anexar-docs/anexar-docs.component';
import { Form2Component } from './form2/form2.component';
import { AgendadasComponent } from './agendadas/agendadas.component';
import { AgDocsComponent } from './ag-docs/ag-docs.component';
import { AgPagComponent } from './ag-pag/ag-pag.component';
import { AnuladosComponent } from './anulados/anulados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    ControloComponent,
    UtilizadoresComponent,
    EntidadesComponent,
    DocumentosComponent,
    FormComponent,
    ChangeComponent,
    AnexarDocsComponent,
    Form2Component,
    AgendadasComponent,
    AgDocsComponent,
    AgPagComponent,
    AnuladosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '' , component: MainComponent, canActivate: [AuthGuardService]},
      {path: 'anexar/:lead' , component: AnexarDocsComponent, canActivate: [AuthGuardService]},
      {path: 'login' , component: LoginComponent},
      {path: 'change' , component: ChangeComponent, canActivate: [AuthGuardService]},
      {path: 'utilizador' , component: UtilizadoresComponent, canActivate: [AuthGuardService]},
      {path: 'entidade' , component: EntidadesComponent, canActivate: [AuthGuardService]},
      {path: 'doc' , component: DocumentosComponent, canActivate: [AuthGuardService]},
      {path: 'controlo' , component: ControloComponent, canActivate: [AuthGuardService]},
      {path: 'form' , component: FormComponent, canActivate: [AuthGuardService]},
      {path: 'agendadas' , component: AgendadasComponent, canActivate: [AuthGuardService]},
      {path: 'ag-docs' , component: AgDocsComponent, canActivate: [AuthGuardService]},
      {path: 'ag-pag' , component: AgPagComponent, canActivate: [AuthGuardService]},
      {path: 'anul' , component: AnuladosComponent, canActivate: [AuthGuardService]},
      {path: '**' , component: MainComponent, canActivate: [AuthGuardService]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
