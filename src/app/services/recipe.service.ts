import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // Get recipes starting with 'a' (as per your API link)
  getRecipes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.php?f=a`);
  }

  // Get single recipe by ID
  getRecipeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }
}