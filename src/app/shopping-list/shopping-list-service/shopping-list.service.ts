import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {Recipe} from "../../recipes/recipe.model";
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes', 3),
        new Ingredient('Paneer Bars', 4),
        new Ingredient('Onions', 3)
    ];
    //return the ingredients array copy
    getIngredients(){
        return this.ingredients.slice();
    }
    //add single ingredient
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    //Add multiple ingredients in one shot
    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}