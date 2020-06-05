import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AdComponentComponent } from './ad-component/ad-component.component';
import { AlertComponentComponent } from './alert-component/alert-component.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AdComponentComponent,
    AlertComponentComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   // This is needed for [(ngModule)] to work, i.e., two way binding.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
