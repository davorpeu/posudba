import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Posudba } from '../interfaces/posudba';

@Injectable({
  providedIn: 'root'
})
export class PosudbaService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  url: string = "http://localhost/posudba/posudba"
  posudba: BehaviorSubject<Posudba[]> = new BehaviorSubject<Posudba[]>(null);


  initMkp(): Observable<Posudba[]> {
    return this.httpClient.get<Posudba[]>(this.url)
    // let body = {
    //   "db": "mkp",
    //   "queries": [
    //     {
    //       "query": "mkp",
    //       "params": {
    //         "action": "all"
    //       },
    //       tablename: 'svePosudbe'
    //     }
    //   ]
    // }

    // .toPromise().then((res: {
    //     svePosudbe: Posudba[];
    //   }) => {
    //     this.posudba.next(res.svePosudbe)
    //     console.log(this.posudba)
    //   })
  }

  dodajPosudbu(datum: string, narucitelj: string, status: string,
    naslov: string,
    autor: string,
    izdanje: string,
    udk: number,
    odsjek: string,
    knjiznica: string,
    knjiznicaInozemna: string,
    // dostupno: boolean,
    // datumPrimitka: Date,
    // datumPovratka: Date,
    oblik: string,
    napomena: string,) {
    let body = {
      "datum": datum,
      "narucitelj": narucitelj,
      "status": status,
      "naslov": naslov,
      "autor": autor,
      "izdanje": izdanje,
      "udk": udk,
      "odsjek": odsjek,
      "knjiznica": knjiznica,
      "knjiznicaInozemna": knjiznicaInozemna,
      "dostupno": 1,
      "datumPrimitka": null,
      "datumPovratka": null,
      "oblik": oblik,
      "napomena": napomena
    }
    this.httpClient.post(this.url, body).subscribe((res: Array<Posudba>) => {
      if (res.length > 0) {

        this.posudba.next(res);
      }


      this.router.navigate(['/dashboard']), { replaceUrl: true }
    });
  }

}


