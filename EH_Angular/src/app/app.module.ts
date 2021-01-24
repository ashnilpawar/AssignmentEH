import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, rountingComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatModule } from './mat.module';
import { UserService } from './user/user.service'
import { Status } from './pipes/status.pipe';
import { LoaderComponent } from "./loader/loader.component";
import { LoaderService } from './loader.service';
import { LoaderInterceptor } from './loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    Status,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,

  ],
  providers: [
    LoginService,
    UserService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
