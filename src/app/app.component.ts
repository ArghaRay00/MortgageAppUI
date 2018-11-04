import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { images } from "./images";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DataService]
})
export class AppComponent {
  ledgerBlocks: any;
  Images = images;

  constructor(dataService: DataService) {
    let i = 0;
    dataService.getLedgerData().subscribe(data => {
      this.ledgerBlocks = data;
      this.ledgerBlocks.map(data => (data["images"] = this.Images[i++].images));
      console.log("LEDGER DATA: = " + this.ledgerBlocks[1]);
      console.log("LEDGER DATA: = " + JSON.stringify(this.ledgerBlocks[1]));
      console.log("LEDGER DATA LENGTH: = " + this.ledgerBlocks.length);
    });
  }

  title = "app";
  data =
    '{"menu": {  "id": "file",  "value": "File",  "popup": {    "menuitem": [{"value": "New", "onclick": "CreateNewDoc()"},      {"value": "Open", "onclick": "OpenDoc()"},      {"value": "Close", "onclick": "CloseDoc()"}    ]  }}}';
  data1 = JSON.parse(this.data);
  collapsed = true;
}
