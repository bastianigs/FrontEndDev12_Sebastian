import { http } from "./http.js";
import { ui } from "./ui.js";

document.addEventListener('DOMContentLoaded', getProduct);

function getProduct() {
    // transferLocalToMockapi(); return;
	const searchParam = new URLSearchParams( location.search );
    const id = searchParam.get('id');
    
    http.get( http.productsURL + id )
        .then( product => {
            ui.showDetailedCard( product, productHighlights( product.highlights ) );
        });
}