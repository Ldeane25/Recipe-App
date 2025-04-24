import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonBackButton, IonButtons, IonImg, IonText,
  IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonBackButton, IonButtons, IonImg, IonText,
    IonList, IonItem, IonLabel
  ]
})
export class DetailsPage implements OnInit {
  recipe: any;
  ingredients: {name: string, measure: string}[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(id).subscribe({
        next: (response) => {
          this.recipe = response.meals?.[0];
          this.extractIngredients();
        },
        error: (err) => console.error('Failed to load recipe:', err)
      });
    }
  }

  private extractIngredients() {
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.recipe?.['strIngredient' + i];
      const measure = this.recipe?.['strMeasure' + i];
      if (ingredient?.trim()) {
        this.ingredients.push({ 
          name: ingredient, 
          measure: measure || 'to taste' 
        });
      }
    }
  }
}