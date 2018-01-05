import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RecipesService} from "../recipe-list/recipes.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Recipe} from "../recipe.model";
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  ingredients: Ingredient[];

  constructor(private recipeService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);

        // updates the ingredients for U
        this.ingredients = (this.recipeService.getRecipe(+this.id).ingredients);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
