import { Component,VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task4';

  name = 'Angular ' + VERSION.major;
  dynamicArray = [];
  newDynamic;
  addRow() {
    this.dynamicArray.push({ firstName: '', lastName: '', emailAddress: '' });
    console.log('New row added successfully', 'New Row');
  }
  deleteRow(index) {
    this.dynamicArray.splice(index, 1);
  }
  getValues() {
    console.log(this.dynamicArray);
  }
}


