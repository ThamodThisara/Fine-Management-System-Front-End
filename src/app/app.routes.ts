import { Routes } from '@angular/router';
import { AddOfficerComponent } from './page/add-officer/add-officer.component';
import { ManageOfficerComponent } from './page/manage-officer/manage-officer.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { DashBoardPageComponent } from './page/dash-board-page/dash-board-page.component';
import { ManageTrafficLawComponent } from './page/manage-traffic-law/manage-traffic-law.component';
import { AddTrafficLawComponent } from './page/add-traffic-law/add-traffic-law.component';
import { FineIssuingComponent } from './page/fine-issuing/fine-issuing.component';
import { HomeComponent } from './page/home/home.component';
// import { LandingPageComponent } from './page/landing-page/landing-page.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: LandingPageComponent
    // },
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: "home",
        component: HomeComponent,
        children: [
            {
              path: "dashboard",
              component: DashBoardPageComponent
            },
            {
                path: "manage-officer",
                component: ManageOfficerComponent
            },
            {
                path: "manage-officer",
                children: [
                    {
                        path: "add-officer",
                        component: AddOfficerComponent
                    }
                ]
            },
            {
                path: "manage-traffic-law",
                component: ManageTrafficLawComponent
            },
            {
                path: "manage-traffic-law",
                children: [
                    {
                        path: "add-traffic-law",
                        component: AddTrafficLawComponent
                    }
                ]
            },
            {
                path: "fine-issuing",
                component : FineIssuingComponent
            }
        ]
    },

];
