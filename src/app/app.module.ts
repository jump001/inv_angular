import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//ng bootstrap
import { NgbAlertModule, NgbModalConfig, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
// Chart JS
import { ChartModule } from 'angular2-chartjs';
// HttpModule
import { HttpClientModule } from '@angular/common/http';

// Form Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Constant Service
import { ConstantService } from './services/common/constant.service';





import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotpassComponent } from './pages/auth/forgotpass/forgotpass.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { CategoryComponent } from './pages/backend/category/category.component';
import { ProductComponent } from './pages/backend/product/product.component';
import { ReportComponent } from './pages/backend/report/report.component';
import { UsersComponent } from './pages/backend/users/users.component';
import { SettingComponent } from './pages/backend/setting/setting.component';
import { HeaderFrontendComponent } from './shared/frontend/header-frontend/header-frontend.component';
import { FooterFrontendComponent } from './shared/frontend/footer-frontend/footer-frontend.component';
import { HeaderBackendComponent } from './shared/backend/header-backend/header-backend.component';
import { FooterBackendComponent } from './shared/backend/footer-backend/footer-backend.component';
import { SidebarBackendComponent } from './shared/backend/sidebar-backend/sidebar-backend.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent,
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    ReportComponent,
    UsersComponent,
    SettingComponent,
    HeaderFrontendComponent,
    FooterFrontendComponent,
    HeaderBackendComponent,
    FooterBackendComponent,
    SidebarBackendComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [NgbModalConfig,ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
