console.log([2, 3, -6, 0, -108, 42].sort());
//=> [-108, -6, 0, 2, 3, 42]

console.log([0, -1, -2].sort());
//=> [-1, -2, 0]

console.log([2, 3, -1, -6, 0, -108, 42, 10].sort());
//=> [-1, -108, -6, 0, 10, 2, 3, 42]

console.log(
  [2, 3, -1, -6, 0, -108, 42, 10].sort(function(x, y) {
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  })
);
//=> [-108, -6, -1, 0, 2, 3, 10, 42]

function comparelessThanOrEqual(x, y) {
	if (x < y) return -1;
	if (y < x) return 1;
	return 0;
}

console.log([0, -1, -2].sort(comparelessThanOrEqual));

console.log([2, 3, -1, -6, 0, -108, 42, 10].sort(comparelessThanOrEqual));
//=> [-108, -6, -1, 0, 2, 3, 10, 42]
