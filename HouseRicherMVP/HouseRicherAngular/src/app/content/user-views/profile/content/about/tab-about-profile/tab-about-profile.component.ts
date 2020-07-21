/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Component, Input } from '@angular/core';

@Component({
    selector: 'tab-about-profile',
    templateUrl: './tab-about-profile.component.html'
})
export class TabAboutProfileComponent {
    @Input('tabTitle') title: string;
    @Input() active = false;
}
