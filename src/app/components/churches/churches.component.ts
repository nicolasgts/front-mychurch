import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ChurchService } from '../../../services/domain/church.service';
import { ChurchDTO } from '../../../models/church.dto';

@Component({
  selector: 'app-churches',
  templateUrl: './churches.component.html',
  styleUrls: ['./churches.component.css']
})
export class ChurchesComponent implements OnInit {

  churches: ChurchDTO[];
  constructor(private churchService: ChurchService ) { }
  

  ngOnInit() {
    this.churchService.findAll()
    .subscribe(response => {
      this.churches = response;
    },
    error => {
      console.log(error);
    });
  }

}
