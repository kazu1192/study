import _ from 'underscore';

function unsplat(func) {
  return function() {
    return func.call(null, _.toArray(arguments));
  };
}

const joinElements = unsplat(function(array) { return array.join(' ') });

console.log(joinElements(1, 2));
//=> 1 2

console.log(joinElements('-', '$', '/', '!', ':'));
//=> "- $ / ! :"
