var parentElement = document.querySelector('section');
var spanCount = 385; 
for (var i = 0; i < spanCount; i++) {
  var span = document.createElement('span');
  parentElement.appendChild(span);
}
