import { Injectable } from '@angular/core';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UrlEncryptorServiceService {

  private readonly _encKey:string = "Abc_123+" 

  constructor() { }

  encryptURL(extras: NavigationExtras):NavigationExtras{

    var navigationExtrasJsonString = JSON.stringify(extras.queryParams);;
    console.log("before encrypt " + navigationExtrasJsonString);
    var encryptedQueryParams = CryptoJS.AES.encrypt(navigationExtrasJsonString, this._encKey).toString();
    var encryptedURL = { queryParams: { q: encryptedQueryParams } };
    console.log("After encrypt " + encryptedQueryParams);
    console.log("After encrypt " + encryptedURL);
    return encryptedURL;
  }

  decryptURL(encryptedQueryParam:string):NavigationExtras{
    var decryptedQueryParams = CryptoJS.AES.decrypt(encryptedQueryParam, this._encKey).toString(CryptoJS.enc.Utf8);
    console.log("After decrypt " + decryptedQueryParams);
    return decryptedQueryParams;
  }

  getQueryParam(route: ActivatedRoute, param: string):string{
    var encryptedQueryParam = route.snapshot.queryParamMap.get('q');
    var decryptedQueryParams = CryptoJS.AES.decrypt(encryptedQueryParam, this._encKey).toString(CryptoJS.enc.Utf8);
    console.log(decryptedQueryParams);
    var decryptedQueryParamsJson = JSON.parse(decryptedQueryParams);
    console.log(decryptedQueryParamsJson);
    return decryptedQueryParamsJson[param];
  }
}
