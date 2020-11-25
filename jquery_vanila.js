// No conflict problem use for to prevent incompatibility between vanilla js and jquery 

jQuery.noConflict()(function($){
 $(document).ready(function(){

//    variabel dan fungsinya di SINI  



 });
});

// Pengganti Document Ready menggunakan Vanilla Javascript
// pure vanilla javascript
function ready(callbackFunc){
    if (document.readyState !== 'loading'){
        // Document is already ready, call the Callback directly
        callbackFunc;
    }else if(document.addEventListener){
        // All modern browsers to register DOM Content Loading
        document.addEventListener('DOMContentLoaded', callbackFunc);
        // old IE Browser
    }else{document.attachevent('onreadystatechange',function(){
        if(document.readyState === 'complete'){
            callbackFunc();
        }
    });
    }
}

ready(function(){
// your code here
});


