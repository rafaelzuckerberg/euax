import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard/administradores',
        loadChildren: './users/administrator/administrator.module#AdministratorModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        loadChildren: './projects/projects.module#ProjectsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard/visitantes',
        loadChildren: './users/visitor/visitor.module#VisitorModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard/checkout',
        loadChildren: './checkout/checkout.module#CheckoutModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard/salas',
        loadChildren: './room/room.module#RoomModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule',
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'users',
    //     loadChildren: './users/users.module#UsersModule',
    //     canActivate: [AuthGuard]
    // }, 
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
