import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PathbarComponent } from './pathbar/pathbar.component';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BodyComponent } from './body/body.component';
import { CommentsComponent } from './comments/comments.component';
import { FooterComponent } from './footer/footer.component';
import { OpenningComponent } from './openning/openning.component';
import { DataServiceService}  from './services/data-service.service';
import { HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    PathbarComponent,
    ProfileinfoComponent,
    SidemenuComponent,
    BodyComponent,
    CommentsComponent,
    FooterComponent,
    OpenningComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
