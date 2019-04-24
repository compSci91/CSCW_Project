import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <!-- header -->
  <nav class="header">

    <!-- logo -->
    <div class="header-brand">
      <a class="header-item">
        <img src="../favicon.png"  width="500" >
      </a>
    </div>
  </nav>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}