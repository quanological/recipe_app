import { Recipe } from "../recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Ingredient} from "../../shared/ingredient.model";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  constructor(private slService: ShoppingListService) {}

  /**
   * Return the list of recipes.
   * @returns {Recipe[]}
   */
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  /**
   * Add a single recipe.
   * @param {Recipe} recipe
   */
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  /**
   * Add multiple recipes to the list.
   * @param {Recipe[]} recipes
   */
  addRecipes(recipes: Recipe[]) {
    this.recipes.push(...recipes);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
