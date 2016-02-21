(function (app) {
	app.AppComponent =
		ng.core.Component({
			selector: 'my-app',
			template: `
				<h1>{{title}}</h1>
				<nav>
					<a [routerLink]="['Dashboard']">Dashboard</a>
					<a [routerLink]="['Heroes']">Heroes</a>
				</nav>
				<router-outlet></router-outlet>
			`,
			styleUrls: ['app/app.component.css'],
			directives: [ng.router.ROUTER_DIRECTIVES],
			providers: [ng.router.ROUTER_PROVIDERS, HeroService]
		})
		.Class({
			constructor: function () {
				this.title = 'Tour of Heroes';
			}
		});

	ng.router.RouteConfig([
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: app.DashboardComponent,
			useAsDefault: true
		},
		{
			path: '/heroes',
			name: 'Heroes',
			component: app.HeroesComponent
		},
		{
			path: '/detail/:id',
			name: 'HeroDetail',
			component: app.HeroDetailComponent
		}
	])(app.AppComponent);

})(window.app || (window.app = {}));