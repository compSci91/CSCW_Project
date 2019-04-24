// src/app/components/footer.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!-- footer -->
    <footer class="footer">
    <!-- logo -->
    <div class="header-brand">
      <a class="header-item">
        <img src="../favicon.png"  width="500" >
      </a>
    </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}