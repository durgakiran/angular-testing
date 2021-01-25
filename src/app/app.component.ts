import { Component, OnInit } from '@angular/core';
import { AppService } from './app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hide: boolean;


  constructor(
    private _appService: AppService
  ) {}

  ngOnInit() {
    this._appService.hide.subscribe((res) => {
      this.hide = res;
      console.log(res);
    });
    setTimeout(() => {
      this._appService.updateHide(true);
    }, 100);
  }
}
