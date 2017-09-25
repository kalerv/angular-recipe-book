import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {Recipe} from "../../recipes/recipe.model";
import {Subject} from "rxjs/Subject";
export class ShoppingListService {
    ingredientsChanged = new Subject();
    startedEditing = new Subject<number>();
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
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    //Add multiple ingredients in one shot
    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    //ingredient by id
    getIngredientById(index: number){
        return this.ingredients[index];
    }
    //update ingredient
    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    //delete item
    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}