/*Ce fichier contient toutes les fontions qui servent au fonctionnement du panier d'achats du site*/

/*les constantes*/

const crampons_1 =document.getElementById("crampons_1");
const crampons_2 =document.getElementById("crampons_2");
const crampons_3 =document.getElementById("crampons_3");
const crampons_4 =document.getElementById("crampons_4");
const crampons_5 =document.getElementById("crampons_5");
const crampons_6 =document.getElementById("crampons_6");

/*les fonctions*/

/*enregistrer le panier dans le localstorage*/
function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify(basket));
}

/*récupérer le panier dans le localstorage*/
function getBasket(){
    let basket =  localStorage.getItem("basket");
    if(basket == null){
        return [];
    }else{
        return JSON.parse(basket);
    }
}

/*ajout d'un produit au panier*/
function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    console.log(foundProduct);
    if(foundProduct != undefined){
        foundProduct.quantify++;
    }else{
        product.quantify = 1;
    }
    basket.push(product);
    saveBasket(basket);
}

/*retirer un produit du panier*/
function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket);
}

/*changer la quantité d'un produit*/
function changeQuantity(product,quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id); 
    if (foundProduct != undefined){
        foundProduct.quantity += quantity;
        if (foundProduct.quantity <= 0){
            removeFromBasket(foundProduct);
        }else{
            saveBasket(basket);
        }
    }
}

/*compter le nombre d'éléments dans le panier*/
function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for(let product of basket){
        number += product.quantity;
    }
    return number;
}

/*calcul du prix*/
function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for (let product of basket){
        total += product.quantity * product.price;
    }
    return total;
}

/*on applique les fonctions sur les bouttons*/

crampons_1.addEventListener('click', (_event) => { addBasket({ id: "crampons_1", "name": "crampons_1", "price": 109 }) });
crampons_2.addEventListener('click', (_event) => { addBasket({ id: "crampons_2", "name": "crampons_1", "price": 109 }) });
crampons_3.addEventListener('click', (_event) => { addBasket({ id: "crampons_3", "name": "crampons_1", "price": 109 }) });
crampons_4.addEventListener('click', (_event) => { addBasket({ id: "crampons_4", "name": "crampons_1", "price": 109 }) });
crampons_5.addEventListener('click', (_event) => { addBasket({ id: "crampons_5", "name": "crampons_1", "price": 109 }) });
crampons_6.addEventListener('click', (_event) => { addBasket({ id: "crampons_6", "name": "crampons_1", "price": 109 }) });
