import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list-service/shopping-list.service';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
  }
  addIngredient(){
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredienAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredienAmount);
    this.slService.addIngredient(newIngredient);
  }
}
