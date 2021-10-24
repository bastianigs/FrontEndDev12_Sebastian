import { http } from './http.js';

class AdminPanel {
	constructor() {
		this.formElm = document.querySelector( "form" );
		this.tableElm = document.getElementById( "admin-table" );
        this.objectFocused = 0;
        this.objectStock = 0;
	}

	form() {
		const formImage = document.getElementById( "form-image" );
		const formName = document.getElementById( "form-name" );
		const formPrice = document.getElementById( "form-price" );
		const formStock = document.getElementById( "form-stock" );
		const formType = document.getElementById( "form-type" );
		const formDesc = document.getElementById( "form-desc" );
		const formHLs = document.getElementById( "form-highlights" );
	
		formType.innerHTML = "";
		for( let i = 0; i < TOTAL_TYPES; i++ ) {
			formType.innerHTML += `<option value="${i}">${getTypeName(i)}</option>`;
		}
	
		const formBtns = document.querySelectorAll( "#form-buttons a" );
		const clearBtn = formBtns[0];
		const createBtn = formBtns[1];
	
		createBtn.addEventListener( "click", () => {
            if( formImage.value && formName.value && formPrice.value && formStock.value && formDesc.value ) {
                let product = {
                    name: formName.value,
                    image: formImage.value,
                    desc: formDesc.value,
                    price: formPrice.value,
                    stock: formStock.value,
                    type: Number( formType.value ),
                    highlights: formHLs.value
                }
        
                http
                    .post( http.productsURL, product )
                    .then( data => { 
                        console.log( data );
                        location.reload();
                        // getProducts();
                        // this.formElm.reset();
                    });
            } else {
                let inputs = document.querySelectorAll( "#admin-form input" );
                let descInput = document.querySelector( "#admin-form textarea" );

                // gonna use inputs.length-1 as the last input is optional
                for( let i = 0; i < inputs.length-1; i++ ) {
                    if( !inputs[i].value )
                        inputs[i].classList.add( "wrong" );
                    else
                        if( inputs[i].classList.contains( "wrong" ) )
                            inputs[i].classList.remove( "wrong" );
                }

                if( !descInput.value ) {
                    if( !descInput.classList.contains( "wrong" ) )
                        descInput.classList.add( "wrong" );
                } else {
                    if( descInput.classList.contains( "wrong" ) ) 
                        descInput.classList.remove( "wrong" );
                }
            }
		});
	
		clearBtn.addEventListener( "click", () => {
			this.formElm.reset();
		});
	}
	
	popup() {
		admin.warningObjId = document.getElementById( "admin-warning-id" );
		admin.warning = document.getElementById( "admin-warning" );
		const buttons = document.querySelectorAll( "#admin-warning button" );
		const yesBtn = buttons[0];
		const noBtn = buttons[1];
	
		yesBtn.addEventListener( "click", () => {
			let id = admin.objectFocused;
			let tr = document.getElementById( "tr-" + id );
	
			admin.warning.style.display = "none";
	
			tr.remove();
            admin.objectStock = 0;
			admin.objectFocused = 0;
			document.querySelector( ".container" ).style.filter = "none";
	
			http
				.delete( `${http.productsURL}/${id}` )
				// .then( () => getProducts() )
				.then( () => console.log( "Product was removed with success!" ) )
				.catch( 'Error on delete! ' + id + ' could not be removed!' );
	
			// console.log( "Just removed product ID " + id );
		});
	
		noBtn.addEventListener( "click", () => {
			let id = admin.objectFocused;
			admin.warning.style.display = "none";
            admin.objectStock = 0;
			admin.objectFocused = 0;
			document.querySelector( ".container" ).style.filter = "none";
			// console.log( "You canceled the remove of product ID " + id );
		});
	}

	showTable() {
        http
		    .get( http.productsURL )
		    .then( products => {

            let output = `<table>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Highlights</th>
                            </tr>`;
            products.forEach( product => {
                output += `<tr id="tr-${product.id}">
                                <td class="id">${product.id}</td>
                                <td class="img"><img src="${product.image}" alt="img-${product.id}"></td>
                                <td class="name">${product.name}</td>
                                <td class="price">${product.price}</td>
                                <td class="stock">${product.stock}</td>
                                <td class="type">${getTypeName( product.type )}</td>
                                <td class="desc">${product.desc}</td>
                                <td class="highlights"><span id="hls">${product.highlights}</span> <hr> <span id="hlsNames">${productHighlights( product.highlights )}</span></td>
                                <td id="edit-${product.id}" class="edit"><i class="fas fa-edit edit"></i></td>
                                <td id="rem-${product.id}" class="remove"><i class="far fa-trash-alt remove"></i></td>
                            </tr>`;
            });
            
            output += `</table>`;
            this.tableElm.innerHTML = output;
        });
				
				this.tableElm.addEventListener( "click", ( e ) => {
					if( e.target.classList.contains( "remove" ) ) {
                        let id = e.target.parentElement.id.split("-")[1];
                        this.removeItem( id );
                    } 
					else if( e.target.classList.contains( "edit" ) ) {
                        let id = e.target.parentElement.id.split("-")[1];
                        this.editItem( id );
                    }
				});
	}

    editItem( id ) { 
        if( this.objectFocused && this.objectFocused != id )
            // client is already editing a product
            return console.log( "You must first finish your bussiness with product " + this.objectFocused + " !" );
        else {
            let tr = document.getElementById( "tr-" + id );
            let hlsChild = document.querySelector( "#tr-" + id + " #hls" );
            let typeChild = document.querySelector( "#tr-" + id + " .type" );
            let imageChild = tr.children[1];
            if( this.objectFocused == id ) { // client clicks on FINISH 
                let product = {};

                imageChild.innerHTML = `
                    <img src="${imageChild.firstElementChild.value}" alt="img-${id}">`;
                    
                // let imageChild = tr.children[1]; // initiated earlier
                let nameChild = tr.children[2];
                let priceChild = tr.children[3];
                let stockChild = tr.children[4];
                // let typeChild = tr.children[5]; // initiated earlier
                let descChild = tr.children[6];
                // let hlsChild = tr.children[7]; // initiated earlier

                    // for this for(), keep in mind that REMOVE button doesn't exist anymore
                    for( let element, i = 2; i < tr.children.length-2; i++ ) {
                        element = tr.children[i];
                        if( element != typeChild && element != stockChild ) {
                            element.innerHTML = element.firstElementChild.value;
                        }
                    }

                // gonna update the Type Name by the Dropdown list
                product.type = Number( typeChild.firstChild.value );
                typeChild.innerHTML = getTypeName( Number( typeChild.firstChild.value ) );

                // gonna update the highlights IDs and Names
                hlsChild.innerHTML = hlsChild.firstElementChild.value;
                let hlsNames = document.querySelector( "#tr-" + id + " #hlsNames" );
                hlsNames.innerHTML = productHighlights( hlsChild.innerText );

                // gonna return the EDIT button
                tr.children[ tr.children.length-1 ].innerHTML = `
                    <i class="fas fa-edit edit"></i>`;
                // and re-add the REMOVE button
                tr.innerHTML += `
                    <td id="rem-${id}" class="remove"><i class="far fa-trash-alt remove"></i></td>`;
                
                // stockChild
                if( stockChild.firstElementChild.value <= 0 ) {
                    // if the stock is set to 0 or lower, we remove the item.
                    tr.children[4].innerHTML = this.objectStock;
                    this.objectStock = 0;
                    this.objectFocused = 0;
                    return this.removeItem( id );
                }
                tr.children[4].innerHTML = stockChild.firstElementChild.value;

                product.name = nameChild.innerText;
                product.image = imageChild.firstElementChild.src;
                product.desc = descChild.innerText;
                product.price = Number( priceChild.innerText );
                product.stock = Number( tr.children[4].innerText );
                product.highlights = hlsChild.innerText;

                this.objectStock = 0;
                this.objectFocused = 0;

                http
                    .put( http.productsURL + id, product )
                    .then( () => console.log( product ) );
            } else { // client clicks on EDIT icon

                imageChild.innerHTML = `
                    <textarea rows=10 cols=20>${imageChild.firstElementChild.src}</textarea>`;

                for( let element, len, i = 2; i < tr.children.length-3; i++ ) {
                    element = tr.children[i];
                    len = element.innerText.length;
                    if( element != typeChild ) {
                        if( len > 30 ) {
                            element.innerHTML = `
                            <textarea rows=10 cols=20>${element.innerText}</textarea>`;
                        } else if( len > 0 && len <= 30 ) {
                            element.innerHTML = `
                            <textarea rows=1 cols=${element.innerText.length}>${element.innerText}</textarea>`;
                        } else {
                            element.innerHTML = `
                            <textarea rows=1 cols=10>${element.innerText}</textarea>`;
                        }
                    }
                }

                // creating a dropdown list for TYPE
                let dropdown = document.createElement( "select" );
                let selected = typeChild.innerHTML;
                dropdown.setAttribute( "name", "type" );
                typeChild.innerHTML = "";
                typeChild.appendChild( dropdown );
                for( let i = 0; i < TOTAL_TYPES; i++ ) {
                    if( getTypeName(i) == selected )
                        dropdown.innerHTML += `<option value="${i}" selected>${getTypeName(i)}</option>`;
                    else
                        dropdown.innerHTML += `<option value="${i}">${getTypeName(i)}</option>`;
                }

                // making editable only the Highlights IDs
                hlsChild.innerHTML = `<textarea rows=1 cols=13>${hlsChild.innerText}</textarea>`
                
                // replacing the EDIT button with FINISH!
                tr.children[ tr.children.length-2 ].innerHTML = `Finish!`;

                // removing the REMOVE button. Funny, isn't it ?
                tr.lastElementChild.remove();

                this.objectFocused = id;
                // saving the raw stock value of the focused object
                // as if the edited value will be <= 0 later, we have something to replace with
                // (admin is asked if wants to remove the object, so if not, we have this.objectStock )
                this.objectStock = Number( tr.children[4].firstElementChild.innerHTML );
            }
        }
    }

    removeItem( id ) {
        if( this.objectFocused )
            return console.log( "You must first finish your bussiness with product " + this.objectFocused + " !" );
        
        this.objectFocused = id;

        // invoking and setting up the Pop-up which client must answer to
        this.warningObjId.innerHTML = id;
        this.warning.style.display = "block";
        document.querySelector( ".container" ).style.filter = "blur(8px)";
    }
}

const admin = new AdminPanel();

document.addEventListener('DOMContentLoaded', () => {
    let isLogged = sessionStorage.getItem( "admin" );
    if( isLogged == "true" ) {
        admin.form();
        admin.popup();
        admin.showTable();
    } else {
        history.back();
    }
});