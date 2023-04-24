import { Directive , ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public eobj : ElementRef) 
  { 

  }
  @HostListener('mouseenter')onmouseeenter()
  {
    this.eobj.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave')onmouseleave()
  {
    this.eobj.nativeElement.style.color = 'black';
  }

}
