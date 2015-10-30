Function.prototype.myBind = function(context){
  var fn = this;
  return function() {
    return fn.apply(context);
  };
}

var wayBetterDetachedSayHi = cat.sayHi.myBind(cat);
