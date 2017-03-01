import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NetworkComponent } from './network/network.component';

export const routes: Routes = [
    {
        path: 'network',
        component: NetworkComponent,
        data: { preload: true }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
