import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlEncryptorServiceService } from '../services/url-encryptor-service.service';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  queryParameter:string;
  queryParamBeforeEncrypt:string;

  constructor(private route: ActivatedRoute,
    private urlEncryptor: UrlEncryptorServiceService) { 

  this.queryParamBeforeEncrypt = "queryParams: { type: 'circular' }";    
  this.queryParameter = this.urlEncryptor.getQueryParam(this.route,'type');
  console.log('Circular constructor');

}

  ngOnInit() {
  }

}
