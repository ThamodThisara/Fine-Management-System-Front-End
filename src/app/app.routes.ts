import { Routes } from '@angular/router';
import { AddOfficerComponent } from './page/add-officer/add-officer.component';
import { ManageOfficerComponent } from './page/manage-officer/manage-officer.component';

export const routes: Routes = [
    {path: "manage-officer", component: ManageOfficerComponent},
    {path: "manage-officer",children: [
        {path: "add-officer",component: AddOfficerComponent}
    ]}
];
