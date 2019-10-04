import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { UtilCommonService } from '../service/util-common.service';

@Directive({
  selector: '[appOnlyCharactersValid]'
})
export class OnlyCharactersValidDirective {

  constructor(private el: ElementRef,
                    private renderer: Renderer2,
                    private utilService: UtilCommonService) { }

  @HostListener('keyup')
  checkKeyUp() {
    this.checkCharacters(this.el.nativeElement.value);
  }

  /**
    * Aplica un replace con [^0-9] sobre el valor pasado y lo setea al elemento
    *
    * @param valor
    * @returns void
    */
  private checkCharacters(valor: any): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', this.utilService.clearTextSearch(valor));
  }
}
