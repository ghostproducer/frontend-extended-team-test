import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit {

  polls: any;
  currentPoll = null;
  currentIndex = -1;
  title = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.retrievePolls();
  }

  retrievePolls() {
    this.apiService.getAll()
      .subscribe(
        data => {
          this.polls = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrievePolls();
    this.currentPoll = null;
    this.currentIndex = -1;
  }

  setActivePoll(poll, index) {
    this.currentPoll = poll;
    this.currentIndex = index;
  }

  removeAllPolls() {
    this.apiService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievePolls();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.apiService.findByTitle(this.title)
      .subscribe(
        data => {
          this.polls = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  vote(option: number) {
    const data = {
      optionTwo: undefined,
      optionOne: undefined
    };
    if (option === 1) {
      data.optionOne = 1;
    } else if (option === 2) {
      data.optionTwo = 2;
    }

    this.apiService.vote( this.currentPoll.id, data)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.currentPoll.totalVotesOne = response.totalVotesOne;
          this.currentPoll.totalVotesTwo = response.totalVotesTwo;
        },
        error => {
          console.log(error);
        });
  }
}
