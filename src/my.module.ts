import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineComponent, TemplateComponent } from './components';

@NgModule({
  declarations: [
    InlineComponent,
    TemplateComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InlineComponent,
    TemplateComponent,
    CommonModule,
  ],
  providers: [],
})
export class MyModule {}
