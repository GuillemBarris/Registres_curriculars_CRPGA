import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sda',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './sda.component.html',
  styleUrl: './sda.component.css',
  
})

export class SdaComponent {

  isDropdownVisible = false;
  isDropdownVisible2 = false;

  toggleDropdown() {
    console.log('Button clicked');
  this.isDropdownVisible = !this.isDropdownVisible;
  console.log('Dropdown visibility:', this.isDropdownVisible);
  }

  toggleDropdown2() {
    console.log('Button clicked');
  this.isDropdownVisible2 = !this.isDropdownVisible2;
  console.log('Dropdown visibility:', this.isDropdownVisible2);
  }

}
