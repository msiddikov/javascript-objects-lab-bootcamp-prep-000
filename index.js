var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign(object,{[key]:value})
}

function deleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
