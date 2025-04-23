import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonThumbnail, IonLabel 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonThumbnail, IonLabel
  ]
})
export class HomePage implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getRecipes().subscribe({
      next: (response) => {
        this.recipes = response.meals || [];
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}