import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe-service/recipe.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id: number;
  constructor(
      private recipeService: RecipeService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    //this.recipe = this.recipeService.getRecipeById(+this.route.snapshot.params['id']);
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipeById(this.id);
        }
    )
  }
  /*handler add to shopping list button
    send the recipe to the recipe service so ingredients can be added to list
  */
  onAddToShoppingList(){
    this.recipeService.addRecipeIngredientsToList(this.recipe);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../',this.id, 'edit'], {relativeTo: this.route});
  }


}
