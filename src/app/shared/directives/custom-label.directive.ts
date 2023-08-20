import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'yellow';
  private _errors?: ValidationErrors | null | undefined;

  @Input() set color( value:string){
    this._color = value
    this.setStyle();
  }

  @Input() set errors (value: ValidationErrors | null | undefined) {

    this._errors = value;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if( !this.htmlElement ) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void{
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }
    const errors = Object.keys(this._errors)
    console.log(errors)

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = ' Este campo es requerido.'
      return;
    }

    if (errors.includes('minlength')) {
      console.log(this._errors)
      this.htmlElement.nativeElement.innerText = `Este campo debe tener al menos ${this._errors['minlength'].requiredLength } caracteres. Actualmente tienes ${this._errors['minlength'].actualLength } `
      return;
    }
    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Este campo debe tener formato de email.'
      return;
    }

  }

}
