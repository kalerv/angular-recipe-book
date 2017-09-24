import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe-service/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
  }
  /*handler add to shopping list button
    send the recipe to the recipe service so ingredients can be added to list
  */
  onAddToShoppingList(){
    this.recipeService.addRecipeIngredientsToList(this.recipe);
  }

}
