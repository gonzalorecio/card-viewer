import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service'
import Alert from '../../../_models/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {

  constructor(
    private _alert: AlertService
  ) { }

  alert: Alert

  ngOnInit() {
    this._alert.alert.subscribe(a => {
      this.alert = a
    })
  }

}
