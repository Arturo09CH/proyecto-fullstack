import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';               // Para *ngIf, *ngFor
import { ReactiveFormsModule } from '@angular/forms';         // Para formGroup y Validators
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService, Usuario } from '../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  standalone: true,  // Indica que es un componente independiente
  imports: [CommonModule, ReactiveFormsModule], // Importa módulos usados en el template
  templateUrl: './usuario-form.component.html'
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm!: FormGroup;
  esEdicion = false;
  usuarioId?: number;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      login: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', [Validators.required, Validators.maxLength(50)]]
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.esEdicion = true;
        this.usuarioId = +params['id'];
        this.cargarUsuario(this.usuarioId);
      }
    });
  }

  cargarUsuario(id: number) {
    this.usuariosService.getUsuario(id).subscribe({
      next: (usuario) => {
        this.usuarioForm.patchValue(usuario);
        this.usuarioForm.get('password')?.setValue('');
      },
      error: (err) => console.error('Error al cargar usuario', err)
    });
  }

  onSubmit() {
    if (this.usuarioForm.invalid) return;

    const usuario: Usuario = this.usuarioForm.value;

    if (this.esEdicion && this.usuarioId != null) {
      this.usuariosService.actualizarUsuario(this.usuarioId, usuario).subscribe({
        next: () => this.router.navigate(['/usuarios']),
        error: (err) => console.error('Error al actualizar usuario', err)
      });
    } else {
      this.usuariosService.crearUsuario(usuario).subscribe({
        next: () => this.router.navigate(['/usuarios']),
        error: (err) => console.error('Error al crear usuario', err)
      });
    }
  }

  cancelar() {
    this.router.navigate(['/usuarios']);
  }
}
