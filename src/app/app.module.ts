import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthConfigModule } from './auth-config/auth-config.module';
import { HomeComponent } from './pages/home/home.component';
import { VerifyUserComponent } from './pages/verify-user/verify-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerifyUserComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    AuthConfigModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
  
  
  
})
export class AppModule { }
