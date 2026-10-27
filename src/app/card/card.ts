import { Component } from '@angular/core';
import { CardService } from '../service/card-service';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  constructor(public cardService: CardService) {}
}
