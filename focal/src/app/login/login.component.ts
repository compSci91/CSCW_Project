import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    /**
     * An object representing the user for the login form
     */
    public user:any;

    /**
     * An array of all the BlogPost objects from the API
     */
    public posts;

    /**
     * An object representing the data in the "add" form
     */
    public new_post: any;

    constructor(private _userService: UserService) { }

    ngOnInit() {
      // this.getPosts();
      this.new_post = {};
      this.user = {
        username: 'This is the username',
        password: ''
      };
    }

    login(user) {
      // this._userService.login({'username': this.user.username, 'password': this.user.password});
      console.log(user)
      this._userService.login(user);


    }

    refreshToken() {
      this._userService.refreshToken();
    }

    logout() {
      this._userService.logout();
    }


}
