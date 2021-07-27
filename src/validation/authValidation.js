import { validate } from '../helpers/validator';
import { setAlertAction } from '../redux/actions/alertActions';
import errorHandler from '../handlers/errorHandler';

export const loginUserValidation = (dispatch, payLoad) => {
    let data = {
        email:payLoad.email, 
        password:payLoad.password
    };
    let rules = {
        email:'required|email',
        password:'required|minSize:5|maxSize:25'
    }
    let messages = {
        email:{
            required:'Email is required',
            email:'Email is not valid'
        },
        password:{
            required:'Password is required',
            minSize:'Password is less than six characters',
            maxSize:'Password is above the required length'
        }
    }

    // If they are no errors then exit
    let result = validate(data,rules,messages);
    if (Object.keys(result).length === 0) {
        return true;
    }

    // Picking the first error and dispatching it to the user
    let msg = result[Object.keys(result)[0]]; 
    dispatch(setAlertAction({type:'info', message: Object.values(msg)[0] }));
    errorHandler(msg);

    // Return false to stop the api call from happing
    return false;
}

export const registerUserValidation = (dispatch, payLoad) => {
    let data = {
        name:payLoad.name,
        email:payLoad.email, 
        password:payLoad.password,
        confirmation:{newPassword:payLoad.password, repeatPassword: payLoad.password_confirmation},
    };
    let rules = {
        name:'required|minSize:4|maxSize:50',
        email:'required|email',
        password:'required|minSize:5|maxSize:25',
        confirmation:(value)=>{return  value.newPassword === value.repeatPassword ? true : false;}
    }
    let messages = {
        name:{
            required:'Name is required',
            minSize:'Name is less than four characters',
            maxSize:'Name is above the required length'
        },
        email:{
            required:'Email is required',
            email:'Email is not valid'
        },
        password:{
            required:'Password is required',
            minSize:'Password is less than six characters',
            maxSize:'Password is above the required length',
            confirmation:{
                custom:'Password and repeat password do not match'
            }
        }
    }

    // If they are no errors then exit
    let result = validate(data,rules,messages);
    if (Object.keys(result).length === 0) {
        return true;
    }

    // Picking the first error and dispatching it to the user
    let msg = result[Object.keys(result)[0]]; 
    dispatch(setAlertAction({type:'info', message: Object.values(msg)[0] }));
    errorHandler(msg);

    // Return false to stop the api call from happing
    return false;
}

export const changeUserPasswordValidation = (dispatch, payLoad) => {
    let data = {
        old_password:payLoad.old_password, 
        new_password:payLoad.new_password,
        new_password_confirmation:payLoad.new_password_confirmation,
        confirmation:{newPassword:payLoad.new_password, repeatPassword: payLoad.new_password_confirmation},
    };
    let rules = {
        old_password:'required|minSize:5|maxSize:25',
        new_password:'required|minSize:5|maxSize:25',
        new_password_confirmation:'required|minSize:5|maxSize:25',
        confirmation:(value)=>{return value.newPassword === value.repeatPassword ? true : false;}
    }
    let messages = {
        old_password:{
            required:'Current password is required',
            minSize:'Current password is less than six characters',
            maxSize:'Current password is above the required length'
        },
        new_password:{
            required:'New password is required',
            minSize:'New password is less than six characters',
            maxSize:'New password is above the required length'
        },
        new_password_confirmation:{
            required:'Repeat new password is required',
            minSize:'Repeat new password is less than six characters',
            maxSize:'Repeat new password is above the required length'
        },
        confirmation:{
            custom:'New and repeat password do not match'
        }
    }

    // If they are no errors then exit
    let result = validate(data,rules,messages);
    if (Object.keys(result).length === 0) {
        return true;
    }

    // Picking the first error and dispatch it to the user
    let msg = result[Object.keys(result)[0]]; 
    dispatch(setAlertAction({type:'info', message: Object.values(msg)[0] }));
    errorHandler(msg);

    // Return false to stop the api call from happing
    return false;
}

export const forgotUserPasswordValidation = (dispatch, payLoad) => {
    let data = {
        email:payLoad.email, 
        reset_form_link:payLoad.reset_form_link,
    };
    let rules = {
        email:'required|email',
        reset_form_link:'required',
    }
    let messages = {
        email:{
            required:'email is required',
            email:'email is not valid'
        },
        reset_form_link:{
            required:'Reset form link is required',
        },
    }

    // If they are no errors then exit
    let result = validate(data,rules,messages);
    if (Object.keys(result).length === 0) {
        return true;
    }

    // Picking the first error and dispatch it to the user
    let msg = result[Object.keys(result)[0]]; 
    dispatch(setAlertAction({type:'info', message: Object.values(msg)[0] }));
    errorHandler(msg);

    // Return false to stop the api call from happing
    return false;
}

export const resetUserPasswordValidation = (dispatch, payLoad) => {
    let data = {
        token:payLoad.token,
        old_password:payLoad.old_password, 
        new_password:payLoad.new_password,
        new_password_confirmation:payLoad.new_password_confirmation,
        confirmation:{newPassword:payLoad.new_password, repeatPassword: payLoad.new_password_confirmation},
    };
    let rules = {
        token:'required',
        old_password:'required|minSize:5|maxSize:25',
        new_password:'required|minSize:5|maxSize:25',
        new_password_confirmation:'required|minSize:5|maxSize:25',
        confirmation:(value)=>{return value.newPassword === value.repeatPassword ? true : false;}
    }
    let messages = {
        token:{
            required:'A token is required',
        },
        old_password:{
            required:'Current password is required',
            minSize:'Current password is less than six characters',
            maxSize:'Current password is above the required length'
        },
        new_password:{
            required:'New password is required',
            minSize:'New password is less than six characters',
            maxSize:'New password is above the required length'
        },
        new_password_confirmation:{
            required:'Repeat new password is required',
            minSize:'Repeat new password is less than six characters',
            maxSize:'Repeat new password is above the required length'
        },
        confirmation:{
            custom:'New and repeat password do not match'
        }
    }

    // If they are no errors then exit
    let result = validate(data,rules,messages);
    if (Object.keys(result).length === 0) {
        return true;
    }

    // Picking the first error and dispatch it to the user
    let msg = result[Object.keys(result)[0]]; 
    dispatch(setAlertAction({type:'info', message: Object.values(msg)[0] }));
    errorHandler(msg);

    // Return false to stop the api call from happing
    return false;
}