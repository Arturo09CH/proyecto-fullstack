import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    UsuariosListComponent,
    UsuarioFormComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('usuarios-frontend');
    recargarUsuarios() {
    // Aquí puedes recargar la lista de usuarios o solo dejarlo vacío
    console.log('Evento usuarioGuardado recibido');
  }
}
