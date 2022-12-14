import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InlineComponent } from './inline/inline.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'open-graph',
    component:InlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
