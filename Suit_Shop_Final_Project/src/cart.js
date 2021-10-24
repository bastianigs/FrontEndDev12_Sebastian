import { http } from './http.js';

class Cart {
    show() {
		let cart = JSON.parse( localStorage.getItem('cart') );
		let cartOutfits = JSON.parse( localStorage.getItem( "cartOutfits" ) );
		if( !cart && !cartOutfits ) return this.showEmpty();
		else {
			let output = "";
			let total = 0;
			if( cart ) {
				const cartObj = cart;
				output += `
						<table>
							<tr>
								<th>Image</th>
								<th>Name</th>
								<th>Price</th>
								<th>Quantity</th>
							</tr>`;
					
				for( let el, i = 0; i < cartObj.length; i++ ) {
					el = cartObj[i];
					total += el.price * el.quantity;
					output += `
								<tr id="tr-${i}">
									<td><img src="${el.image}" alt=""></td>
									<td><a href="details.html?id=${el.id}">${el.name}</a></td>
									<td>$${el.price}</td>
									<td class="quant"><span class="dec">-</span> <span class="quantVal">${el.quantity}</span> <span class="inc">+</span></td>
									<td id="rem-${i}" class="remove">x</td>
								</tr>`;
				};
				output += `</table>`;
			} 
			if( cartOutfits ) {
				for( let i = 0; i < cartOutfits.length; i++ ) {
					if( cart ) {
						output += "<br> <br>";
					}
					output += `
							<p id="${i}">Custom Outfit <i class="fas fa-edit edit"></i></p>
							<table>
								<tr>
									<th>Image</th>
									<th>Name</th>
									<th>Price</th>
								</tr>`;
						
					for( let el, j = 0; j < cartOutfits[i].length; j++ ) {
						el = cartOutfits[i][j];
						total += el.price;
						output += `
									<tr id="outfit-${i}-${j}">
										<td><img src="${el.image}" alt=""></td>
										<td><a href="details.html?id=${el.id}">${el.name}</a></td>
										<td>$${el.price}</td>
										<td id="remOutfit-${i}-${j}" class="remove">x</td>
									</tr>`;
					};
					output += `</table>`;
				}
			}
			document.querySelector( '.cart-table' ).innerHTML += output;

			let payment = `
					<h4>TOTAL: $${total}<h4>
					<br>
					<a>Buy Products</a>`;
			document.querySelector( ".cart-payment" ).innerHTML = payment;
		}
	}
    
    refresh() {
		let cartDiv = document.querySelector( ".cart" );
		cartDiv.classList.remove( "empty-cart" );

		cartDiv.innerHTML=`
		<div class="cart-table">
            </div>
            <div class="cart-payment">
            </div>`;
	}

	showEmpty() {
		let cart = localStorage.getItem( "cart" );
		let cartOutfits = localStorage.getItem( "cartOutfits" );
		if( !cart && !cartOutfits ) {
			let cartDiv = document.querySelector( ".cart" );
			cartDiv.innerHTML = `<h4>You have nothing saved in the cart.</h4>
								<h4><a href='products.html'>Return to Shopping</a></h4>`;
			cartDiv.classList.add( "empty-cart" );
		}
	}

	buyAllProducts() {
		let cartStorage = JSON.parse( localStorage.getItem( "cart" ) );
		let outfitsStorage = JSON.parse( localStorage.getItem( "cartOutfits" ) );

		if( cartStorage ) {
			cartStorage.forEach( cartItem => {
				http.get( http.productsURL + cartItem.id)
					.then( product => {
						let newStock = product.stock - cartItem.quantity;
						if( newStock <= 0 ) {
							http
								.delete( `${http.productsURL}/${product.id}` )
								.then( () => console.log( "Product's newStock <= 0 so it was removed!" ) )
								.catch( 'Error on delete! ' + product.id + ' could not be removed!' );
						} else
							http
								.put( http.productsURL + product.id, { stock: newStock } );
					});
			});
			localStorage.removeItem( "cart" );
		}
		if ( outfitsStorage ) {
			outfitsStorage.forEach( outfit => {
				outfit.forEach( item => {
					http.get( http.productsURL + item.id )
						.then( product => {
							let newStock = product.stock - 1;
							if( newStock <= 0 ) {
								http
									.delete( `${http.productsURL}/${item.id}` )
									.then( () => console.log( "Product's newStock <= 0 so it was removed!" ) )
									.catch( 'Error on delete! ' + item.id + ' could not be removed!' );
							} else
								http
									.put( http.productsURL + item.id, { stock: newStock } );
						});
				});
			});
			localStorage.removeItem( "cartOutfits" );
		}

		document.querySelector( ".cart-table" ).innerHTML="";
		let payElm = document.querySelector( ".cart-payment" );
		payElm.innerHTML = `
			<h3>All the products were paid and will soon be delivered!</h4>
			<h3>We thank you for this, and wait for further shopping!</h4>
		`;
		payElm.style.borderLeft="solid";
		payElm.classList = "cart empty-cart";
		payElm.padding ="20px";
		setTimeout( () => {
			if( document.querySelector( ".cart" ) ) { 
				this.show();
			}
		}, 5000 );
	}

	removeProduct( itemID ) {
		let tr = document.querySelector( "#tr-" + itemID );
		let cart = JSON.parse( localStorage.getItem( "cart" ) );

		cart.splice( itemID, 1 );

		tr.remove();
		/*
			Since we removed one row from the table, and also remove the product from localStorage array,
			row's id and remove button id won't coincide anymore with the id from localStorage,
			so we must reset all of them.
		*/
		let itemsList = document.querySelectorAll( `tr[id^="tr-"]` );
		for( let i = 0; i < itemsList.length; i++ ) {
			itemsList[i].id = `tr-${i}`;
			itemsList[i].lastElementChild.id = `rem-${i}`;
		}

		if( cart.length == 0 ) {
			localStorage.removeItem( "cart" );
			location.reload();
			// this.showEmpty();
			return;
		}
			
		localStorage.setItem( "cart", JSON.stringify( cart ) );
		this.updateTotal();
	}

	removeOutfitProduct( outfitID, itemID ) {
		let tr = document.getElementById( "outfit-" + outfitID + "-" + itemID );
		let cartOutfits = JSON.parse( localStorage.getItem( "cartOutfits" ) );

		cartOutfits[outfitID].splice( itemID, 1 );

		tr.remove();
		/*
			Since we removed one row from the table, and also remove the product from localStorage array,
			row's id and remove button id won't coincide anymore with the id from localStorage,
			so we must reset all of them.
		*/
		let itemsList = document.querySelectorAll( `tr[id^="outfit-${outfitID}-"]`);
		for( let i = 0; i < itemsList.length; i++ ) {
			itemsList[i].id = `outfit-${outfitID}-${i}`;
			itemsList[i].lastElementChild.id = `remOutfit-${outfitID}-${i}`;
		}

		if( cartOutfits[outfitID].length == 0 ) {
            cartOutfits.splice( outfitID, 1 );
			if( cartOutfits.length == 0 ) {
				localStorage.removeItem( "cartOutfits" );
				// this.showEmpty();
				// return;
			}
            location.reload();
			return;
		}

		localStorage.setItem( "cartOutfits", JSON.stringify( cartOutfits ) );
		this.updateTotal();
	}

	giveProductQuantity( id, val ) {
		let quantVal = document.querySelector( "#tr-" + id + " .quantVal" );
		let cart = JSON.parse( localStorage.getItem( "cart" ) );

		cart[id].quantity += val;
		quantVal.innerText = cart[id].quantity;

		if( cart[id].quantity == 0 ) return this.removeProduct( id );

		localStorage.setItem( "cart", JSON.stringify( cart ) );
		this.updateTotal();
	}

	updateTotal() {
		const cartStorage = JSON.parse( localStorage.getItem('cart') );
		const outfitsStorage = JSON.parse( localStorage.getItem( "cartOutfits" ) );

		let total = 0;
		if( cartStorage ) {
			cartStorage.forEach( (item) => {
				total += item.price * item.quantity;
			});
		}
        if( outfitsStorage ) {
			outfitsStorage.forEach( outfit => {
				outfit.forEach( item => {
					total += item.price;
				});
			});
		}

		document.querySelector( ".cart-payment h4" ).innerHTML =`
				<h4>TOTAL: $${total}<h4>`;
	}
}

const cart = new Cart();

document.addEventListener('DOMContentLoaded', cart.show() );

//--------------------------

let buyBtn = document.querySelector( ".cart-payment a" );
if( buyBtn ) {
    buyBtn.addEventListener( "click", () => {
        cart.buyAllProducts();
    });
}

const tdElm = document.querySelector( ".cart" );
tdElm.addEventListener( "click", ( e ) => {
    let id;
    if( e.target.classList.contains( "remove" ) ) {
        id = e.target.id.split("-");
        if( id[0] == "rem" ) {
            cart.removeProduct( id[1] );
        }
        else if( id[0] == "remOutfit" ) {
            cart.removeOutfitProduct( id[1], id[2] );
        }
    } 
    else if( e.target.classList.contains( "inc" ) ) {
        id = e.target.parentElement.parentElement.id.split( "-" );
        cart.giveProductQuantity( id[1], +1 );
    }
    else if( e.target.classList.contains( "dec" ) ) {
        id = e.target.parentElement.parentElement.id.split( "-" );
        cart.giveProductQuantity( id[1], -1 );
    }
});

// window.addEventListener('focus', () => {
    // location.reload();
    // cart.refresh();
    // cart.show();
// });