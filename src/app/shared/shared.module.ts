import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';

@NgModule({
  declarations: [ValidationMessageComponent],
  imports: [CommonModule],
  exports: [ValidationMessageComponent],
})
export class SharedModule {}
