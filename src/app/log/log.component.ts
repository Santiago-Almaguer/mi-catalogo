import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  myMessages!: string[];

  constructor(private MessagesService: MessagesService) { }

  ngOnInit(): void {
    this,this.myMessages = this.MessagesService.messages;

  }

}
