(function (app) {
	app.DashboardComponent =
		ng.core.Component({
			selector: 'my-dashboard',
			templateUrl: 'app/dashboard.component.html',
			styleUrls: ['app/dashboard.component.css']
		})
		.Class({
			constructor: [ng.router.Router, HeroService, function (router, heroService) {
				this._router = router;
				this._heroService = heroService;
				this.heroes = [];
			}],
			ngOnInit: function () {
				this._heroService.getHeroes()
					.then(heroes => this.heroes = heroes.slice(1, 5));
			},
			gotoDetail: function gotoDetail(hero) {
				var link = ['HeroDetail', {id: hero.id}];
				this._router.navigate(link);
			}
		});
})(window.app || (window.app = {}));