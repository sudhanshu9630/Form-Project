import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {
  onSave(form: any): void {
    if (form.valid) {
      console.log({
        name: form.value.name,
        email: form.value.email
      });
    }
  }

  sayHello(name: string): void {
    if (name) {
      alert(`Hello, ${name}`);
    }
  }
}