import { Component, OnInit } from '@angular/core';

class Person {

  constructor(public name: string, public gender: string, public rate: number) {

  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  female = new Person('jane', 'female', 5);
  male = new Person('bob', 'male', 25);

  person;

  pickRandomPerson() {
   const index = Math.floor(Math.random() * 2);
   if (!index) {
     this.person = this.female;
   } else {
     this.person = this.male;
   }
   console.log(this.person);
  }

  ngOnInit() {
    this.pickRandomPerson();
  }
  getName() {
    return `Name: ${this.person.name}`;
  }

  switchPerson() {
    if (this.person.gender === 'female') {
      this.person = this.male;
    } else if ( this.person.female === 'male') {
      this.person = this.female;
    } else {
      // tslint:disable-next-line:no-unused-expression
      this.pickRandomPerson;
    }
  }
}
