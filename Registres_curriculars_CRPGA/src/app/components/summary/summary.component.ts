import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  isDropdownVisible = false;

  toggleDropdown() {
    console.log('Button clicked');
  this.isDropdownVisible = !this.isDropdownVisible;
  console.log('Dropdown visibility:', this.isDropdownVisible);
  }
}
