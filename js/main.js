/* 
  Test Arrays 
*/
var test1 = [
  'KittenService: CamelCaser', 
  'CamelCaser:'
];

var test2 = [
  'KittenService:',
  'Leetmeme: Cyberportal',
  'Cyberportal: Ice',
  'CamelCaser: KittenService',
  'Fraudstream: Leetmeme',
  'Ice:'
];

var test3 = [
  'KittenService:',
  'Leetmeme: Cyberportal',
  'Cyberportal: Ice',
  'CamelCaser: KittenService',
  'Fraudstream:',
  'Ice: Leetmeme'
];

var inArray = function(value, array) {
  return array.indexOf(value) > -1;
}

var installPackages = function(pack, depend ) {

  if ( pack.length == 0 ) {
    
    return;

  } else {

    debugger;

  }

}

var install = function(array) {

  var packages = [],
      dependencies = [],
      installed = [];

  for ( i = 0; i < array.length; i++ ) {

    var parts = array[i].split(': ');

    // remove any :'s from strings
    for ( j = 0; j < parts.length; j++ ) {

      parts[j] = parts[j].replace(':', '');

    }

    if ( parts.length > 1 ) {

      dependencies.push( parts[1] );
      packages.push( parts[0] );

    } else {

      packages.push( parts[0] );

    }

  }

  installPackages(packages, dependencies);

}

install(test1);

// var filterPackages = function(array) {

//   var remaining = [],
//       dependencies = [],
//       install = [];

//   for (i = 0; i < array.length; i++) {
    
//     var packages = array[i].split(': ');

//     // remove any :'s from strings
//     for ( j = 0; j < packages.length; j++ ) {
//       packages[j] = packages[j].replace(':', '');
//     }

//     if ( packages.length > 1 ) {

//       remaining.push( packages );

//     } else {

//       install.push( packages[0] );

//     }

//   }

//   return [remaining, install];

// }

// var inArray = function(value, array) {
//   return array.indexOf(value) > -1;
// }

// var installOrder = function(remaining, install) {

//   // go through all reamaining packages
//   for ( i = 0; i < remaining.length; i++ ) {
    
//     if ( inArray( remaining[i][1], install ) ) {

//       install.push( remaining[i][0] );
//       remaining.splice(i,1);
//       break;

//     }

//   }

//   return install;

// }

// var install = function(packageArray) {

//   var packages = filterPackages(packageArray),
//       installed = [];

  
//   installed = installOrder(packages[0], packages[1]);

//   console.log(installed);

// }

// install(test2);