

const SignupValidation = (signUp) => {
    let error = {};

    if (!signUp.fname) {
        error.fname = "Please enter your first name!";
    }
    if (!signUp.lname) {
        error.lname = "Please enter your last name!";
    }
    if (!signUp.contact) {
        error.contact = "Please enter your contact number!";
    }
    if (!signUp.email) {
        error.email = "Please enter your email!";
    }
    if (!signUp.address) {
        error.address = "Please enter your address!";
    }
    if (!signUp.city) {
        error.city = "Please enter your city!";
    }
    if (!signUp.province) {
        error.province = "Please enter your city!";
    }
    if (!signUp.zipcode) {
        error.zipcode = "Please enter your zipcode!";
    }
    if (!signUp.password) {
        error.password = "Please create password!";
    }
    if (!signUp.repass) {
        error.repass = "Please re-enter your password!";
    }
    

    return error;
}

export default SignupValidation;
