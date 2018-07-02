import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ItemComponent } from './item/item.component';
<<<<<<< HEAD
import { OrderComponent } from './order/order.component';
=======
import { ItemListComponent } from './item-list/item-list.component';
>>>>>>> ed94ded02141aa4af4bd2c123e262dbdef06018b


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ItemComponent,
<<<<<<< HEAD
    OrderComponent
=======
    ItemListComponent
>>>>>>> ed94ded02141aa4af4bd2c123e262dbdef06018b
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
