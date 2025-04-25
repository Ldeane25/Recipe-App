

// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  // Component setup: standalone, selector, imports, template, and styles
  standalone: true,
  selector: 'app-home',
  imports: [IonicModule, NgIf, NgFor],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  // Array to store the recipe data
  recipes: any[] = [];

  // Constructor to inject the RecipeService and Router
  constructor(private recipeService: RecipeService, private router: Router) {}

  // On component initialization, fetch the recipes from the service
  ngOnInit() {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data.meals; // Store the fetched recipes
    });
  }

  // Method to navigate to the recipe details page when an item is clicked
  openDetails(id: string) {
    this.router.navigate(['/details', id]); // Pass the recipe ID to the details page
  }
}
