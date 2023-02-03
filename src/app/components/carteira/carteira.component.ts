import { Component } from '@angular/core';
import {Pilacoin} from "../../models/pilacoin/pilacoin.model";
import {PilacoinService} from "../../services/pilacoin.service";

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent {

  pilacoin?: Pilacoin[];
  currentPilacoin: Pilacoin = {};
  currentIndex = -1;
  nome = '';

  constructor(private pilacoinService: PilacoinService) { }

  ngOnInit(): void {
    this.retrievePilacoin();
  }

  retrievePilacoin(): void {
    this.pilacoinService.getAll()
      .subscribe({
        next: (data) => {
          this.pilacoin = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePilacoin();
    this.currentPilacoin = {};
    this.currentIndex = -1;
  }

  setActivePilacoin(pilacoin: Pilacoin, index: number): void {
    this.currentPilacoin = pilacoin;
    this.currentIndex = index;
  }

          removeAllPilacoin(): void {
      this.pilacoinService.deleteAll()
        .subscribe({
          next: (res) => {
            console.log(res);
            this.refreshList();
          },
          error: (e) => console.error(e)
      });
  }

}
