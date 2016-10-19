import {Component, OnInit} from "@angular/core";
import {NavbarComponent} from "../navbar/navbar.component";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    directives: NavbarComponent
})
export class HomeComponent implements OnInit {

    public constructor(private titleService: Title) {
        this.setTitle("MhaLong | Personal Web of little Developer");
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }


    ngOnInit() {
    }

}
