import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { MatCardModule } from "@angular/material/card";

import { MatButtonModule } from "@angular/material/button";

import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    HttpModule
  ],

  declarations: [AppComponent],

  bootstrap: [AppComponent]
})
export class AppModule {}
