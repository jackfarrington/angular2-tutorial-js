(function (app) {
  app.HeroesComponent =
    ng.core.Component({
      selector: 'my-heroes',
      templateUrl: 'app/heroes.component.html',
      styleUrls: ['app/heroes.component.css'],
      directives: [app.HeroDetailComponent]
    })
    .Class({
      constructor: [ng.router.Router, HeroService, function (router, heroService) {
      	this._router = router;
      	this._heroService = heroService;
      	this.title = 'Tour of Heroes';
      	this.selectedHero = undefined;
      }],
      ngOnInit: function () {
      	this.getHeroes();
      },
      onSelect: function onSelect(hero) {
      	this.selectedHero = hero;
      },
      getHeroes: function getHeroes() {
      	this._heroService.getHeroes()
      		.then(heroes => this.heroes = heroes);
      },
      gotoDetail: function gotoDetail() {
      	this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
      }
    });
})(window.app || (window.app = {}));
