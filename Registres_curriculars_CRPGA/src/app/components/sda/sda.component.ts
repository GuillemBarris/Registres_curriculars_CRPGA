import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sda',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './sda.component.html',
  styleUrl: './sda.component.css',
  animations: [
    trigger('dropdownAnimation', [
      state('hidden', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
  
})

export class SdaComponent {

  isDropdownVisible = false;

  toggleDropdown() {
    console.log('Button clicked');
  this.isDropdownVisible = !this.isDropdownVisible;
  console.log('Dropdown visibility:', this.isDropdownVisible);
  }

}
