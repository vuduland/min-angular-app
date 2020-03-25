import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body is-family-monospace has-text-centered">
        <div class="container">
          <h1 class="title">
            My Home Page!
          </h1>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        background-image: url('/assets/img/dash.jpg') !important;
        background-size: cover;
        background-position: center center;
        opacity: 0.96 !important;
      }
      .title {
        color: #ede3dd !important;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
