const formElem = document.getElementById('form');
const firstNameElem = document.getElementById('first-name');
const lastNameElem = document.getElementById('last-name');
const emailElem = document.getElementById('email');
const messageElem = document.getElementById('message');

class Form {
	constructor() {
		this.allElementsAreValid = true;
	}

	showError( el, msg ) {
		if( el && el.parentElement ) {
			if( el.parentElement.classList.contains( 'success' ) ) el.parentElement.classList.remove( 'success' );
			el.parentElement.classList.add('error');

			const smallErrorElem = el.parentElement.querySelector( '.error-message' );
			if( smallErrorElem ) smallErrorElem.innerHTML = msg;

			this.allElementsAreValid = false;
		}
	}

	showSucces( el ) {
		if( el && el.parentElement ) {
			if( el.parentElement.classList.contains( 'error' ) ) el.parentElement.classList.remove( 'error' );
			el.parentElement.classList.add( 'success' );
		}
	}

	showConfirmationBanner() {
        
		if( this.allElementsAreValid == true ) {
            let feedback = document.getElementById( "feedback" );
            feedback.style.display="block";
            feedback.innerHTML = `
                <h4>Thank you for contacting us, ${firstNameElem.value} !</h4>
            `;

            this.clearFields();

            setTimeout( () => { feedback.style.display="none"; }, 3000 );
		}
	}

	clearFields() {
		formElem.reset();
		firstNameElem.parentElement.classList.remove( 'success' );
		lastNameElem.parentElement.classList.remove( 'success' );
		emailElem.parentElement.classList.remove( 'success' );
		messageElem.parentElement.classList.remove( 'success' );
	}
}

formElem.addEventListener('submit', (e) => {
	e.preventDefault();

	let form = new Form();

	if( firstNameElem.value === '' ) form.showError(firstNameElem, 'First name required');
	else if( firstNameElem.value.length < 3 ) form.showError( firstNameElem, 'First name must contain minimum 3 characters' );
	else form.showSucces( firstNameElem );

	if( lastNameElem.value === '' ) form.showError( lastNameElem, 'Last name required' );
	else if( lastNameElem.value.length < 3 ) form.showError( lastNameElem, 'Last name must contain minimum 3 characters' );
    else form.showSucces( lastNameElem );

	if( emailElem.value === '' ) form.showError( emailElem, 'Email required' );
	else form.showSucces( emailElem );

	if( messageElem.value === '' ) form.showError( messageElem, 'Message required' );
	else if( messageElem.value.length < 15 ) form.showError( messageElem, 'Message must contain minimum 15 characters' );
	else form.showSucces( messageElem );

	form.showConfirmationBanner();
});
