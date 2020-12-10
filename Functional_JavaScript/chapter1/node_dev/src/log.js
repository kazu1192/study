function fail(thing) {
  throw new Error(thing);
}

function warn(thing) {
  console.log(["警告 : ", thing].join(''));
}

function note(thing) {
  console.log(["情報 : ", thing].join(''));
}

export { fail, warn, note };
