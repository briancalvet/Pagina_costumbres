const barraNavegacionDerecha = document.querySelector(".navbar-right");
const emailUsuario = document.querySelector(".navbar-email");
const menuDesplegable = document.querySelector(".desktop-menu"); 
const imgCarrito = document.querySelector(".navbar-shopping-cart"); 
const carritoDeCompra = document.querySelector(".product-detail");
const imgMobileDesplegable = document.querySelector(".menu"); 
const menuCelular = document.querySelector(".mobile-menu");
const btnCarrito = document.querySelector("#btnAddToCard1"); 
const inforPorducto = document.querySelector(".infocarrito");
const btnCierreInformacion = document.querySelector(".product-detail-close"); 
const btnAddedToCart = document.querySelector(".add-to-cart-button");



emailUsuario.addEventListener("click" , desplegarMenu );
imgCarrito.addEventListener("click" , desplegarCarrito ); 
imgMobileDesplegable.addEventListener("click" , desplegarMenuCelular);
btnCarrito.addEventListener("click" , desplegarInfoCompra );
btnCierreInformacion.addEventListener("click" , cierreDeDescripcionProducto); 
btnAddedToCart.addEventListener("click" , agregarAMisOrdenes);






function desplegarMenu(){

    menuDesplegable.classList.toggle("inactive"); 

}

function desplegarCarrito(){

    carritoDeCompra.classList.toggle("inactive"); 
    chequearEstadoDeMenuCelular()
    

}

function desplegarMenuCelular(){
    menuCelular.classList.toggle("inactive");
    chequearEstadoDeCarrito() 
    
}


function chequearEstadoDeCarrito() {

    const isCarrioClosed = carritoDeCompras.classList.contains("inactive"); 

    if(!isCarrioClosed){
        carritoDeCompras.classList.add("inactive"); 
    }
    
    aside.classList.toggle("inactive"); 


}


function chequearEstadoDeMenuCelular(){

   
    const isMobileMenuClosed = menuCelular.classList.contains("inactive"); 
    

    if(!isMobileMenuClosed){
        menuCelular.classList.add("inactive"); 
    }

    aside.classList.toggle("inactive"); 
    
}



// productos 

function desplegarInfoCompra(){

    inforPorducto.classList.toggle("inactive"); 

}

function cierreDeDescripcionProducto(){

    const menuDespleado =  inforPorducto.classList.contains("inactive"); 
    if(!menuDespleado){
        inforPorducto.classList.add("inactive");
    }
}

function agregarAMisOrdenes(){


}
