isEmail = function (email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

stringToSlug = function (str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();
  
  // remove accents, swap ñ for n, etc
  var from = "áäčďéíľňóôřšťúýž·/_,:;";
  var to   = "aacdeilnoorstuyz------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

findUniqueSlug = function(collection, _id) {
  eval('var C = '+collection);
  var doc = C.findOne(_id);

  if (!doc) return false;

  var slug = stringToSlug(doc.name);
  var exists = C.find({slug: slug, _id: {$ne: _id}}).count();

  if (exists) {
    slug = slug + Math.floor((Math.random() * 100) + 1);
  }

  C.direct.update(_id, {$set: {slug: slug}});
  return slug;
}