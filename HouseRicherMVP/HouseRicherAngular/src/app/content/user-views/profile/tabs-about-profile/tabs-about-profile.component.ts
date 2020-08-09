/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
    Component,
    ContentChildren,
    QueryList,
    AfterContentInit, Input
} from '@angular/core';

import {TabAboutProfileComponent} from '../tab-about-profile/tab-about-profile.component';

@Component({
    selector: 'tabs-about-profile',
    templateUrl: './tabs-about-profile.component.html',
    styleUrls: ['./tabs-about-profile.component.scss']
})
export class TabsAboutProfileComponent implements AfterContentInit {

    @Input() title: string;
    @ContentChildren(TabAboutProfileComponent) tabs: QueryList<TabAboutProfileComponent>;

    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        const activeTabs = this.tabs.filter((tab) => tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: TabAboutProfileComponent) {
        // deactivate all tabs
        try {
            this.tabs.toArray().forEach(tab => tab.active = false);
            tab.active = true;
        } catch {
        }
    }
}
