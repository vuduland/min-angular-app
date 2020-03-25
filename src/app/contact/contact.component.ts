import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body is-primary is-bold">
        <div class="container">
          <h1 class="title">Contact Me!</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- contact form -->
        <form (ngSubmit)="submitForm()">
          <!-- name -->
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" />
          </div>

          <!-- email -->
          <div class="field">
            <label class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email" email="true" />
          </div>

          <!-- message -->
          <div class="field">
            <label class="label">Your Message</label>
            <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
          </div>

          <!-- submit button -->
          <button type="submit" class="button is-small is-warning">
            Send!
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    const message = `My name is ${this.name}, my email is ${this.email}, and my message is "${this.message}."`;
    // grab all the fields and their values
    alert(message);
  }
}
