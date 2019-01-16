import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CookService } from 'src/app/services/cook.service/cook.service';
import { DanieZamowienie } from 'src/app/classes/DanieZamowienie';
import { Zamowienie } from 'src/app/classes/Zamowienie';
import { ShowTime } from 'src/app/classes/ShowTime';

@Component({
  selector: 'app-cook-dashboard',
  templateUrl: './cook-dashboard.component.html',
  styleUrls: ['./cook-dashboard.component.css']
})
export class CookDashboardComponent implements OnInit {


  showDishes : DanieZamowienie[];
  showOrder : Zamowienie[];
  showTime :ShowTime[]=[];
  //s: ShowTime={id:-1, skaldniki:[]};
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private cookService: CookService) { }

  ngOnInit() {
    this.cookService.getAllDanieZamowienie();
    this.cookService.getAllZamowienia();
    if (this.cookieService.get("user") != 'cook') {
      this.router.navigate(['login']);
    }
    setTimeout(()=>{

      this.createShowTime();
    },1000);
  }
  createShowTime(){
    this.showDishes = this.cookService.allDanieZamowienie;
    this.showOrder = this.cookService.allZamowienia;
    this.showOrder = this.cookService.allZamowienia.filter(s=> s.widacKucharz);
    this.showOrder.forEach(o =>{
      var s={id:-1, skaldniki:[]};
      s.id = o.id;
      let danieIds = o.dania_zamowienia_id;
      let tempNames = this.showDishes
                          .filter(sd=> danieIds.includes(sd.id))
                          .map(s=> s.nazwa);
      tempNames.forEach(n=> {
        var sk = {nazwa:n,gotowy:false}
        s.skaldniki.push(n);
      })
      
      console.log(s);
      this.showTime.push(s);
    });  
    console.log(this.showTime);
  }
  danieReady(d:ShowTime){
    swal({
      title: "Czy danie gotowe?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.showTime = this.showTime.filter(s=> s!==d);
          swal("Danie gotowe!", {
            icon: "success",
          });
        } else {
          swal("Danie nie gotowe!");
        }
      });

  }
}
