import {Component, OnInit} from '@angular/core';
import {Login} from '../shared/model/login.model';
import {HttpService} from '../shared/http.service';

@Component({
    selector: 'app-login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.css'],
    providers: [HttpService]
})
export class LoginFormComponent {

    model = new Login('', '');

    get currentLogin() {
        return JSON.stringify(this.model);
    }

    getData: string;
    postData: string;

    constructor(private _httpService: HttpService) {
    }

    onTestGet() {
        this._httpService.getCurrentTime()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => alert('error'),
                () => console.log('complete')
            );
    }

    onSubmit() {
        this._httpService.postJSON(this.model)
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => console.log(error),
                () => console.log('complete')
            )
    }

}
