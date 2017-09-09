import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Paneer Tikka',
          'Paneer tikka made of panner and green peppers',
          'http://www.vegrecipesofindia.com/wp-content/uploads/2014/08/tawa-paneer-tikka-recipe-2.jpg'),
      new Recipe('Paneer Tikka',
          'Paneer tikka made of panner and green peppers',
          'http://www.vegrecipesofindia.com/wp-content/uploads/2014/08/tawa-paneer-tikka-recipe-2.jpg'),
      new Recipe('Paneer Tikka',
          'Paneer tikka made of panner and green peppers',
          'http://www.vegrecipesofindia.com/wp-content/uploads/2014/08/tawa-paneer-tikka-recipe-2.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
