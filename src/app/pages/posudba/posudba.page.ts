import { Component, OnInit } from '@angular/core';
import { PosudbaService } from 'src/app/services/posudba.service';
import { formatDate } from "@angular/common";
import { defaultMaxListeners } from 'events';
import { stringify } from '@angular/compiler/src/util';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-posudba',
  templateUrl: './posudba.page.html',
  styleUrls: ['./posudba.page.scss'],
})
export class PosudbaPage implements OnInit {

  constructor(private posudbaService: PosudbaService, private userService: UserService) {
    // typeof formatDate(this.datum,"medium", "en-GB")
 
   }

  ngOnInit() {
    if (this.userService.currentUser.getValue()) {
      
    this.status =  this.userService.currentUser.value.status ;
    } else {
      this.status = "Anoniman"
    }

    
  }

  private naslov: string = null
  private autor: string = null
  private izdanje: string = null

  // date = new Date().toUTCString;
  
   datum = JSON.stringify(new Date()).replace(/\"/g, "");
status: string;
  


  
  narucitelj: string = null
  // let userId = this.userService.currentUser.value.userId
  
  // grada = this.naslov + this.autor + this.izdanje
  udk: number = null
  odsjek: string = null
  knjiznica: string = null
  knjiznicaInozemna: string = null
  oblik: string = null
  napomena: string = null

  //status dodaj da uzima iz user.status varijable

  //doraditi

  dodajPosudbu() {

    this.posudbaService.dodajPosudbu(this.datum, this.narucitelj, this.status, this.naslov, this.autor, this.izdanje, this.udk, this.odsjek, this.knjiznica,this.knjiznicaInozemna, this.oblik, this.napomena)

console.log(this.datum);



  }
}
