import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'about', component: AboutComponent},

        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}