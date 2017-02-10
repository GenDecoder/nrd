import { Component, HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu: Boolean = false;
  navIsFixed: Boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }


  @HostListener("window:scroll", [])

  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 0) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;    
  }
}
