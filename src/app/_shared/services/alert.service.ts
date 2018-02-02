import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import Alert , {AlertType} from '../../_models/alert.model'

@Injectable()
export class AlertService {

  private _alertSubject: Subject<Alert> = new Subject<Alert>()
  alert: Observable<Alert> = this._alertSubject.asObservable()
  
  error(message = "", title="Error:"){
    const newAlert = new Alert(
      title,
      message,
      AlertType.Error
    )
    this._alertSubject.next(newAlert)
  }

  info(message = "", title = "Info:"){
    const newAlert = new Alert(
      title,
      message,
      AlertType.Info
    )
    this._alertSubject.next(newAlert)
  }

}
