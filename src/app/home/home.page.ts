// src/app/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [IonicModule, NgIf, NgFor],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data.meals;
    });
  }

  openDetails(id: string) {
    this.router.navigate(['/details', id]);
  }
}
