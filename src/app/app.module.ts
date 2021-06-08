import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './Pipe/filter-pipe.pipe';
import { HighlightDirective } from './AttributeDirective/highlight.directive';
import { UppercaseDirective } from './AttributeDirective/uppercase.directive';
import { NameValidatorDirective } from './AttributeDirective/name-validator.directive';
import { TestIfDirective } from './StructuralDirective/test-if.directive';
import { DelayDirective } from './StructuralDirective/delay.directive';
import { LoopDirective } from './StructuralDirective/loop.directive';
import { ObjectNgForDirective } from './StructuralDirective/object-ng-for.directive';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    HighlightDirective,
    UppercaseDirective,
    NameValidatorDirective,
    TestIfDirective,
    DelayDirective,
    LoopDirective,
    ObjectNgForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
