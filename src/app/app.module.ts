import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './reusable/tabs/tabs.component';
import { UserListComponent } from './reusable/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
