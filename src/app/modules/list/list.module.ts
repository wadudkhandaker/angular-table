import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './pipe/filter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: "",
          component: ListComponent
        }
      ]
    ),
    MatListModule,
    MatInputModule,
    FormsModule
  ]
})
export class ListModule { }
