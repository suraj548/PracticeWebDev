import { StartingPageComponent } from './Components/starting-page/starting-page.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './Components/profile/profile.component';
import { MsgdisplayComponent } from './Components/msgdisplay/msgdisplay.component';
import { UserDetailsComponent } from './Components/user-list/user-details/user-details.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './Components/messages/messages.component';

const routes: Routes = [
  /*{
    path:'',
    pathMatch:'full',
    component:StartingPageComponent
  },*/
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'user-list',
    component:UserListComponent,
    children:[
      {
        path:'userdetails/:email',
        component:UserDetailsComponent
      }
    ]
  },
  {
    path:'product-list',
    component:ProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'message-list',
    component:MsgdisplayComponent
  },
  {
    path:'AddInventory',
    component:InventoryComponent
  },
  {
    path:'AddMessage',
    component:MessagesComponent
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'menu',
    component:MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
