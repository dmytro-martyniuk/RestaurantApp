import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FeedbackService } from 'src/app/services/feedback.service/feedback.service';
import { Feedback } from '../../classes/feedback'
import { InMemoryDataService } from 'src/app/database/in-memory-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';


@Component({
  selector: 'manager-feedback',
  templateUrl: './manager-feedback.component.html',
  styleUrls: ['./manager-feedback.component.css']
})
export class ManagerFeedbackComponent implements OnInit {

  constructor(
      private router: Router, 
      private location: Location,
      public feedbackService: FeedbackService, 
      private inMemoryDataService: InMemoryDataService,
      private http: HttpClient
    ) { }
    
    feedbackURL :string  = "api/feedbacks";
    allFeedbacks: Feedback [];

  ngOnInit() {
    //this.allFeedbacks = this.feedbackService.getFeedbacks();
    //this.feedbacks = this.inMemoryDataService.createDb().feedbacks;
    //this.getAllFeedbacks();
    
    this.allFeedbacks = this.feedbackService.allFeedbacks;
     //this. getInfo();
     
  }

  logOut() {
    this.router.navigate(['/']);
  }

  goToAddFeedback() {
    this.router.navigate(['manager/addfeednack'])
  }

  goBack() {
    this.location.back();
  } 

  getInfo() {
    console.log("getInfo")
    console.log(this.allFeedbacks);
  }

  onSelectFeedback(id:number) {
    this.router.navigate(['/manager/feedback/:id']);
  }


  getAllFeedbacks() {
    this.getFeedbacks().subscribe(
      data => {this.allFeedbacks = data}
    )
  }


  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.feedbackURL)
    .pipe(
      tap(_ => console.log('fetched data')),
      catchError(this.handleError('getAllFeedbacks', []))
    ); 
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
