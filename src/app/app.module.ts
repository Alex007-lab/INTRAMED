import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PacprincipalComponent } from './pac-principal/pac-principal.component';
import { PACAtencionClienteComponent } from './pac-atencion-cliente/pac-atencion-cliente.component';
import { PACAutenticacionComponent } from './pac-autenticacion/pac-autenticacion.component';
import { NominaComponent } from './PAC_Empleado/nomina/nomina.component';
import { ResultadosComponent } from './PAC_Expediente/resultados/resultados.component';
import { PACCitaComponent } from './pac-cita/pac-cita.component';
import { PACInsumosComponent } from './pac-insumos/pac-insumos.component';
import { PACPagoComponent } from './pac-pago/pac-pago.component';
import { DefuncionComponent } from './PAC_Urgencias/defuncion/defuncion.component';
import { FarmaciaComponent } from './PAC_Receta/farmacia/farmacia.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PacprincipalComponent,
    PACAtencionClienteComponent,
    PACAutenticacionComponent,
    NominaComponent,
    ResultadosComponent,
    PACCitaComponent,
    PACInsumosComponent,
    PACPagoComponent,
    DefuncionComponent,
    FarmaciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'Login', component: PACAutenticacionComponent},
      {path: 'Queja', component: PACAtencionClienteComponent},
      {path: 'Expedientes', component: ResultadosComponent},
      {path: 'Receta', component: FarmaciaComponent},
      {path: 'Farmacia', component: FarmaciaComponent},
      {path: 'Urgencias', component: DefuncionComponent},
      {path: 'Defunciones', component: DefuncionComponent},
      {path: 'Citas', component: PACCitaComponent},
      {path: 'pago', component: PACPagoComponent},
      {path: 'Nomina', component: NominaComponent},
      {path: 'Expedientes', component:ResultadosComponent},
      {path: 'Resultados_LAB', component: ResultadosComponent},
      {path: 'Home', component: PacprincipalComponent},
      {path: '***', redirectTo:'/',pathMatch:'full'},
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
