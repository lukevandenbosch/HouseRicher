import {Component, OnInit} from '@angular/core';
import {WallPageService} from '@app/content/nav-views/forum/forum-item/wall-page.service';


@Component({
    selector: 'app-wall-page',
    templateUrl: './wall-page.component.html',
    styleUrls: ['./wall-page.component.scss']
})
export class WallPageComponent implements OnInit {
    pageInfo: any;

    constructor(private wallPageService: WallPageService) {
        this.pageInfo = this.wallPageService.wallPageData;
    }
    ngOnInit() {
    }
}
