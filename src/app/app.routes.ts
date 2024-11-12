import { Routes } from '@angular/router';
import { AddOfficerComponent } from './page/add-officer/add-officer.component';
import { ManageOfficerComponent } from './page/manage-officer/manage-officer.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { DashBoardPageComponent } from './page/dash-board-page/dash-board-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: "dashboard",
        component: DashBoardPageComponent,
        children: [
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
            }
        ]
    },

];
