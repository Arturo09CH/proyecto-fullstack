package com.example.usuariosapi.controller;

import com.example.usuariosapi.model.Usuario;
import com.example.usuariosapi.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;


@RestController
@RequestMapping("/api/usuarios")
@Tag(name = "Usuarios", description = "API para gestión de usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Operation(summary = "Obtiene todos los usuarios")
    @GetMapping
    public List<Usuario> getAllUsers() {
        return usuarioService.getAllUsers();
    }

    @Operation(summary = "Obtiene un usuario por ID")
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUserById(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.getUserById(id);
        return usuario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Crea un nuevo usuario")
    @PostMapping
    public ResponseEntity<?> createUser(@Valid @RequestBody Usuario usuario) {
        Usuario savedUser = usuarioService.saveUser(usuario);
        return ResponseEntity.ok(savedUser);
    }

    @Operation(summary = "Actualiza un usuario existente")
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @Valid @RequestBody Usuario usuarioDetails) {
        Optional<Usuario> usuarioOptional = usuarioService.getUserById(id);
        if (!usuarioOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        Usuario usuario = usuarioOptional.get();
        usuario.setNombre(usuarioDetails.getNombre());
        usuario.setEmail(usuarioDetails.getEmail());
        usuario.setLogin(usuarioDetails.getLogin());
        // En este punto, si la contraseña cambió, en el service se encripta
        usuario.setPassword(usuarioDetails.getPassword());
        usuario.setRol(usuarioDetails.getRol());
        Usuario updatedUsuario = usuarioService.saveUser(usuario);
        return ResponseEntity.ok(updatedUsuario);
    }

    @Operation(summary = "Elimina un usuario por ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.getUserById(id);
        if (!usuario.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        usuarioService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}