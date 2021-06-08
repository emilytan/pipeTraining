import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTestIf]'
})

export class TestIfDirective {
  @Input()set appTestIf(condition) {
    condition ? this._viewContainer.createEmbeddedView(this.templateRef) : this._viewContainer.clear();
  }
  
  constructor(private _viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }

}
