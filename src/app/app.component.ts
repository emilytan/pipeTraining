import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  today = new Date();
  data = {
    id: 20,
    name: {
      firstname: 'Angular',
      lastname: 'Pipes',
    },
  };
  emogieMap = { happy: ':-)', sad: ':-(', other: ':-|' };
  value = '';
  languages = ['English', 'Chinese', 'Malay'];

  color: string;
  field = new FormControl('');
  name = new FormControl('');

  flag = false;

  myObject = {  a: 'one',    b: 'two',    c: 'three',  };

  test(): void {
    console.log('name', this.name);
  }

}
