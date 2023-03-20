import { Directive, ElementRef, HostListener,} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele : ElementRef) { 
    this.ele.nativeElement.style.backgroundColor='yellow';
  }

@HostListener('mouseenter') onMouseenter(){
  this.highlight('purple');
  
}

@HostListener('mouseleave') onMouseLeave(){
  this.highlight('red'); 
}

@HostListener('click') onClick(){
  this.highlight('orange'); 
}

private highlight(color:string){
  this.ele.nativeElement.style.backgroundColor=color;
}

}
