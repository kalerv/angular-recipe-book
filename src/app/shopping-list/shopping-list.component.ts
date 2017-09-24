import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
      this.ingredients = this.shoppingListService.getIngredients();
      //own observable so need to destroy
      this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
          (ingredients: Ingredient[]) => {
              this.ingredients = ingredients;
          }
      )
  }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
