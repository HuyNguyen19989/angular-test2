import { Component, OnInit } from '@angular/core';
import { Item} from '../items'
import {ItemService} from '../item.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  items!: Item[];
  sample!: Item[];
  mid!: Item[];
  displayedColumns: string[] = ['id', 'name', 'unit', 'barcode','category','brand','buyPrice','sellPrice'];


  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => {
      this.items = items;
      this.sample = items;
      this.mid = items;
    });
  }

  search(term: string) {
    if (!term) {
      return this.items = this.mid
    } 
    return this.items = this.mid.filter(item =>
      item.name.toLocaleLowerCase().includes(term))
  }
  filCate(cate: string) {
    if (cate === "all") {
      this.mid = this.sample
      return this.items = this.mid
    } 
    this.mid = this.sample.filter(item =>
      item.category.toLocaleLowerCase().includes(cate))
    return this.items = this.mid
  }
}


