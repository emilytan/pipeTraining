import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appObjectNgFor]'
})
export class ObjectNgForDirective {

  @Input() set appObjectNgForFrom(inputObj: any) {
    this.viewContainerRef.clear();
    Object.keys(inputObj).forEach((propertyName: string, index: number) => {
      console.log(propertyName, index);
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        // default value that will be used if an attribute is not assigned one
        $implicit: propertyName,
        index
      });
    });
  };

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
