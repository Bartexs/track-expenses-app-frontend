import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesCategoriesManagementComponent } from './management/pages-categories-management.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesCategoriesEditorComponent } from './management/pages-categories-editor/pages-categories-editor.component';
import { CommonComponentsModule } from 'src/app/common/components/common-components.module';

const routes: Routes = [
  {
    path: 'management',
    component: PagesCategoriesManagementComponent,
  },
];

@NgModule({
  declarations: [
    PagesCategoriesManagementComponent,
    PagesCategoriesEditorComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonComponentsModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class PagesCategoriesModule { }