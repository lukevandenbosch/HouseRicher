import {NavigationModelInterface} from '@gaxon/components';

export class NavigationModel implements NavigationModelInterface {
  public navigation: any[];

  constructor() {
    this.navigation = [
      {
        id: 'main',
        title: 'Main',
        translate: 'NAV.MAIN.TITLE',
        type: 'group',
        icon: 'home',
        children: [
          {
            id: 'menu-home',
            title: 'Forum',
            translate: 'Forum',
            type: 'item',
            url: 'forum/forum-list'
          },
          {
            id: 'menu-apps',
            title: 'Realtors',
            translate: 'Realtors',
            type: 'item',
            url: 'realtor/forum-list'
          },
          {
            id: 'menu-apps',
            title: 'Contact Us',
            translate: 'Contact Us',
            type: 'item',
            url: 'portal/contact'
          },
        ]
      }
    ];
  }
}
