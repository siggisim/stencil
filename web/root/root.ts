import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `<h1>{{name}}</h1>`
})
export class RootComponent { 
  name = 'Stencil';
}
