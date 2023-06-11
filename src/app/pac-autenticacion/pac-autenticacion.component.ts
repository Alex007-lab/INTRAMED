import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pac-autenticacion',
  templateUrl: './pac-autenticacion.component.html',
  styleUrls: ['./pac-autenticacion.component.css']
})
export class PACAutenticacionComponent {
  activeTab: 'login' | 'register' = 'login';

  @Input() loginUsername: string = '';
  @Input() loginPassword: string = '';

  @Input() registerUsername: string = '';
  @Input() registerPassword: string = '';

  switchTab(tab: 'login' | 'register') {
    this.activeTab = tab;
  }

  onLoginSubmit() {
    // Lógica para procesar el formulario de inicio de sesión
    console.log('Inicio de sesión:', this.loginUsername, this.loginPassword);
  }

  onRegisterSubmit() {
    // Lógica para procesar el formulario de registro
    console.log('Registro:', this.registerUsername, this.registerPassword);
  }
}

