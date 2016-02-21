function HeroService() {
	return {
		getHeroes: function getHeroes() {
			return Promise.resolve(HEROES);
		},
		getHeroesSlowly: function getHeroesSlowly() {
		  return new Promise(resolve => setTimeout(() => resolve(HEROES), 2000));
		},
		getHero: function getHero(id) {
			return Promise.resolve(HEROES)
				.then(heroes => heroes.filter(hero => hero.id === id)[0]);
		}
	};
}
