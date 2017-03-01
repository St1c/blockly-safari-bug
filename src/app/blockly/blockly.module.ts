import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';

import { BlocklyComponent }   from './blockly.component';

@NgModule({
	exports: [
		BlocklyComponent,
	],
	declarations: [
		BlocklyComponent,
	],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class BlocklyModule {
	static forRoot(): ModuleWithProviders {

		return {
			ngModule: BlocklyModule,
			providers: [
			]
		}
	};
 }
