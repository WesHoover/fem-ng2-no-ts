import { Component } from 'angular2/core';
import { MyService } from './myService';

// Make sure your transpiler supports decorators
// and 'reflect-metadata' is loaded up
@Component({
  selector: 'app',
  template: `<div class="app"></div>`,
})
export class App {
  // override the parameters for DI
  static get parameters() {
    return [[MyService]];
  }

  constructor(myService) {
    this.myService = myService;
  }
}
