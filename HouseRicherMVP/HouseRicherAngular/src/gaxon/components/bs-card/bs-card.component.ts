import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {CardHeaderComponent} from './card-header/card-header.component';
import {CardImgOverlayComponent} from './card-img-overlay/card-img-overlay.component';
import {CardFooterComponent} from './card-footer/card-footer.component';
import {CardBodyComponent} from './card-body/card-body.component';
import {CardOuterBodyComponent} from './card-outer-body/card-outer-body.component';

interface Image {
  url: string;
  caption?: string;
  classlist?: string;
}

@Component({
  selector: 'bs-card',
  templateUrl: './bs-card.component.html',
  styleUrls: ['./bs-card.component.scss']
})
export class BsCardComponent implements OnInit, AfterViewInit {
  @ContentChild(CardHeaderComponent) cardHeader;
  @ContentChild(CardImgOverlayComponent) cardImgOverlay;
  @ContentChild(CardBodyComponent) cardBody;
  @ContentChild(CardOuterBodyComponent) cardOuterBody;
  @ContentChild(CardFooterComponent) cardFooter;

  @Input('card-title') cardTitle: any = '';
  @Input('card-subtitle') cardSubTitle: any = '';
  @Input('card-text') cardText: any = '';
  @Input('card-img') cardImg: Image | string = '';
  @Input('card-img-top') cardImgTop: Image | string = '';
  @Input('card-img-bottom') cardImgBottom: Image | string = '';
  @Input('body-class') body_classlist: string = '';
  @Input('hasBody') hasBody: boolean = true;

  cardImage: Image;
  cardImageTop: Image;
  cardImageBottom: Image;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @Input()
  set fullHeight(isFullHeight: boolean) {

    if (isFullHeight !== false) {
      this.elRef.nativeElement.classList.add('dt-card__full-height');
    }
  }

  ngOnInit() {
    this.cardImage = this.setCardImage(this.cardImg);
    this.cardImageTop = this.setCardImage(this.cardImgTop);
    this.cardImageBottom = this.setCardImage(this.cardImgBottom);
  }

  setCardImage(cardImage) {
    let _cardImage: Image;

    if (typeof cardImage === 'string') {
      _cardImage = {url: cardImage};
    } else {
      _cardImage = cardImage;
    }

    return _cardImage;
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.elRef.nativeElement, 'card');
  }

}
