document.querySelector('.bxs-color').addEventListener("click",function(e){
var r = Math.round(Math.random()*255);
var g = Math.round(Math.random()*255);
var b = Math.round(Math.random()*255);
var o = Math.random();

document.querySelector("nav").style.cssText=`background-color:rgba(${r},${g},${b},${o})!important`


})



document.querySelector(".bxs-brush").addEventListener('click',function(e){
  
  var r = Math.round(Math.random()*255);
  var g = Math.round(Math.random()*255);
  var b = Math.round(Math.random()*255);
  var o = Math.random();
  console.log('c')
  document.body.style.backgroundColor=`rgba(${r},${g},${b},${o})`

})


document.querySelector(".navbar-brand").addEventListener("click",function(e){
  var r = Math.round(Math.random()*255);
  var g = Math.round(Math.random()*255);
  var b = Math.round(Math.random()*255);
  var o = Math.random();
  
  document.querySelector(".navbar-brand").style.color=`rgba(${r},${g},${b},${o})`
})

var pName = document.getElementById("pn");
var pPrice = document.getElementById("pp");
var pCategory = document.getElementById("pc");
var pDescription = document.getElementById("pd");
var allProducts = [];

if(localStorage.getItem('allProducts')!=null){
  allProducts=JSON.parse(localStorage.getItem("allProducts"))
  DisplayApp();
  
  }



function DisplayApp() {
  var html = "";

  for (var i = 0; i < allProducts.length; i++) {
    html =
      html +
      `
<tr>
<td> ${allProducts[i].name} </td>
<td> ${allProducts[i].price} </td>
<td> ${allProducts[i].category} </td>
<td> ${allProducts[i].des} </td>
<td>
<button class="btn btn-danger" 
onclick="DeleteElement(${i})">
Delete 
</button>

</td>

<td>
<button class="btn btn-secondary" onclick="onUpdate(${i})">Update

</button></td>



</tr>


`;
  }

  document.getElementById("tbody").innerHTML = html;
}


function clearForm() {
  pName.value = "";
  pPrice.value = "";
  pCategory.value = "";
  pDescription.value = "";
}

function DeleteElement(index){
  allProducts.splice(index,1);
  DisplayApp();
  localStorage.setItem("allProducts",JSON.stringify(allProducts));

  }




function addNewElement() {

  (product = {
    name: pName.value,
    price: pPrice.value,
    category: pCategory.value,
    des: pDescription.value,
  });
  if(document.getElementById('add_btn').innerHTML=="Add"){
  
  

    allProducts.push(product);



  
  }
  else {

    allProducts.splice(UpdateIndex,1,product);



    
  }
  localStorage.setItem("allProducts",JSON.stringify(allProducts));
  clearForm();
  document.getElementById('add_btn').innerHTML="Add"
  document.getElementById('add_btn').classList='mt-3 btn btn-danger';

  DisplayApp();
}







function onUpdate(index){
  UpdateIndex=index;
  pName.value=allProducts[index].name;
  pCategory.value=allProducts[index].category;
  pPrice.value=allProducts[index].price;
  pDescription.value=allProducts[index].des;

  document.getElementById('add_btn').innerHTML=`Update`;
  document.getElementById('add_btn').classList='mt-3 btn btn-secondary';




  





}




function onSearch(search){
  var search = document.getElementById('search').value;
  var box ='';
  
  for(var i =0 ; i<allProducts.length;i++){
  if(allProducts[i].name.toLowerCase().indexOf(search.toLowerCase())==0){
  box+=`<tr>
  <td> ${allProducts[i].name} </td>
  <td> ${allProducts[i].price} </td>
  <td> ${allProducts[i].category} </td>
  <td> ${allProducts[i].des} </td>
  <td>
  <button class="btn btn-danger" 
  onclick="DeleteElement(${i})">
  Delete 
  </button>
  
  </td>
  
  <td>
  <button class="btn btn-secondary" onclick="onUpdate(${i})">Update
  
  </button></td>
  
  
  
  </tr>`
  
  }
  }
  
  document.getElementById('tbody').innerHTML=box;
  
  }
  
  document.getElementById('search').addEventListener('keyup',function(e){
    onSearch(this.value);
  })
  
  










