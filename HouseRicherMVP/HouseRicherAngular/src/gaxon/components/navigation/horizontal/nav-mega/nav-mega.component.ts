import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NavigationService} from './../../navigation.service';

@Component({
  selector: 'app-nav-horizontal-mega',
  templateUrl: './nav-mega.component.html',
  styleUrls: ['./nav-mega.component.scss']
})
export class NavHorizontalMegaComponent implements OnInit {
  @HostBinding('class') classes = 'nav-item mega-menu';
  @HostBinding('class.open') public isOpen = false;
  @Input() item: any;

  constructor(private navigationService: NavigationService,
              private router: Router) {
    // Listen for route changes
    router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          // Check if the url can be found in
          // one of the children of this item
          if (this.isUrlInChildren(this.item, event.urlAfterRedirects)) {
            this.isOpen = true;
          } else {
            this.isOpen = false;
          }
        }
      }
    );
  }

  ngOnInit() {
    // Check if the url can be found in
    // one of the children of this item
    if (this.isUrlInChildren(this.item, this.router.url)) {
      this.isOpen = true;
    }
  }

  /**
   * Toggle open
   *
   * @param event
   */
  toggleOpen(event) {
    event.preventDefault();

    this.isOpen = !this.isOpen;
  }

  /**
   * Check if the given url can be found
   * in one of the given parent's children
   *
   * @param parent
   * @param url
   * @returns {any}
   */
  isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (this.isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
        return true;
      }
    }

    return false;
  }

}
