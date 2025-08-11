export interface Usuario {
  id?: number;       // opcional porque al crear no tiene id aún
  nombre: string;
  email: string;
  login: string;
  password: string;
  rol: string;
}