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
            icon: 'list',
            url: 'forum/forum-list'
          },
          {
            id: 'menu-apps',
            title: 'Realtors',
            translate: 'Realtors',
            type: 'item',
            icon: 'company',
            url: 'realtor/realtor-list'
          }
        ]
      }
    ];
  }
}
