import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login-front';

  readonly apiUrl = environment.ApiUrl;

  users: any = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.http.post(this.apiUrl + 'login', this.loginForm.value).subscribe(user => {
      console.log(user);
    });
  }

}
