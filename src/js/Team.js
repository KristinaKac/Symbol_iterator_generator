export default class Team {
  constructor() {
    this.members = new Set();
  }

  // Task 1
  [Symbol.iterator]() {
    let i = 0;
    const members = this.toArray();

    return {
      next() {
        if (members.length > i) {
          return { done: false, value: members[i++] };
        }
        return { done: true };
      },
    };
  }

  // Task 2
  * [Symbol.iterator]() {
    for (const i of this.members) {
      yield i;
    }
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Такой персонаж уже существует');
    }
    this.members.add(player);
  }

  addAll(...players) {
    players.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}

// Task 3
export function canIterate(value) {
  try {
    if (value[Symbol.iterator]()) {
      return true;
    }
  } catch (error) {
    return false;
  }
}
