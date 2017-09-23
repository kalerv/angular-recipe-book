import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private renderer: Renderer2, private elmRef: ElementRef) { }
  @HostBinding("class.open") isOpen = false;
  @HostListener('click') mouseClick(eventData: Event){
    this.isOpen = !this.isOpen;
  }
  //@HostListener('click') mouseClick(eventData: Event){
  //  console.log(this.elmRef.nativeElement.classList.contains('open'));
  //  if(this.elmRef.nativeElement.classList.contains('open')){
  //    this.renderer.removeClass(this.elmRef.nativeElement, 'open');
  //  }else{
  //    this.renderer.addClass(this.elmRef.nativeElement, 'open');
  //  }
  //}
}
