import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-registres-u',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-registres-u.component.html',
  styleUrl: './admin-registres-u.component.css'
})
export class AdminRegistresUComponent {

  dropdownVisibility: { [key: string]: boolean } = {};

  toggleDropdown(id: string) {
    console.log('Button clicked for dropdown:', id);
    this.dropdownVisibility[id] = !this.dropdownVisibility[id];
    console.log('Dropdown visibility for', id, ':', this.dropdownVisibility[id]);
  }

  isDropdownVisible(id: string): boolean {
    return this.dropdownVisibility[id] || false;
  }

  

}
