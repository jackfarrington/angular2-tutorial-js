(function (app) {
  app.HeroDetailComponent = ng.core.Component({
  	selector: 'my-hero-detail',
  	templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
	})
  .Class({
    constructor: [HeroService, ng.router.RouteParams, function (heroService, routeParams) {
    	this._heroService = heroService;
    	this._routeParams = routeParams;
      this.hero = undefined;
    }],
    ngOnInit: function () {
    	var id = +this._routeParams.get('id');
    	this._heroService.getHero(id)
    		.then(hero => this.hero = hero);
    },
    goBack: function goBack() {
    	window.history.back();
    }
  });
})(window.app || (window.app = {}));