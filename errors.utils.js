///////////////ERREUR SIGNUP///////////////////////////////

module.exports.signUpErrors = (err)=> {
    let errors = {pseudo: '', email:'', password: ''}
   if (err.message.includes('pseudo'))
   errors.pseudo = "soit tu t'es trompé(e) soit quelqu'un t'as déjà piqué ton pseudo ;p";

   if (err.message.includes('email'))
errors.email = "T'as pas un soucis d'email par hasard ? Relis toi";

   if (err.message.includes('password'))
errors.password = "Tu fais pas d'efforts là ! Tu veux te faire hacker? 6 caractères min wsh";

   if (err.code== 11000 && err.message.includes('email'))
errors.email = 'Pourquoi tu veux te recréer un compte avec le même email ? Si tu veux stalk faut changer';

    return errors ;
};
////////////////ERREUR LOGIN/////////////////////////////
module.exports.signInErrors = (err)=> {
    let errors = {email: '', password: ''}
    if (err.message.includes("email"))
errors.email = "T'as pas un soucis d'email par hasard ? Relis toi";

   if (err.message.includes('password'))
errors.password = "Tu fais pas d'efforts là ! Allez me dis pas t'as oublié ton mdp wsh";


   

return errors;
}


