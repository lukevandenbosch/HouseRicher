import {Component, Input, OnDestroy, ViewEncapsulation} from '@angular/core';
import {NavigationService} from './navigation.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnDestroy {
  @Input('layout') layout = 'vertical';
  navigation: any[];
  headerMenu: any[];
  navChangedSubscription: Subscription;
  onHeaderMenuSubscription: Subscription;

  constructor(private navService: NavigationService) {
    this.navChangedSubscription = this.navService.onNavigationChanged.subscribe(
      (newNavsData) => {
        this.navigation = newNavsData;
      }
    );

    this.onHeaderMenuSubscription = this.navService.onHeaderMenuChanged.subscribe(
      (headerMenu) => {
        this.headerMenu = headerMenu;
      }
    );
  }

  ngOnDestroy() {
    this.navChangedSubscription.unsubscribe();
  }
}
