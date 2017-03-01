import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule} from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BlocklyModule } from './blockly/blockly.module';

import { AppComponent } from './app.component';
import { NetworkComponent } from './network/network.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BlocklyModule.forRoot()
    ],
    declarations: [
        AppComponent,
        NetworkComponent
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    bootstrap: [AppComponent]
})

export class AppModule {}
