
export class Greeter {
  distonation: string;
  
  constructor(distonation) {
    this.distonation = distonation;
  }

  greet() {
    return `Hello, ${this.distonation}!`;
  }
}



