import {NavigationModelInterface} from '@gaxon/components';

export class HeaderMenuModel implements NavigationModelInterface {
  public navigation: any[];

  constructor() {
    this.navigation = [
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
        url: 'realtor/realtor-list'
      },
      {
        id: 'menu-apps',
        title: 'Contact Us',
        translate: 'Contact Us',
        type: 'item',
        url: 'index/contact'
      }
    ];
  }
}
