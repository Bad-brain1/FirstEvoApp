import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { ItemsPageComponent } from './items-page/items-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'item',
    component:ItemsPageComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent,
    children: [
      {
        path:'detail',
        component:ItemDetailsComponent
      },
      {
        path:'list',
        component:ItemListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
