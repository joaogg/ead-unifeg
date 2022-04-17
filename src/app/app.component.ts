import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedRoute = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      this.userIsLoggedIn();
  });
   }

  ngOnInit(): void {
    this.userIsLoggedIn();
  }

  userIsLoggedIn() {
    if(this.authService.isLoggedIn === true) {
      this.loggedRoute = true;
    } else {
      this.loggedRoute = false;
    }
  }

}
