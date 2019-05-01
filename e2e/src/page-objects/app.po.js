'use strict'

export class AppPage {
  constructor() {
    this.inputSearch = element(by.id('poke-name-find-name'));
    this.btnSearch = element(by.id('search-poke-btn'));
    this.divCurrentPoke = element(by.id('current-poke-div'));
    this.divCurrentPokes = element.all(by.class('current-poke-div'));
    this.pokesCatched = element.all(by.id('poke-catched'));
  }

  navigateTo() {
    return browser.get('/');
  }
}
