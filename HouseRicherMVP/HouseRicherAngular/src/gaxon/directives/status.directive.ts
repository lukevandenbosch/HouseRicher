import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[status]'
})
export class StatusDirective implements OnInit {
    @Input() statusCode: string;
    statusClass = 'light';

    constructor(private renderer: Renderer2, private el: ElementRef) {
    }

    ngOnInit(): void {
        switch (this.statusCode) {
            case 'online' :
                this.statusClass = 'success';
                break;
            case 'away' :
                this.statusClass = 'yellow';
                break;
            case 'dnd' :
                this.statusClass = 'danger';
                break;
            default :
                this.statusClass = 'light';
                break;
        }
        this.renderer.addClass(this.el.nativeElement, 'bg-' + this.statusClass);
        this.renderer.addClass(this.el.nativeElement, 'pulse-' + this.statusClass);
    }
}
