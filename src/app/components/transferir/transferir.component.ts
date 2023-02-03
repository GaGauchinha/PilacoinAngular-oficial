import {Component, Input} from '@angular/core';
import {Pilacoin} from "../../models/pilacoin/pilacoin.model";
import {PilacoinService} from "../../services/pilacoin.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent {

  @Input() viewMode = false;

  @Input() currentPilacoin: Pilacoin = {
    id: '',
    idCriador: '',
    assinaturaMaster: '',
    nonce:'',
    dataCriacao:'',
  };

  message = '';

  constructor(
    private pilacoinService: PilacoinService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPilacoin(this.route.snapshot.params["id"]);
    }
  }

  getPilacoin(id: string): void {
    this.pilacoinService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPilacoin = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePilacoin(): void {
    this.message = '';
//precisa mudar no service, o update tem que mudar o id do dono
    this.pilacoinService.update(this.currentPilacoin.id, this.currentPilacoin)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Pila enviado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

}
