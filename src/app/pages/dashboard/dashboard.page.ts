import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posudba } from 'src/app/interfaces/posudba';
import { PosudbaService } from 'src/app/services/posudba.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private posudbaService: PosudbaService,) { }

  public labels: any[] = ['Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  dobivenePosudbe: Array<Posudba> = []


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.posudbaService.initMkp().subscribe(data => this.dobivenePosudbe = data)
    // this.DateFormater()



  }
// log(){
//   console.log(this.dobivenePosudbe);

// }

  // myFunction(){
  //   this.date=new Date();
  //   let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  //  }

  //   async DateFormater() {
  //  let newdate = this.posudbaService.initMkp()
  //     for (let posudba of this.dobivenePosudbe) {
  //       //  posudba.datum=new Date()
  //       let latest_date = posudba.datum.toLocaleTimeString("de-AT");
  //       // posudba.datum
  //       // posudba.datumPrimitka
  //       console.log(latest_date.toString); // 1, "string", false
  //     }
  //     //  this.dobivenePosudbe. = formatDate(Date.now(),'yyyy-MM-dd','en-US');
  //   }

}
