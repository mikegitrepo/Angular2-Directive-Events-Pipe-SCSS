import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NameListService } from '../shared/name-list/index';
import { MovieFilterPipe } from './movieFilter.pipe';
import { ChildComponent } from './child.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent,MovieFilterPipe,ChildComponent],
  exports: [HomeComponent],
  providers: [NameListService],
  
})
export class HomeModule { }
