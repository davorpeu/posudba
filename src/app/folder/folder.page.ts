import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posudba } from '../interfaces/posudba';
import { PosudbaService } from '../services/posudba.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private posudbaService: PosudbaService) { }

  public labels:any[] = ['Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  dobivenePosudbe: Array<Posudba> = []

  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.posudbaService.initMkp().subscribe(data => this.dobivenePosudbe = data)
    console.log(this.dobivenePosudbe);
    
      
    

  }
}
