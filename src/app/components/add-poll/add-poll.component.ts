import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent implements OnInit {

  poll = {
    title: '',
    description: '',
    published: false,
    optionOne: '',
    totalVotesOne: 0,
    optionTwo: '',
    totalVotesTwo: 0
  };
  submitted = false;

  constructor(private pollService: ApiService) { }

  ngOnInit() {
  }

  savePoll() {
    const data = {
      title: this.poll.title,
      description: this.poll.description,
      optionOne: this.poll.optionOne,
      optionTwo: this.poll.optionTwo
    };

    this.pollService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPoll() {
    this.submitted = false;
    this.poll = {
      title: '',
      description: '',
      published: false,
      optionOne: '',
      totalVotesOne: 0,
      optionTwo: '',
      totalVotesTwo: 0
    };
  }
}
