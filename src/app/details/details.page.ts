// src/app/details/details.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-details',
  imports: [IonicModule, NgIf],
  templateUrl: './details.page.html',
 
})
export class DetailsPage implements OnInit {
  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.recipeService.getRecipeById(id).subscribe((data) => {
      this.recipe = data.meals[0];
    });
  }
}
