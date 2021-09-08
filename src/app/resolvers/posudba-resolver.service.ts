import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PosudbaService } from '../services/posudba.service';

@Injectable({
  providedIn: 'root'
})
export class PosudbaResolverService implements Resolve<boolean> {

  constructor(private posudbaService: PosudbaService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
   
      return await this.posudbaService.initMkp();
      //posudba

    
  }
  
}

