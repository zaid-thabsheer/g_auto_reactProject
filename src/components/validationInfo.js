

export default function validationInfo(values){

let errors={};
//email
if(!values.email){
    errors.email="Email required"
}else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
    errors.email="Email address is invalid"
}


//password

if(!values.password){
    errors.password='password required'
}else if(values.password.length<6){
errors.password='minimum 6 characters required'
}



return errors;
}