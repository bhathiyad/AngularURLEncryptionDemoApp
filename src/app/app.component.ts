import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlEncryptorServiceService } from './services/url-encryptor-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url-encryption-app';

  constructor(private router: Router, 
                private urlEncryptor: UrlEncryptorServiceService){}

  navigateToMeetings():void{
    var encryptedParams = this.urlEncryptor.encryptURL({ queryParams: { type: 'meeting' }});
    this.router.navigate(['/viewmeetings'], encryptedParams);
  }

  navigateToCirculars():void{
    var encryptedParams = this.urlEncryptor.encryptURL({ queryParams: { type: 'circular' }});
    this.router.navigate(['/viewcirculars'], encryptedParams);
  }

}
