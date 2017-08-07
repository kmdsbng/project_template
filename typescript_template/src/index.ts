"use strict";
import { Greeter } from './domain/Greeter';

function printHello() {
  const greeter = new Greeter('World');
  console.log(greeter.greet());
}

printHello();

