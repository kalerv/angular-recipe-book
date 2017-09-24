import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe-service/recipe.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  constructor( private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipeById(+this.route.snapshot.params['id']);
    this.route.params.subscribe(
        (params: Params) => {
          const id = +params['id'];
          this.recipe = this.recipeService.getRecipeById(id);
        }
    )
  }
  /*handler add to shopping list button
    send the recipe to the recipe service so ingredients can be added to list
  */
  onAddToShoppingList(){
    this.recipeService.addRecipeIngredientsToList(this.recipe);
  }

}
