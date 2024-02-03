import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  @Input() menus: any;
  @Input() depth: any;

  ngOnInit(): void {
    console.log(this.menus)
    console.log(this.depth)
  }

  changeTab(menu: any) {
    // Logic to handle tab change
  }

  expand(event: Event, menu: any) {
    event.stopPropagation(); // Prevent triggering changeTab
    menu.expand = !menu.expand;
    console.log(menu.expand);
  }
}
