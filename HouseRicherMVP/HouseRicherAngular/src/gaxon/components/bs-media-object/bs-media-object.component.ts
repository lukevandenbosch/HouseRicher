import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

interface MediaImage {
  url: string;
  alt?: string;
  order: string;
  classlist?: string;
}

@Component({
  selector: 'bs-media-object',
  templateUrl: './bs-media-object.component.html',
  styles: []
})
export class BsMediaObjectComponent implements OnInit, AfterViewInit {
  @Input('heading') heading: any;
  @Input('heading-class') headingClass: string = 'mt-0';
  @Input('body-class') bodyClass: string;
  @Input('img') img: MediaImage | string;

  mediaImage: MediaImage;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.img) {
      this.mediaImage = this.setCardImage(this.img);
    }
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.elRef.nativeElement, 'media');
  }

  setCardImage(mediaImg) {
    let _mediaImg: MediaImage;

    if (typeof mediaImg === 'string') {
      _mediaImg = {url: mediaImg, order: 'top'};
    } else {
      _mediaImg = mediaImg;
    }

    // set media order
    if (!_mediaImg.order) _mediaImg.order = 'top';
    if (!_mediaImg.classlist) {
      if (_mediaImg.order === 'top') _mediaImg.classlist = 'mr-3';
      else _mediaImg.classlist = 'ml-3';
    }

    return _mediaImg;
  }
}
