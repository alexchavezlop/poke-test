import { Component, Input } from '@angular/core';
import { PokeService } from './core/services/poke.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Variables
  public pokes: any = [];
  public currentPoke: any;
  public pokeName: String;

  constructor(private pokeService: PokeService) {}

  getPoke() {
    this.currentPoke = null;
    this.pokeService.getPoke(this.pokeName).subscribe(
      data => {
        if(data !== undefined && data !== null) {
          this.currentPoke = data;
        }
      },
    )
  }

  catchPke() {
    this.pokes.push(this.currentPoke);
  }

}
