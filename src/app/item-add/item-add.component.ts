import { Component, OnInit } from '@angular/core';
import {Item} from '../items'
import {ItemService} from '../item.service'
import { Location } from '@angular/common';



@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  item = {
    name: "",
    unit: "",
    category: "",
    brand: "",
    barcode: "",
    buyPrice: 0,
    sellPrice: 0,
    warningNumber: 0
  }



  constructor(
    private itemService: ItemService,
    private location: Location
  ) { }

  ngOnInit(): void { }

  add(): void {
    let a = this.item
    if (!a.name) { return; }
    this.itemService.addItem(a as Item)
      .subscribe(() => this.goBack());
  }

  
  goBack(): void {
    this.location.back();
  }
  parseBuyPrice(event: any) {
    let a = event.target.value
    this.item.buyPrice = a
  }
  parseSellPrice(event: any) {
    let a = event.target.value
    this.item.sellPrice = a
  }
  parseWarn(event: any) {
    let a = event.target.value
    this.item.warningNumber = a
  }
  


}
