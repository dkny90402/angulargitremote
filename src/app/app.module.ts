import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ItemComponent,
    OrderComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
