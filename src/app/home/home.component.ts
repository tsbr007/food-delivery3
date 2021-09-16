import { Component, OnInit } from '@angular/core';
    import { GetItems } from '../store/actions';
    import { Product } from '../product/product.component';
    import { NgRedux, select } from '@angular-redux/store';
    import { InitialState } from '../store/reducer';
    import { FoodService } from '../food.service';
    import { Observable } from 'rxjs';
    
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.scss']
    })
    export class HomeComponent implements OnInit {
      constructor(
        private ngRedux: NgRedux<InitialState>,
        private foodService: FoodService
      ) {}
      banners = [
        {
          src:  
            'c://home/tastytreat',
          alt: 'A tasty treat'
        },
        {
          src:
            'c://home/pancakes',
          alt: 'Chocolate covered pancakes'
        },
        {
          src:
            'c://home/burgers',
          alt: 'Burger and fries'
        },
        {
          src:
            'c://home/slice',
          alt: 'Get ready to slice'
        }
      ];
      ngOnInit() {
        this.foodService.getAll();
      }
    }