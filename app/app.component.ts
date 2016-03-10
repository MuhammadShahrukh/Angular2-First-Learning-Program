import {Component} from "angular2/core";
import {Angular2Definition} from "./ang2-def.component";
import {MyComponent} from "./com.component";
import {MyDirective} from "./direc.component";
import {MyService} from "./serv.component";
import {MyRouter} from "./rout.component";

@Component({
    selector : "my-app",
    template : `
        <div>
            <h1>My First Angular 2 Application</h1>
            <p>{{description}}</p>
        </div>
        <angular2-def></angular2-def>
        <component></component>
        <directive></directive>
        <router></router>
        <service></service>
    `,
    directives : [Angular2Definition,MyComponent,MyDirective,MyService,MyRouter]
})

export class AppComponent{
    description = "In Angular 2 every thing is considered as a Component. In this application i made five components for each angular bulding block"
}