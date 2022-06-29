import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[NgElse]',
})
export class NgElseDirective {
  @Input() set NgElse(condition: boolean) {
    if (!condition) {
      this._view.createEmbeddedView(this._templateRef)
    } else {
      this._view.clear();
    }
  }
  constructor(
    private _templateRef: TemplateRef<any>,
    private _view: ViewContainerRef
  ) {}
}
