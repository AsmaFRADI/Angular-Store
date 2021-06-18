import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {reducers} from './service-layer/store/app.state';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {SharedModule} from './shared/shared.module';
import {UserEffects} from './service-layer/store/users/user.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      UserEffects
    ]),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
