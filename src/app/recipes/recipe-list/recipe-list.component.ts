import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test", "this is a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX-hERQRxoxK9shgq3UveN7vGbXZohlyT53MbglBahbUiULDlvqA&s"),
    new Recipe("test", "this is a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX-hERQRxoxK9shgq3UveN7vGbXZohlyT53MbglBahbUiULDlvqA&s")
  ]; //holds and array of model Recipe

  constructor() { }

  ngOnInit() {
  }

}
