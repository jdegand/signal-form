import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { createFormField, createFormGroup, SignalInputDirective, V } from 'ng-signal-forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, FormsModule, SignalInputDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formModel = createFormGroup({
    passwords: createFormGroup(() => {
      const password = createFormField('', {
        validators: [V.required()],
      });
      const passwordConfirmation = createFormField('', {
        validators: [{
          validator: V.equalsTo(password.value),
          message: ({ equalsTo }) => `Passwords must match`,
        }]
      });

      return {
        password,
        passwordConfirmation,
      };
    }),
  });
}