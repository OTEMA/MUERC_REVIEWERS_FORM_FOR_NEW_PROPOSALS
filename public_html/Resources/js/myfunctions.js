function selectOnlyThis(id){
  var myCheckbox = document.getElementsByName("aptype");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}
function selectOnlyThis1(id){
  var myCheckbox = document.getElementsByName("apinfo");
  Array.prototype.forEach.call(myCheckbox,function(el){
    el.checked = false;
  });
  id.checked = true;
}


