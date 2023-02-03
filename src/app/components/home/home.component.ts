import { Component } from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // content?: string;
  //
  // constructor(private usuarioService: UsuarioService) { }
  //
  // ngOnInit(): void {
  //   this.usuarioService.getPublicContent().subscribe({
  //     next: data => {
  //       this.content = data;
  //     },
  //     error: err => {
  //       this.content = JSON.parse(err.error).message;
  //     }
  //   });
  // }
}
