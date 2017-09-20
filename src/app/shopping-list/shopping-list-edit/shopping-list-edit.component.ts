import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output()ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredient(){
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredienAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredienAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
