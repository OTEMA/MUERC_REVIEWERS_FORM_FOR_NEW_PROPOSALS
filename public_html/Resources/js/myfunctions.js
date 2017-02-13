//First checkbox groups with name of aptype
function selectOnlyThis(id){
  var myCheckbox = document.getElementsByName("aptype");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}
//second checkbox group with name of apinfo
function selectOnlyThis1(id){
  var myCheckbox = document.getElementsByName("apinfo");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}
//third checkbox group with name of conflictofinterest
function selectOnlyThis2(id){
  var myCheckbox = document.getElementsByName("conflictofinterest");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}
//fourth checkbox group with name of humansubjects
function selectOnlyThis3(id){
  var myCheckbox = document.getElementsByName("humansubjects");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}
//fifth checkbox group with name of animals
function selectOnlyThis4(id){
  var myCheckbox = document.getElementsByName("animals");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}
//sixth checkbox group with name of radioisotopes
function selectOnlyThis5(id){
  var myCheckbox = document.getElementsByName("radioisotopes");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}
//Seventh checkbox group with name of biohazards
function selectOnlyThis6(id){
  var myCheckbox = document.getElementsByName("biohazards");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}
//Eighth checkbox group with name of clearance
function selectOnlyThis7(id){
  var myCheckbox = document.getElementsByName("clearance");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}
//Nineth checkbox group with name of masenoinclusion
function selectOnlyThis8(id){
  var myCheckbox = document.getElementsByName("masenoinclusion");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}