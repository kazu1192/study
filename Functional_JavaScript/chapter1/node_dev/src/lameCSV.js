import _ from 'underscore';

function lameCSV(str) {
  return _.reduce(str.split("\n"), function(table, row) {
    table.push(_.map(row.split(","), function(c) { return c.trim() }));
    return table;
  }, []);
}

const peopleTable = lameCSV("name,age,hair\nMerble,35,red\nBob,64,blonde");

console.log(peopleTable);
//=>	[["name",	"age",	"hair"],
//		["Merble",	"35",	"red"],
//		["Bob",		"64",	"blonde"]]
