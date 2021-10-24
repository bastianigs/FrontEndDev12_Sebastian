//---------------------------------------------------------

class LookBuilder {
    loadItems() {
        localStorage.removeItem( "lookChanged" );
        let items = localStorage.getItem( "look" );
        
        if( !items ) return;
        items = JSON.parse( items );
    
        // let's deal with the "image" now
        let lookDiv = document.getElementById( "mix-look" );
        lookDiv.classList.add( "grid" );
        let output = "";
        
        for( let i = 0; i < 10; i++ ) {
            output += `
                <span id="view-${i}"></span>
            `;
            if( i == 0 ) {
                output += `
                    <span id="view-${i}-2"></span>
                `;
            }
        }
        lookDiv.innerHTML = output;
    
        for( let line, view, i = 0; i < items.length; i++ ) {
            line = document.getElementById( getLookType( items[i].type ) );
            view = document.getElementById( "view-" + getLookType( items[i].type ) );
    
            if( items[i].type == 0 ) {
                view.innerHTML = `
                    <img src="${items[i].image2}" alt="item-image2-${i}">
                `;
                let view2 = document.getElementById( "view-0-2" );
                view2.innerHTML = `
                    <img src="${items[i].image3}" alt="item-image3-${i}">
                `;
            } else if( items[i].type == 2 ) {
                view.innerHTML = `
                    <img src="${items[i].image2}" alt="item-image2-${i}">
                `;
            } else {
                view.innerHTML = `
                    <img src="${items[i].image}" alt="item-image-${i}">
                `;
            }
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
            if( !line.classList.contains( "filled" ) ) {
                    line.classList.add( "filled" );
            }
        }
    }
    
    clearType( type ) {
        let div = document.getElementById( type );
        let view = document.getElementById( "view-" + type );
        if( type == 0 ) {
            let view2 = document.getElementById( "view-" + type + "-2" );
            view2.innerHTML = "";
        }

        view.innerHTML = "";
        
        div.innerHTML = `
            <span class="product">
                <a>+</a>
                <span class="product-data">
                    <p>Add <span class="bolded">${getLookName( type )}</span></p>
                </span>
            </span>
            <span class="actions">
                <span class="search"><i class="fas fa-search"></i></span>
            </span>
        `;

        let items = JSON.parse( localStorage.getItem( "look" ) );
        for( let i = 0; i < items.length; i++ ) {
            if( type == getLookType( items[i].type ) ) {
                items.splice( i, 1 );
                break;
            }
        }

        if( div.classList.contains( "filled" ) ) {
                div.classList.remove( "filled" );
        }

        if( items.length == 0 ) {
            localStorage.removeItem( "look" );
            location.reload();
            return;
        }

        localStorage.setItem( "look", JSON.stringify( items ) );
    }

    searchType( type ) {
        let mix = getMixForLookType( type );
        location.href = "products.html?type=" + mix;
    }
}

const look = new LookBuilder;

document.addEventListener( 'DOMContentLoaded', look.loadItems );
const mixList = document.getElementById( "mix-list" );
const continueBtn = document.getElementById( "continue" );

window.addEventListener('focus', () => {
    let lookChanged = localStorage.getItem( "lookChanged" );
    if( lookChanged ) {
        localStorage.removeItem( "lookChanged" );
        location.reload();
    }
});

mixList.addEventListener( "click", e => {
    if( e.target.classList.contains( "filled" ) ) {
        let items = JSON.parse( localStorage.getItem( "look" ) );
        for( let i = 0; i < items.length; i++ ) {
            if( Number( e.target.id ) == getLookType( items[i].type ) ) {
                location.href = "details.html?id=" + items[i].id;
                return;
            }
        }
    }
    if( e.target.parentElement.parentElement.classList.contains( "actions" ) ) {
        let parentDiv = e.target.parentElement.parentElement.parentElement;
        if( e.target.classList.contains( "fa-search") ) {
            look.searchType( Number( parentDiv.id ) );
        } else if( e.target.classList.contains( "fa-trash-alt" ) ) {
            look.clearType( Number( parentDiv.id ) );
        }
    }
});

continueBtn.addEventListener( "click", () => {
    let outfit = localStorage.getItem( "look" );
    if( !outfit ) return;

    addOutfitToCart( outfit );
    location.href="cart.html";
});

function addOutfitToCart( outfit ) {
		let cartOutfits = JSON.parse( localStorage.getItem( "cartOutfits" ) );
		if( !cartOutfits ) cartOutfits = [];
		
		let exists = false;

		// checking first if the product already exists in the cart
		if( cartOutfits.length > 0 ) {
			for( let i = 0; i < cartOutfits.length; i++ ) {
				if( JSON.stringify( cartOutfits[i] ) == outfit ) {
					exists = true;
					return;
				} 
			}
		}

		if( !exists ) cartOutfits.push( JSON.parse( outfit ) );

        localStorage.removeItem( "look" );
		localStorage.setItem( "cartOutfits", JSON.stringify( cartOutfits ) );
}