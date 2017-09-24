import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from "../../shopping-list/shopping-list-service/shopping-list.service";
@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Paneer Tikka',
            'Paneer tikka made of panner and green peppers',
            './assets/images/tawa-paneer-tikka-recipe-2.jpg',
            [
                new Ingredient('Paneer', 2),
                new Ingredient('Capsicum', 3),
                new Ingredient('Onion', 2)
            ]
        ),
        new Recipe('Chiken Tikka',
            'Chicken tikka made with chicken breast',
            './assets/images/CHicken-REcipe.jpg',
            [
                new Ingredient('Chicken Breast', 3),
                new Ingredient('Tikka Masala', 1),
                new Ingredient('Onion', 2)
            ]
        ),
        new Recipe('Seekh kabob',
            'Seekh kabob made with frsh chicken breast',
            './assets/images/seekh-kabob.jpeg',
            [
                new Ingredient('Chicken Breast', 4),
                new Ingredient('Kabob Masala', 1),
                new Ingredient('Onion', 2),
                new Ingredient('Lemon', 1)
            ]
        )

    ];
    constructor(private slService: ShoppingListService){}
    //returns a copy of recipes array
    getRecipes(){
        return this.recipes.slice();
    }
    //adding recipe's ingredients to shopping list
    addRecipeIngredientsToList(recipe: Recipe){
        this.slService.addIngredients(recipe.ingredients);
    }
    getRecipeById(index: number){
        return this.recipes[index];
    }
}