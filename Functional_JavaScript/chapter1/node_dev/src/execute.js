import _ from 'underscore';
import { nativeNth, isIndexed, nth, second } from './nth.js';
import { lameCSV, selectNames, selectAges, selectHairColor } from './lameCSV.js';

const letters = ['a', 'b', 'c'];

console.log(letters[1]);

console.log(nativeNth(letters, 1));

console.log(nth(letters, 1));

console.log(nth("abc", 1));

// nth({}, 1);

console.log(second(['a', 'b']));

console.log(second("fogus"));

// second({});

const peopleTable = lameCSV("name,age,hair\nMerble,35,red\nBob,64,blonde");

console.log(peopleTable);
//=>	[["name",	"age",	"hair"],
//		["Merble",	"35",	"red"],
//		["Bob",		"64",	"blonde"]]

console.log(_.rest(peopleTable).sort());

var mergeResults = _.zip;

console.log(selectNames(peopleTable));
//=> ["Merble", "Bob"]

console.log(selectAges(peopleTable));
//=> ["35", "64"]

console.log(selectHairColor(peopleTable));
//=> ["red", "blonde"]

console.log(mergeResults(selectNames(peopleTable), selectAges(peopleTable)));
//=> [["Merble", "35"], ["Bob", "64"]]
