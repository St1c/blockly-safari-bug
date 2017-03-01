import { Component, OnInit, HostBinding } from '@angular/core';
// import { pageAnimation } from '../../core/animations.config';

@Component({
	selector: 'lm-network',
	templateUrl: 'network.component.html',
	// animations: pageAnimation
})
export class NetworkComponent implements OnInit {
	// @HostBinding('@routeAnimation') get routeAnimation() {
	// 	return true;
	// }	

	// @HostBinding('class') get class() {
	// 	return 'animated-component';
	// }

	constructor() { }

	ngOnInit() { }
}