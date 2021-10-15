import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { StudentsComponent } from "./students/students.component";

import { StudentListComponent } from "./student-list/student-list.component";

import { ContactComponent } from "./contact/contact.component";


export const APP_ROUTES = [
{
    path: 'about',
    component: AboutComponent,
    data:{
        animation:{
            value: 'about'
        }
    }
},{
    path: 'contact',
    component: ContactComponent,
    data:{
        animation:{
            value: 'contact'
        }
    }
},{
    path:'students',
    component:StudentsComponent,
    data:{ }
},{
    path:'studentlist',
    component:StudentListComponent,
    data:{ }
}

];