import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
      new Ingredient('Tomatoes', 3),
      new Ingredient('Paneer Bars', 4),
      new Ingredient('Onions', 3)
  ];
  constructor() {

  }

  ngOnInit() {
  }
    onAddIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

}
