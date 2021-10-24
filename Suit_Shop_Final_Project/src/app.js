//--------------------------------------------
/* Admin Login .js */

const adminName = "admin";
const adminPass = "admin";

const body = document.querySelector( "body" );
const adminAccess = document.getElementById( "admin-access" );
const adminBtn = document.querySelector( ".fa-user-cog" );

const adminWindow = document.getElementById( "admin-login" );
const adminLoginName = document.getElementById( "admin-name" );
const adminLoginPass = document.getElementById( "admin-pass" );
const adminLoginBtn = document.getElementById( "admin-login-btn" );

const lookbuilderBtn = document.getElementById( "lookbuilder" );

class AdminAccess {
    constructor() {
        this.isShown = false;
        this.isLogged = sessionStorage.getItem( "admin" );
    }

    show() {
        let isAdmin = sessionStorage.getItem( "admin" );
        if( !isAdmin && !this.isShown ) {
            adminWindow.style.display = "flex";
            this.isShown = true;
        }
    }

    hide() {
        if( this.isShown ) {
            adminWindow.style.display = "none";
            this.isShown = false;
        }
    }

    login() {
        if( adminLoginName.value == adminName && adminLoginPass.value == adminPass ) {
            location.href = "admin.html";
            sessionStorage.setItem( "admin", "true" );
            this.isLogged = true;
        } else {
            /* I prefer not to give hints on which field is good and
                which is not, when about admin data, so I will just claim
                all as wrong, if the client mistakes one. */
            adminLoginName.classList.add( "wrong" );
            adminLoginPass.classList.add( "wrong" );
        }
    }
    
    access() {
        location.href = "admin.html";
        console.log( "meh" );
    }
}

const admin = new AdminAccess();

adminLoginBtn.addEventListener( "click", () => {
    admin.login();
});
adminWindow.addEventListener( "keydown", event => {
    if( event.keyCode == 13 ) // ENTER key
        admin.login();
});

body.addEventListener( "click", e => {
    if( e.target.parentElement.parentElement == adminAccess ) {
        if( !admin.isShown ) {
            if( !admin.isLogged )
                admin.show();
            else 
                admin.access();
        }
    } 
    else if( e.target == adminWindow ) return; 
    else admin.hide();
});

lookbuilderBtn.addEventListener( "click", () => {
    let wipLook = localStorage.getItem( "look" );
    if( wipLook ) {
        location.href = "lookbuilder.html";
    } else {
        location.href = "products.html?type=0";
    }
});