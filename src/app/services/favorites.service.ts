// src/app/services/favorites.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private storageReady = this.storage.create();

  constructor(private storage: Storage) {}

  async getFavorites(): Promise<any[]> {
    await this.storageReady;
    return (await this.storage.get('favorites')) || [];
  }

  async addFavorite(recipe: any) {
    await this.storageReady;
    const favorites = (await this.getFavorites()) || [];
    favorites.push(recipe);
    await this.storage.set('favorites', favorites);
  }

  async removeFavorite(id: string) {
    await this.storageReady;
    let favorites = await this.getFavorites();
    favorites = favorites.filter(r => r.idMeal !== id);
    await this.storage.set('favorites', favorites);
  }

  async isFavorite(id: string): Promise<boolean> {
    await this.storageReady;
    const favorites = await this.getFavorites();
    return favorites.some(r => r.idMeal === id);
  }
}
