import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardService } from './service/card-service';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  menuOpen = false;

  constructor(public cardService: CardService) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
