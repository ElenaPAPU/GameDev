import { Component, HostListener } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {
// walkSprite = 1;
// playerPosOx = 0;
// playerLooksRight = true; toate 3 mutate in player.ts

player: Player = new Player();
// playerOrintationClass = 'playerToRight';

constructor() {}

// read right arrow press
@HostListener('document: keydown', ['$event'])
handleKeyDown(event: KeyboardEvent): void {
  console.log('s-a apasat tasta: '+ event.key);
  switch(event.key) {
    case 'ArrowRight':
      // e cazul sa-l rotesc?
      if (!this.player.looksRight) {
        this.player.looksRight = true;
      }

      //schimba sprite
      this.player.walkSprite++;
      if (this.player.walkSprite > 8) this.player.walkSprite = 0;

      //muta-l mai la dreapta
      this.player.posOx += 5;
      break;

      case 'ArrowLeft':
        //e cazul sa-l rotesc?
        if (this.player.looksRight) {
          this.player.looksRight = false;
        }
        //schimba sprite
        this.player.walkSprite++;
        if (this.player.walkSprite > 8) this.player.walkSprite = 0;

        //muta-l mai la stanga
        this.player.posOx -= 5;
        break;
  }
}

@HostListener('document: keyup', ['$event'])
handleKeyUp(event: KeyboardEvent): void {
  console.log('s-a eliberat tasta: '+ event.key);
}
}
