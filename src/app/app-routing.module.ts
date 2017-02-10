import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Components
 */
import { HomeComponent } from './content/home/home.component'

const routes: Routes = [
    { path: '',  component: HomeComponent },   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
