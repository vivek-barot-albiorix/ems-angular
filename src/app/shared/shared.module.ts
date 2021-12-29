import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { ValidationMessageComponent } from './components/validation-message/validation-message.component';

@NgModule({
  declarations: [ValidationMessageComponent],
  imports: [CommonModule, ToastrModule.forRoot()],
  exports: [ValidationMessageComponent],
})
export class SharedModule {}
