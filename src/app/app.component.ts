import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const unusedVar = '';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'personal-website';
	constructor() {
		if (
			'asdadasdasdasdasdasdasdasdasddsadasdaadasddasdaddadasdsdadsasd' > this.title &&
			this.title.length > 5
		) {
			console.log('longer');
		}
	}
}
