import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  /**
   * Open a dropdown menu.
   */
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

}
