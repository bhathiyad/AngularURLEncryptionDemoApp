import { Component, OnInit } from '@angular/core';
import { UrlEncryptorServiceService } from '../services/url-encryptor-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  
  queryParameter:string;
  queryParamBeforeEncrypt:string;

  constructor(private route: ActivatedRoute,
                private urlEncryptor: UrlEncryptorServiceService) {

    this.queryParamBeforeEncrypt = "queryParams: { type: 'meeting' }";               
    this.queryParameter = this.urlEncryptor.getQueryParam(this.route,'type');
    console.log('Meeting constructor');
  }

  ngOnInit() {
  }

}
