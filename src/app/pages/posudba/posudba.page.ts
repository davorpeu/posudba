import { Component, OnInit } from '@angular/core';
import { PosudbaService } from 'src/app/services/posudba.service';
import { formatDate } from "@angular/common";
import { defaultMaxListeners } from 'events';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-posudba',
  templateUrl: './posudba.page.html',
  styleUrls: ['./posudba.page.scss'],
})
export class PosudbaPage implements OnInit {

  constructor(private posudbaService: PosudbaService) {
    // typeof formatDate(this.datum,"medium", "en-GB")
   }

  ngOnInit() {
  }

  private naslov: string = null
  private autor: string = null
  private izdanje: string = null

  // date = new Date().toUTCString;
  
   datum = JSON.stringify(new Date()).replace(/\"/g, "");
  

  
  narucitelj: string = null
  status = "student";
  // grada = this.naslov + this.autor + this.izdanje
  udk: number = null
  odsjek: string = null
  knjiznica = "FFOS"
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
