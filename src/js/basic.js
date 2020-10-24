export default class Team {
  constructor() {
    this.members = new Set();
  }

  * [Symbol.iterator]() {
    const members = this.toArray();
    let index = 0;
    while (index < members.length) {
      yield members[index];
      index += 1;
    }
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    const arrayOfCharacters = [];
    for (const member of this.members) {
      arrayOfCharacters.push(member);
    }
    return arrayOfCharacters;
  }
}
