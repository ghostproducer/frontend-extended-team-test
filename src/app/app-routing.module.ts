import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollDetailsComponent } from './components/poll-details/poll-details.component';
import { PollListComponent} from './components/poll-list/poll-list.component';
import { AddPollComponent} from './components/add-poll/add-poll.component';

const routes: Routes = [
  { path: '', redirectTo: 'poll', pathMatch: 'full' },
  { path: 'poll', component: PollListComponent },
  { path: 'poll/:id', component: PollDetailsComponent },
  { path: 'add', component: AddPollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
