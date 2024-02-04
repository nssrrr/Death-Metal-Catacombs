import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
      })),
      state('expanded', style({
        height: '*',
        opacity: 1,
      })),
      transition('expanded <=> collapsed', [
        animate('200ms ease-in-out')
      ]),
    ]),
  ]
})
export class MenuListComponent {
  @Input() menus: any;
  @Input() depth: any;
  @Output() tabChange = new EventEmitter<any>();

  ngOnInit(): void {

  }

  changeTab(event: Event, menu: any) {

    if (event instanceof Event) {
      event.stopPropagation();
    } else {
      menu = event;
    }
    this.tabChange.emit(menu);
  }

  expand(event: Event, menu: any) {
    event.stopPropagation(); // Prevent triggering changeTab
    menu.expand = !menu.expand;
    console.log(menu.expand);
  }

  passToParent(event: Event, menu: any) {
    this.changeTab(event, menu)
  }
}
