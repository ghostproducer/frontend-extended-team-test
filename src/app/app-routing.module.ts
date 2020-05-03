import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollDetailsComponent } from './components/poll-details/poll-details.component';
import { PollListComponent} from './components/poll-list/poll-list.component';
import { AddPollComponent} from './components/add-poll/add-poll.component';
import {VotePollComponent} from './components/vote-poll/vote-poll.component';
import {VoteListComponent} from './components/vote-list/vote-list.component';

const routes: Routes = [
  { path: '', component: VoteListComponent },
  { path: 'poll', component: PollListComponent },
  { path: 'poll/:id', component: PollDetailsComponent },
  { path: 'add', component: AddPollComponent },
  { path: 'vote/:id', component: VotePollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
