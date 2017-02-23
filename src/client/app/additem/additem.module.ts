import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdditemComponent } from './additem.component';
import { NameListService } from '../shared/name-list/index';
import { testdir } from '../shared/mydirectives/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AdditemComponent,testdir],
  exports: [AdditemComponent],
  providers: [NameListService],
  
})
export class AdditemModule { }
