import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AuthServiceService } from './service/auth-service.service';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './service/user-service.service';
import { OrdersComponent } from './components/orders/orders.component';
import { CartService } from './service/cart.service';
import { FilterPipe } from './shared/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CustomInterceptor } from './custom.interceptor';
import { ApisService } from './apis.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { OderService } from './service/oder.service';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponentComponent,
    PageNotfoundComponent,
    OrdersComponent,
    CartComponentComponent,
    FilterPipe,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
 
    
   

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbTooltipModule,
    NgbCollapseModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
    
  ],
  providers: [
    ApisService,
    AuthServiceService,
    UserServiceService,
    CartService,
    OderService,
    {  provide:HTTP_INTERCEPTORS, useClass: CustomInterceptor,multi:true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
