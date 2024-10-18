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

  toggleDropdown() {
    console.log('Button clicked');
  this.isDropdownVisible = !this.isDropdownVisible;
  console.log('Dropdown visibility:', this.isDropdownVisible);
  }

}
