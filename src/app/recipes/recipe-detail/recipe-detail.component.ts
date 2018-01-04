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
  // ingredients: Ingredient[];
  // ingredientsLocal = this.ingredients;



  // displayedColumns = ['name', 'amount'];
  // dataSource = new MatTableDataSource<Ingredient>(this.ingredients);
  // dataSource = new MatTableDataSource<{name: string, amount: number}>(this.ingredientsLocal);
  // this.myDataSource.data = this.ingredients;

  constructor(private recipeService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) { }

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

// export interface Element {
//   name: string;
//   amount: number;
// }
// const FIK: Ingredient[] = [
//   {name: 'Cucumunga', amount: 2},
//   {name: 'Finnucka', amount: 4},
// ];

// const INGREDIENT_LIST: {name: string, amount: number}[] = this.recipe.ingredients.getIngredients();
// const INGREDIENT_LIST: {name: string, amount: number}[] = [
//   new Ingredient('Meat', 1),
//   new Ingredient('French Fries', 20)
// ];



// const ELEMENT_DATA: Element[] = [
//   {name: 'Hydrogen', calories: 1.0079},
//   {name: 'Helium', calories: 4.0026},
//   {name: 'Lithium', calories: 6.941},
//   {name: 'Beryllium', calories: 9.0122},
//   {name: 'Boron', calories: 10.811},
//   {name: 'Carbon', calories: 12.0107},
//   {name: 'Nitrogen', calories: 14.0067},
//   {name: 'Oxygen', calories: 15.9994},
//   {name: 'Fluorine', calories: 18.9984},
//   {name: 'Neon', calories: 20.1797},
//   {name: 'Sodium', calories: 22.9897},
//   {name: 'Magnesium', calories: 24.305,},
//   {name: 'Aluminum', calories: 26.9815,},
//   {name: 'Silicon', calories: 28.0855},
//   {name: 'Phosphorus', calories: 30.9738},
//   {name: 'Sulfur', calories: 32.065},
//   {name: 'Chlorine', calories: 35.453,},
//   {name: 'Argon', calories: 39.948},
//   {name: 'Potassium', calories: 39.0983},
//   {name: 'Calcium', calories: 40.078},
// ];
