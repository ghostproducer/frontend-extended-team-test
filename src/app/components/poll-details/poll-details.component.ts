import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {

  currentPoll = null;
  message = '';

  public barChartLabels: string[] = ['Label 1', 'Label 2'];
  public barChartData: number[] = [0, 0];
  public barChartType = 'bar';
  public barChartOptions = {
    legend: { display: false },
    title: {
      display: true,
      text: 'Number of votes'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }] }};


  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getPoll(this.route.snapshot.paramMap.get('id'));
  }

  getPoll(id) {
    this.apiService.get(id)
      .subscribe(
        data => {
          this.currentPoll = data;
          console.log(data);
          this.barChartLabels = [this.currentPoll.optionOne, this.currentPoll.optionTwo];
          this.barChartData = [this.currentPoll.totalVotesOne, this.currentPoll.totalVotesTwo];

        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      title: this.currentPoll.title,
      description: this.currentPoll.description,
      published: status,
      optionOne: this.currentPoll.optionOne,
      optionTwo: this.currentPoll.optionTwo
    };

    this.apiService.update(this.currentPoll.id, data)
      .subscribe(
        response => {
          this.currentPoll.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatePoll() {
    this.apiService.update(this.currentPoll.id, this.currentPoll)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The poll was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletePoll() {
    this.apiService.delete(this.currentPoll.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/poll']);
        },
        error => {
          console.log(error);
        });
  }

}
