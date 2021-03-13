import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item!: Item;
  items!: Item[];


  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getItem();
  }
  getItem(): void {
    if (this.route) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.itemService.getItem(parseInt(id))
          .subscribe(item => this.item = item);
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.itemService.updateItem(this.item)
      .subscribe(() => this.goBack());
  }
  delete(item: Item): void {
    this.itemService.deleteItem(item)
      .subscribe(() => this.goBack());
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
