import { http } from './http.js';
import { ui } from './ui.js';

//---------------------------------------

// Get products from api
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
    // transferLocalToMockapi(); return;
    const searchParam = new URLSearchParams( location.search );
    const type = searchParam.get( "type" );
    console.log( type );
    
    if( type ) {
        console.log( type );
        if( type == TYPE_SUIT ) {
            document.querySelector( ".summary-info" ).innerHTML = `
            <h1>Suits & Tuxedos</h1>
            <p>Select a suit or tuxedo to start building your look.</p>
            `;
        }
        http.get( http.productsURL )
        .then( products => ui.showProducts( products, type ) );
    } else {
        http.get( http.productsURL )
        .then( products => ui.showProducts( products,  -1, true ) );
    }
}

//---------------------------------------
// used during the development

var timer;
function transferLocalToMockapi() {
    fetch( "src/products.json")
        .then( resp => resp.json() )
        .then( data => {
            let i = 0;
            timer = setInterval( () => {
                if( data[i] ) {
                    if( !data[i].stars ) {
                        data[i].stars=0;
                        data[i].reviews=0;
                    }
                    http.post( http.productsURL, data[i] );
                    console.log( "Added obj number " + i );
                    if( i == 100 ) {
                        clearInterval( timer );
                        console.log( "Finito." );
                    }
                } else console.log( "data[" + i + "] doesn't exist." );
                i++;
            }, 2000 );
        })
}