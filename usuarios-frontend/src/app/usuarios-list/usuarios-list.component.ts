import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf y *ngFor
import { Router } from '@angular/router';
import { UsuariosService, Usuario } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Usuarios</h2>
    <button (click)="nuevoUsuario()">Nuevo Usuario</button>
    <table *ngIf="usuarios.length > 0; else noUsers" border="1" cellpadding="5">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Login</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let usuario of usuarios">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.login }}</td>
          <td>{{ usuario.rol }}</td>
          <td>
            <button (click)="editarUsuario(usuario.id!)">Editar</button>
            <button (click)="eliminarUsuario(usuario.id!)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <ng-template #noUsers>
      <p>No hay usuarios disponibles.</p>
    </ng-template>
    <button (click)="logout()">Cerrar Sesión</button>

  `
})
export class UsuariosListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => (this.usuarios = data),
      error: (err) => console.error('Error al cargar usuarios', err),
    });
  }

  nuevoUsuario() {
    this.router.navigate(['/usuarios/nuevo']);
  }

  editarUsuario(id: number) {
    this.router.navigate(['/usuarios/editar', id]);
  }

  eliminarUsuario(id: number) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuariosService.eliminarUsuario(id).subscribe({
        next: () => this.cargarUsuarios(),
        error: (err) => console.error('Error al eliminar usuario', err),
      });
    }
  }

  logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
  }

}
