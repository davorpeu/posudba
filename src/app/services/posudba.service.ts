import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Posudba } from '../interfaces/posudba';

@Injectable({
  providedIn: 'root'
})
export class PosudbaService {

  constructor(private httpClient: HttpClient) { }

  url: string = "http://localhost/posudba/posudba"
  posudba: BehaviorSubject<Posudba[]> = new BehaviorSubject<Posudba[]>(null);


  initMkp(): Observable<Posudba[]> {

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
     return this.httpClient.get<Posudba[]>(this.url)
  // .toPromise().then((res: {
  //     svePosudbe: Posudba[];
  //   }) => {
  //     this.posudba.next(res.svePosudbe)
  //     console.log(this.posudba)
  //   })
   }

}
