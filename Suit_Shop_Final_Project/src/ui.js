class UI {
	constructor() {
		this.productContainer = document.querySelector('.products');
	}

	showProducts( products, type, byCategory ) {
		let output = '';

		let categDivs = Array( TOTAL_CATEGORIES ).fill( "" );

		if( byCategory ) {
			let prodsElement = document.querySelector( ".products" );
			prodsElement.classList = "products-categorized";

			let categContentDiv;

			let categsDiv = document.createElement( "div" );
			categsDiv.classList = "categories";
			this.productContainer.appendChild( categsDiv );

			for( let i = 0; i < TOTAL_CATEGORIES; i++ ) {
				categDivs[i] = document.createElement( "div" );
				categDivs[i].id = "category-" + i;
				categDivs[i].classList = "category";

				categsDiv.appendChild( categDivs[i] );

				categDivs[i] = document.getElementById( "category-" + i );
				categDivs[i].innerHTML = `<h1>${getCategoryName( i )}</h1>`;
				
				categContentDiv = document.createElement( "div" );
				categContentDiv.classList = "category-content";
				categDivs[i].appendChild( categContentDiv );

				categDivs[i] = document.querySelector( "#category-" + i + " .category-content")
			}
		}

		let categID;
		let mix;
		if( type && type.length >= 3 ) mix = type.split( " " );
		for( let i = 0; i < products.length; i++ ) {
            if( type >= 0 || type != -1 ) {
				if( !mix ) {
					if( type && products[i].type != type ) continue;
				}
				else if( mix ) {
					// with another loop, we can make this mix work for "infinite" types 
					// like 1+3+5+7+2+etc But there is no need.
					if( products[i].type != mix[0] && products[i].type != mix[1] ) 
						continue;
				}
			}

			if( byCategory ) {
				categID = getCategoryIdByType( products[i].type );
				categDivs[ categID ].innerHTML += this.codeCard( products[i] );
			} else {
				output += this.codeCard( products[i] );
			}
        }
		
		if( !byCategory ) this.productContainer.innerHTML = output;


		// adding the Event Listener
		this.productContainer.addEventListener( "click", (e) => {
			let productID;
			if( e.target.parentElement.classList.contains("product-card") ) {
				productID = e.target.parentElement.id;
			} else if( e.target.parentElement.classList.contains("product-info") ) { 
				productID = e.target.parentElement.parentElement.id;
			}
			
			if( productID ) {
				let id = productID.split("-")[1];
				console.log( e.target.parentElement );
				window.location.href=`details.html?id=${id}`;
			}
		});
	}

    codeCard( product ) {
		let output = "";
		if( product.stock < 2 ) {
			output += `<div id="product-${product.id}" class="product-card latest">`;
		} else {
			output += `<div id="product-${product.id}" class="product-card">`;
		}
        output += `	<img src="${product.image}" alt=""/>
                        <div class="product-info">
                            <h5>${product.name.toUpperCase()}</h5>
                            <h6>Buy <span>$${product.price}</span></h6>`;
		
		let review = this.getReview( product );
		if( review ) output += review;
        output += `</div> </div>`;
        return output;
	}

    showDetailedCard( product, highlightsCode ) {
		let suitOnly = "";
		if( product.type == TYPE_SUIT )  suitOnly = `<h6>INCLUDES JACKET & PANTS</h6>`;
        
		let output = 	`
			<div class="details-img">
                <img src="${product.image}">
            </div>
            <div class="details-info">
				<h4>${product.name}</h4>`

		if( product.type == TYPE_SUIT )  output += `<h6>INCLUDES JACKET & PANTS</h6>`;

		let review = this.getReview( product );
		if( review ) output += review;

		output +=`
				<h6>Price: <span id="price">$${product.price}</span> (${product.stock} pieces left)</h6>
				<hr>
                <div class="info-buttons">
                    <button id="cart-${product.id}">ADD TO CART</button>
                    <button id="look-${product.id}">LOOK BUILDER</button>
                </div>
                <hr>
                <div class="info-data">
                    <h6>Details</h6>
                    <h5>${product.desc}</h5>
                    <ul>
                        ${highlightsCode}
                    </ul>
                </div>
            </div>
            `;

		document.querySelector( ".details" ).innerHTML = output;

		let addToCart = document.getElementById( "cart-" + product.id );
		addToCart.addEventListener( "click", () => {
			let feedback = document.getElementById( "feedback" );
			feedback.style.display="block";
			feedback.innerHTML = `
				<h4>You've added this product to <a href="cart.html">CART</a> !</h4>
			`;
			setTimeout( () => { feedback.style.display="none"; }, 3000 );
			console.log( product.image );
			this.addProductToCart( product.id, product.name, product.price, product.image );
		});

		let addToLook = document.getElementById( "look-" + product.id );
		addToLook.addEventListener( "click", () => {
			if( product.type == 0 ) 
				this.addProductToLook( Number( product.id ), product.name, product.price, product.image, product.type, product.image2, product.image3 );
			else if( product.type == 2 )
				this.addProductToLook( Number( product.id ), product.name, product.price, product.image, product.type, product.image2 );
			else
				this.addProductToLook( Number( product.id ), product.name, product.price, product.image, product.type );
			
			location.href="lookbuilder.html"
		});
    }

	getReview( product ) {
		let output;
		if( product.stars > 0 ) {
			output = "";
			output += `<div class="product-review">`;
			let totalStars = product.stars;
			for( let j = 1; j <= product.stars; j++, totalStars-- ) {
				output += "<i class='fas fa-star'></i>";
			}
			if( totalStars == 0.5 ) {
				output += "<i class='fas fa-star-half-alt'></i>";
			}
			output += `
						<p>(${product.reviews})</p>
					</div> `;
		}
		return output;
	}

	addProductToCart( id, name, price, image ) {
		let cart = JSON.parse( localStorage.getItem( "cart" ) );
		if( !cart ) {
			cart = [];
			localStorage.setItem( "cart", JSON.stringify( cart ) );
		}
		
		let exists = false;

		// checking first if the product already exists in the cart
		if( cart.length > 0 ) {
			for( let i = 0; i < cart.length; i++ ) {
				if( cart[i].name == name ) {
					exists = true;

					cart[i].quantity++;
					break;
				} 
			}
		}

		if( !exists ) {
			let cartDetails = {
				id: id,
				name: name,
				price: price,
				image: image,
				quantity: 1
			};
			cart.push( cartDetails );
		}
		localStorage.setItem( "cart", JSON.stringify( cart ) );
	}

	addProductToLook( id, name, price, image, type, image2, image3 ) {
		let items = localStorage.getItem( "look" );
		if( !items ) {
			let list = [];
			let product = { 
				id: id,
				name: name,
				price: price,
				image: image,
				type: type
			}
			if( image2 ) product.image2 = image2;
			if( image3 ) product.image3 = image3;
			list.push( product );
			localStorage.setItem( "look", JSON.stringify( list ) );
		} else {
			items = JSON.parse( items );
			// console.log( items );

			let newItemAdded = false;
			for( let item, i = 0; i < items.length; i++ ) {
				item = items[i];
				if( item.id == id ) return console.log( "Product ID already exists in the list." );
				else if( getLookType( item.type ) == getLookType( type ) ) {
					item.id = id;
					item.name = name;
					item.price = price;
					item.image = image;
					item.type = type;
					if( image2 ) item.image2 = image2;
					if( image3 ) item.image3 = image3;
					newItemAdded = true;
					break;
				}
			};

			if( !newItemAdded ) {
				let newItem = {	id: id,
								name: name,
								price: price,
								image: image,
								type: type
							};
				if( image2 ) newItem.image2 = image2;
				if( image3 ) newItem.image3 = image3;

				items.push( newItem );
				// console.log( "Added new item in list." );
				// console.log( items[items.length-1] );
			}
			localStorage.setItem( "look", JSON.stringify( items ) );
		}

		localStorage.setItem( "lookChanged", true );
	}

	reloadLook() {
			this.resetLook();

			if( !items ) return;
			items = JSON.parse( items );

			let line;
			for( let i = 0; i < items.length; i++ ) {
				// console.log( getLookType( items[i].type ) );
				line = document.getElementById( getLookType( items[i].type ) );
				line.innerHTML = `
					<span class="product">
						<img src="${items[i].image}" alt="item-${i}">
						<span class="product-data">
							<p class="product-name bolded">${items[i].name}</p>
							<p class="product-price">Price: $<span class="amount">${items[i].price}</span></p>
						</span>
					</span>
					<span class="actions">
						<span class="remove"><i class="far fa-trash-alt"></i></span>
						<span class="search"><i class="fas fa-search"></i></span>
					</span>
				`;
			}
	}

	resetLook() {
		let line;
		for( let i = 0; i < TOTAL_LOOKTYPES; i++ ) {
			line = document.getElementById( i );
			line.innerHTML = `
				<span class="product">
					<a>+</a>
					<span class="product-data">
						<p>Add <span class="bolded">${getLookName( i )}</span></p>
					</span>
				</span>
				<span class="actions">
					<span class="search"><i class="fas fa-search"></i></span>
				</span>
			`;
		}
	}
}

export const ui = new UI();