


 //Add Products to shopping Cart
  function addToCart(product,price)
  {
  var shopCart =document.getElementById("shoppingCart");
  var row = shopCart.insertRow(0);
  var prodInnerCell = row.insertCell(0);
  var priceInnerCell = row.insertCell(1);

  var tfooter = shopCart.createTFoot();
  prodInnerCell.innerHTML = product;
  priceInnerCell.innerHTML = price;
  calculateTotal()
  }

  function calculateTotal()
  {
  var shopCart =document.getElementById("shoppingCart");
  var total =document.getElementById("Sum");
  var prod;
  var allProd=0;
  for (var i = 0;i< shopCart.rows.length-1; i++)
  {
  prod = shopCart.rows[i].cells.item(1).innerHTML;
  allProd+= parseFloat(prod);
  console.log(allProd);
  }
  total.innerHTML=allProd;
  }