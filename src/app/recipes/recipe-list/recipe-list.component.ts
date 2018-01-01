import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedList = this.recipesService.recipeSelected;
  recipes: Recipe[];


  onRecipeSelected (recipeSelected: Recipe) {
    this.recipeSelectedList.emit(recipeSelected);
  }

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  loadRecipe(index: number) {
    return this.recipes.indexOf(Recipe[index]);
  }
}
