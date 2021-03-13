import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './items';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items: Item[] = [{
      id: 1,
      name: "Nokia",
      unit: "cái",
      category: "Điện Thoại",
      brand: "Nokia",
      barcode: "0123456789",
      buyPrice: 3200000,
      sellPrice: 4000000,
      warningNumber: 30,
    },
    {
      id: 2,
      name: "Phone",
      unit: "cái",
      category: "Điện Thoại",
      brand: "Nokia",
      barcode: "0123456789",
      buyPrice: 3200000,
      sellPrice: 4000000,
      warningNumber: 30,
    },
    {
      id: 3,
      name: "Huwei",
      unit: "cái",
      category: "Điện Thoại",
      brand: "Nokia",
      barcode: "0123456789",
      buyPrice: 3200000,
      sellPrice: 4000000,
      warningNumber: 30,
    },
    {
      id: 4,
      name: "LQ",
      unit: "cái",
      category: "Ti Vi",
      brand: "Nokia",
      barcode: "0123456789",
      buyPrice: 3200000,
      sellPrice: 4000000,
      warningNumber: 30,
    },
    {
      id: 5,
      name: "OPQ",
      unit: "cái",
      category: "Ti Vi",
      brand: "Nokia",
      barcode: "0123456789",
      buyPrice: 3200000,
      sellPrice: 4000000,
      warningNumber: 30,
    },
    {
      id: 6,
      name: "LK",
      unit: "cái",
      category: "Ti Vi",
      brand: "Nokia",
      barcode: "0123456789",
      buyPrice: 3200000,
      sellPrice: 4000000,
      warningNumber: 30,
    },
    {
      id: 7,
      name: "Daikin",
      unit: "cái",
      category: "Tủ Lạnh",
      brand: "Nokia",
      barcode: "0123456789",
      buyPrice: 3200000,
      sellPrice: 4000000,
      warningNumber: 30,
    },
    {
      id: 8,
      name: "DGD",
      unit: "cái",
      category: "Tủ Lạnh",
      brand: "Nokia",
      barcode: "0123456789",
      buyPrice: 3200000,
      sellPrice: 4000000,
      warningNumber: 30,
    },
    {
      id: 9,
      name: "MGM",
      unit: "cái",
      category: "Tủ Lạnh",
      brand: "Nokia",
      barcode: "0123456789",
      buyPrice: 3200000,
      sellPrice: 4000000,
      warningNumber: 30,
    },
  ];
    return { items };
  }

  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }
}