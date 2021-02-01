let palavra = "arara";
let palindrome = "";

function verificaPalindrome(palavra){
    for(let i = 1; i <= palavra.length; i += 1){
        palindrome += palavra[palavra.length - i];
    }
    if(palavra === palindrome){
        return true;
    }else{
        return false;
    }
}

verificaPalindrome(palavra);