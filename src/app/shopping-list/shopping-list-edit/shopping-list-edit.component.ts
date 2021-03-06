import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list-service/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.slService.getIngredientById(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
    )
  }
  addIngredient(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    this.onResetForm();
  }
  onResetForm(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.onResetForm();
    this.slService.deleteIngredient(this.editedItemIndex);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
