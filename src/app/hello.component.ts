import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

public state = {
    id: 1,
    name: 'mana',
    lname: 'nama',
    stuff: 'computer',
    hobbit: 'play'
  }

  constructor() {
    console.log('before => ', this.state);
    const result = this.setThreePoint(this.state);
    console.log('Three point => ', result);
    const assingResult = this.assingThing(this.state, { name: 'Aha'});
    console.log('assing => ', assingResult);
    const assingResultNoBk = this.assingThingNoBk(this.state, { name: 'AhaNa'});
    console.log('assingNoBk => ', assingResultNoBk);
  }

  public setThreePoint(state) {
    return {
      ...state,
      hobbit: 'play_football'
    };
  }

  public assingThing(state, newData) {
    return Object.assign({}, state, newData);
  }

  public assingThingNoBk(states, newData) {
    return Object.assign(states, newData);
  }

}
