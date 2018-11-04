import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class DataService {

  constructor(private http: Http) {
    var obj;
    this.getLedgerData().subscribe(data => obj=data, error => console.log(error));
   }

   public getLedgerData(): Observable<any> {
    return this.http.get("../assets/ledgerBlocks.json")
                    .map((res:any) => res.json())

}
}
