import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

    fullname: string = "Passakon Puttasuwan";
    position: string = "Developer & Programmer";
    quad: string = "\"คุณไม่ได้ไม่เก่ง คุณแค่ไม่ฝึก\"";
    avatar: string = "https://graph.facebook.com/804089789615716/picture?width=250&height=250";

    public constructor(private titleService: Title) {
        this.setTitle("About MhaLong | Personal Web of little Developer");
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }


    ngOnInit() {
    }

}
