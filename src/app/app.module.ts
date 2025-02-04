import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPollComponent } from './components/add-poll/add-poll.component';
import { PollDetailsComponent } from './components/poll-details/poll-details.component';
import { PollListComponent } from './components/poll-list/poll-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { VotePollComponent } from './components/vote-poll/vote-poll.component';
import { VoteListComponent } from './components/vote-list/vote-list.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AddPollComponent,
    PollDetailsComponent,
    PollListComponent,
    VotePollComponent,
    VoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
