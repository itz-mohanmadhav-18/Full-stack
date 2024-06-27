let age = +prompt( 'Apni age batao. Tumhe mummy kasam hai, jhoot mat bolna. ');

let formula = 'Ek chamach petrot mein aadha chamach uranium daato aur gutabi hone tak bhuno. Uske baad...';


let warning = '<br>Beta, missile se khelne ki umr mein nuclear bomb ke sapne dekh rahe ho.';

let warningForOld =  'Miya ek paavon kabr mein hai, bomb banane ko rehne hi do!';

if(age>=18 && age<70){
    document. write( formula) ;
}
if(age>=70){
    document. write (warningForOld);
}
else{
    document. write (warning);
}