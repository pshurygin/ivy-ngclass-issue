import {Directive, HostBinding, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Directive({
    selector: '[blockStyles]'
})
export class BlockStylesDirective{
    @HostBinding('style.border') get border() {
        return this.sanitizer.bypassSecurityTrustStyle('1px solid red');
    }
    @HostBinding('style.background') get background() {
        return this.sanitizer.bypassSecurityTrustStyle('white');
    }

    @Input() blockStyles: any;

    constructor(private sanitizer: DomSanitizer){}
}