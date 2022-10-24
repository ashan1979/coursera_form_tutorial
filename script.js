/*
    this function checks two form fields and displays an error message if either is empty
*/

function validate() {
    if ( document.regForm.uname.value == "" ) {
        alert( "Please Provide Your Username!" );
        document.regForm.uname.focus() ;
        return false;
    }

    if (document.regForm.pwd.value == "" ) {
        alert ( "Please Key in Your Password" );
        document.regForm.pwd.focus() ;
        return false;
    }

    return true;
}