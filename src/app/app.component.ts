import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuListComponent } from "./menu-list/menu-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MenuListComponent],
})
export class AppComponent {
  title = 'Death-Metal-Catacombs';
  menus = [
    {
      title: 'Home',
      hasSubMenu: false,
      pageTitle: 'The Death Metal Catacombs',
      background: 'home.jpeg',
    },
    {
      title: 'Black Metal',
      hasSubMenu: true,
      expand: false,
      pageTitle: 'Black Metal !',
      background: 'black-metal.jpeg',
    },
    {
      title: 'OSBDM Bible',
      hasSubMenu: false,
      pageTitle: 'OSBDM Bible',
      background: 'osdm-bible.jpeg',
    },
    {
      title: "90's Brutal Death Metal Bands",
      hasSubMenu: true,
      expand: false,
      pageTitle: "90's Brutal Death Metal Bands",
      background: 'osdm-bible.jpeg',
    },
    {
      title: 'Brutal DM Releases',
      hasSubMenu: true,
      expand: false,
      subMenus: [
        {
          title: '1989 Brutal Death Metal Map',
          hasSubMenu: true,
          pageTitle: '1989 Brutal Death Metal Releases',
          background: '89bdm.jpeg',
          open: true,
          subMenus: [
            {
              title: '2001 Death Metal Map',
              hasSubMenu: true
            }
          ]
        },
        {
          title: '1990 Brutal Death Metal Map',
          hasSubMenu: false,
          pageTitle: '1990 Brutal Death Metal Releases',
          background: '90bdm.jpeg',
        },
        {
          title: '1991 Brutal Death Metal Map',
          hasSubMenu: false,
          pageTitle: '1991 Brutal Death Metal Releases',
          background: '91bdm.jpeg',
        },
        {
          title: '1992 Brutal Death Metal Map',
          hasSubMenu: false,
          pageTitle: '1992 Brutal Death Metal Releases',
          background: '92bdm.jpeg',
        },
        {
          title: '1993 Brutal Death Metal Map',
          hasSubMenu: false,
          pageTitle: '1993 Brutal Death Metal Releases',
          background: '93bdm.jpeg',

        },
        {
          title: '1994 Brutal Death Metal Map',
          hasSubMenu: false,
          pageTitle: '1994 Brutal Death Metal Releases',
          background: '94bdm.jpeg',
        },
        {
          title: '1995 Brutal Death Metal Map',
          hasSubMenu: false,
          pageTitle: '1995 Brutal Death Metal Releases',
          background: '95bdm.jpeg',
        },
        {
          title: '1996 Brutal Death Metal Map',
          hasSubMenu: false,
          pageTitle: '1996 Brutal Death Metal Releases',
          background: '96bdm.jpeg',
        },
      ],
    },
    { title: 'Bands', hasSubMenu: false },
  ];
  activeMenu = this.menus[0];

  ngOnInit() {
  }

  changeTab(menu: any) {
    this.activeMenu = menu.background ? menu : this.activeMenu;
  }

  expand(event: Event, menu: any) {
    event.stopPropagation(); // Prevent triggering changeTab if also bound to click
    menu.expand = !menu.expand;
    console.log(menu.expand);
  }

}
