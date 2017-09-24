import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from '../shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from '../shared/dropdown.directive';
import {ShoppingListService} from "../shopping-list/shopping-list-service/shopping-list.service";
import {RecipeService} from "../recipes/recipe-service/recipe.service";
import {RecipesStartComponent} from "../recipes/recipes-start/recipes-start.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipesStartComponent},
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent}
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent},
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}