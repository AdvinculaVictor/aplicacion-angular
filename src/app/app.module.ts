import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalRedirectComponent,
} from '@azure/msal-angular';
import {
  InteractionType,
  PublicClientApplication,
} from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ConsumirApiADComponent,
} from './components/consumir-api-ad/consumir-api-ad.component';
import {
  ConsumirApiComponent,
} from './components/consumir-api/consumir-api.component';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './services/api.service';

const isIE=window.navigator.userAgent.indexOf('MSIE')>-1
||window.navigator.userAgent.indexOf('Trident/')>-1

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsumirApiComponent,
    ConsumirApiADComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    MsalModule.forRoot(new PublicClientApplication
      (
        {
          auth:{
            clientId:'8cdd5345-6e8b-49e7-a825-12117564ca6e',
            redirectUri:'http://localhost:4200',
            authority:'https://login.microsoftonline.com/33444707-653e-4367-bb8b-1ed2685b6b7c'
          },
          cache:
          {
            cacheLocation:'localStorage',
            storeAuthStateInCookie:isIE
          }
        }
      ),
      {
        interactionType:InteractionType.Redirect,
        authRequest:{
          scopes:['user.read']
        }
      },
      {
        interactionType:InteractionType.Redirect,
        protectedResourceMap:new Map(
          [
            ['https://graph.microsoft.com/v1.0/me',['user.Read']],
            ['localhost',['api://apiUri/api.scope']],
            ['https://advinculaproductapi.azurewebsites.net',['api://6c91fd07-2695-4303-a214-de6d178be33e/Products.Read','api://6c91fd07-2695-4303-a214-de6d178be33e/Products.Write']]
          ]
        )
      }
      )
  ],
  providers: [ApiService,{
    provide:HTTP_INTERCEPTORS,
    useClass:MsalInterceptor,
    multi:true
  },MsalGuard],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
