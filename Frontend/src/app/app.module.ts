import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { ProductDataService } from 'src/app/product-data.service';
import { HttpClient, HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MenuComponent } from './Components/menu/menu.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { ProductsComponent } from './Components/products/products.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { UserDetailsComponent } from './Components/user-list/user-details/user-details.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { MsgdisplayComponent } from './Components/msgdisplay/msgdisplay.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { StartingPageComponent } from './Components/starting-page/starting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    UserListComponent,
    ProductsComponent,
    InventoryComponent,
    UserDetailsComponent,
    MessagesComponent,
    MsgdisplayComponent,
    ProfileComponent,
    StartingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent] //defines root component
})
export class AppModule { }
