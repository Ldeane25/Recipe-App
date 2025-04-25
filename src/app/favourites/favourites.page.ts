// src/app/favourites/favourites.page.ts
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-favourites',
  imports: [IonicModule, NgIf, NgFor],
  templateUrl: './favourites.page.html',
  
})
export class FavouritesPage implements OnInit {
  favorites: any[] = [];

  constructor(private favService: FavoritesService, private router: Router) {}

  async ngOnInit() {
    this.favorites = await this.favService.getFavorites();
  }

  openDetails(id: string) {
    this.router.navigate(['/details', id]);
  }
}
