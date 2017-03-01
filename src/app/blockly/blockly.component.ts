import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription } from 'rxjs/Rx';

declare var Blockly: any;
declare var window: any;

require('blockly/blocks/colour.js')
require('blockly/blocks/lists.js')
require('blockly/blocks/logic.js')
require('blockly/blocks/loops.js')
require('blockly/blocks/math.js')
require('blockly/blocks/procedures.js')
require('blockly/blocks/text.js')
require('blockly/blocks/variables.js')

@Component({
	selector: 'lm-blockly',
	templateUrl: 'blockly.component.html',
	styleUrls: ['./blockly.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BlocklyComponent implements OnInit, OnDestroy {

	@Input() blockName: string;
	private workspace: any;

	constructor() {}

	ngOnInit(): void {
		this.loadBlockly();
	}

	ngOnDestroy(): void {}

	loadBlockly(): void {
		console.log('blockly loaded');

		let toolbox: any = {
			toolbox: document.getElementById('toolbox'),
			grid: {
				spacing: 25,
				length: 3,
				colour: '#cccccc',
				snap: true
			},
			zoom: {
				controls: true,
				// wheel: true,
				startScale: 1.0,
				maxScale: 1,
				minScale: 0.3,
				scaleSpeed: 1.2
			},
			// media: '../vendor/blockly/media/', // For development
			media: 'media/', // For production
			readOnly: false,
			// scrollbars: true,
			sounds: false,
			trashcan: true,
			collapse: true,
			comments: false,
			disable: true,
			// css: false
		};
		
		this.workspace = Blockly.inject('content-blocks', toolbox)
		
		setTimeout( () => this.workspace.render(), 1);

		console.log(this.workspace);
	}

}