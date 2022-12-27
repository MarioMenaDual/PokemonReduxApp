import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/components/hijo/hijo.component';
import { NietoComponent } from './contador/components/nieto/nieto.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './contador/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetPkemonInfoEffect } from './contador/effects/get-pokemon.effects';
import { HttpClientModule } from '@angular/common/http';
import {AnimateModule} from 'primeng/animate';
import { ButtonModule } from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChipModule } from 'primeng/chip';
import {BadgeModule} from 'primeng/badge';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent

  ],
  imports: [
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(GetPkemonInfoEffect),
    HttpClientModule,
    AnimateModule,
    ButtonModule,
    ProgressBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChipModule,
    BadgeModule,
    ProgressSpinnerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
