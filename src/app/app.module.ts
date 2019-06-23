import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { EnrolleesComponent } from './components/enrollees/enrollees.component';
import { EnrolleeComponent } from './components/enrollee/enrollee.component';
import { AddComponent } from './components/add/add.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EnrolleesComponent,
    EnrolleeComponent,
    AddComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
