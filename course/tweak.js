console.log ('starting tweak');
const product1    = document.getElementById("product1")
const wrapper     = document.getElementById("wrapper")
const newbox      = document.getElementById("newbox")
const productbox1 = document.getElementById("productbox1")
const productbox2 = document.getElementById("productbox2")
const productbox3 = document.getElementById("productbox3")
const productbox4 = document.getElementById("productbox4")
const productbox5 = document.getElementById("productbox5")
const productbox6 = document.getElementById("productbox6")

function getdetail( nomor){
   console.log('produk: ',nomor)
   newbox.style.display = "block"
   wrapper.style.display = "none"

   if(nomor === 1){
    productbox1.style.display = "flex"
   }else if (nomor === 2){
    productbox2.style.display = "flex"
}else if(nomor === 3){
    productbox3.style.display = "flex"
}else if(nomor === 4){
    productbox4.style.display = "flex"
}else if(nomor === 5){
    productbox6.style.display = "flex"
}else if(nomor === 6){
    productbox6.style.display = "flex"
}
}
