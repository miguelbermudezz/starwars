import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  menu = [];

  constructor(constants: ConstantsService) { 
    this.menu = constants.menu;
  }

  ngOnInit(): void {
  }

}