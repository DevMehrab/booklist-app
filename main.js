const name = document.querySelector('#name');
const author = document.querySelector('#author');
const price = document.querySelector('#price');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

/*btn.addEventListener('click', function(e){
  e.preventDefault();
  console.log('hello');
});*/
btn.addEventListener('click', function (e) {
  e.preventDefault();
 if(name.value == '' && author.value == '' && price.value == '' ){
   alert("inputs can't be empty");
 }
 else{
 const newdiv = document.createElement('div');
    newdiv.className = "list1";
    
 const newname = document.createElement('p');
    newname.innerHTML = name.value;
    newdiv.appendChild(newname);
    
  const newauthor = document.createElement('p');
    newauthor.innerHTML = author.value;
    newdiv.appendChild(newauthor);
    
  const newprice = document.createElement('p');
    newprice.innerHTML = price.value+' $';
    newdiv.appendChild(newprice);
    
    list.appendChild(newdiv);
 }
});