import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service/feedback.service';
import { DanieService } from 'src/app/services/danie.service/danie.service';


@Component({
  selector: 'manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private feedbackservice: FeedbackService,
    private danieService: DanieService) { }

  ngOnInit() {
    if(this.cookieService.get("user")!='manager'){
      this.router.navigate(['login']);
    }

    this.feedbackservice.getAllFeedbacks();
    this.danieService.getAllDania();
  }

  logout() {
    console.log("Wyzow onSubmit na logOut");
    this.cookieService.delete("user");
    this.router.navigate(['/']);
  }

  redirectTo(value: string) {
      console.log(value);
      this.router.navigate([value]);
  }
}
