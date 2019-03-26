import { Component, OnInit } from '@angular/core';
import {Restaurant} from './Restaurant/Restaurant.model'
import {RestaurantsService} from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private RestaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.RestaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
