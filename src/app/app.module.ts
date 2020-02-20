import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedOneComponent } from './nested-one/nested-one.component';
import { NestedTwoComponent } from './nested-two/nested-two.component';
import { GeneralComponent } from './general/general.component';
import { GeneralAComponent } from './general-a/general-a.component';
import { GeneralBComponent } from './general-b/general-b.component';
import { GeneralCComponent } from './general-c/general-c.component';
import { GeneralCCComponent } from './general-c-c/general-c-c.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedOneComponent,
    NestedTwoComponent,
    GeneralComponent,
    GeneralAComponent,
    GeneralBComponent,
    GeneralCComponent,
    GeneralCCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
