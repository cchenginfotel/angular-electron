import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {}

  public goTo(targetLocation: string) {
    console.log("goto: "+targetLocation);
    switch (targetLocation) {
      case "loginPage":
        this.router.navigate(["login"], { relativeTo: this.route });
        break;
    case "homePage":
        this.router.navigate(["home"], { relativeTo: this.route });
        break;
    default:
      this.router.navigate([""], { relativeTo: this.route });
      break;
    }
  }
}
