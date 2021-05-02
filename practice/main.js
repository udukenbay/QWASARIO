var x = my_isalpha("AyushSaxenafsdkdfglkdf");
document.getElementById("demo").innerHTML = x;

/*Reproduce the behavior of isalpha() function. 
It returns 1 if the character sent as argument is a letter (A to Z or a to z). 
It returns 0 otherwise.*/
function my_isalpha(param_1) {

	var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var count = 0;
    var chk = false;
    
    for(let i=0; i<param_1.length; i++){
    	chk = false;
    	for(let j=0; j<alpha.length; j++){
        	if(param_1.charAt(i)==alpha.charAt(j))
            	chk = true;
        }
        
        if(chk == true) count++;
    }
    
    if(count==param_1.length)
    	return true;
    else return false;
}

//My Sub
function my_sub(param_1, param_2) {
    return param_1 - param_2;
}

//Strcmp
//*The stpcmp() and strncmp() compare string1 with string2 to see if there are equals.
var x_1 = my_strcmp("abc", "bd");
document.getElementById("strcmp").innerHTML = x_1;

function my_strcmp(param_1, param_2) {
	
    var n=2;
    for(let i=0; i<n; i++){
        if(param_1.charAt(i) == param_2.charAt(i)){
            if(i=(n-1))
                return 0;
        }

        let a1 = param_1.charCodeAt(i);
        let a2 = param_2.charCodeAt(i);
        if(a1 > a2) {
            return 1;
        }
        if(a1 < a2) {
            return -1;
        }
    }
}
