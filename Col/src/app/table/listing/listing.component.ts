import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  public userInfo: any = {};

constructor(
  private http: HttpClient ){
   
  }

 public jsonData= [
    {
      "id": 1,
      "ssP_ID": 10017,
      "ssP_Name": "Todo Masajes",
      "introdcution": null,
      "email": "info@todomasa",
      "telephone": "4393-3283",
      "website": "https://www.to",
      "registration_IP": null,
      "activation_IP": null,
      "latest_IP": null,
      "countryCode": null,
      "createdDate": "2022-01-06T00:00:00",
      "updateDate": "2006-04-04T08:19:00",
      "reason": "Offers a vallidation picture",
      "status":"Open"
    },
    {
    
    "id": 1,
    "ssP_ID": 10017,
    "ssP_Name": "Todo Masajes",
    "introdcution": null,
    "email": "info@todomasa",
    "telephone": "4393-3283",
    "website": "https://www.to",
    "registration_IP": null,
    "activation_IP": null,
    "latest_IP": null,
    "countryCode": null,
    "createdDate": "2022-01-06T00:00:00",
    "updateDate": "2006-04-04T08:19:00",
    "reason": "null",
    "status":"Open"
  }
  ];
 
// getphone(): Observable<any>{debugger
//  let url: string= `https://jr-27-col-shared-api-weu-test.azurewebsites.net/api/QualityScore/Phone-Info?phoneNumber=919162700896`;
//  return this.http.get(url).pipe(map(data => data.json()));
// }
}
