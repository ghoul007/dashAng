import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
   <h4> Hello World</h4>
   c:{{data.cols}} r:{{data.rows}}
   `
})
export class HelloWorldComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
