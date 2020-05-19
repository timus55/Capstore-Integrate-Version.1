import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// To Handle Reactive Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// To Handle HttpClient service
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent    // registering all userdefined
                    //   components, directives,
                    // pipes
                        
  ],
  imports: [
    BrowserModule,  // Registering Predefined 
                      // and User defined
    AppRoutingModule,  // modules for e.g:
    ReactiveFormsModule, // ReactiveFormsModule for Reactive forms,
    FormsModule, // FormsModule for Template driven forms
    HttpClientModule      // HttpClientModule for HttpClient,           etc
  ],
  providers: [],    // Registering userdefined 
                    // services
  bootstrap: [AppComponent]   // Specifies startup 
                              //  component
})
export class AppModule { }
