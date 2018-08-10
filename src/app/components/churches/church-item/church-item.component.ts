import { Component, OnInit, Input } from '@angular/core';
import { ChurchDTO } from '../../../../models/church.dto';

@Component({
  selector: 'app-church-item',
  templateUrl: './church-item.component.html',
  styleUrls: ['./church-item.component.css']
})
export class ChurchItemComponent implements OnInit {

  @Input() church : ChurchDTO;
  constructor() { }

  ngOnInit() {
  }


}
