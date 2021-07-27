import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { registerUserAction } from '../../redux/actions/authActions';
import { passwordStrengthMeter } from '../../helpers/helper';

export default function Register() {

    const dispatch = useDispatch();
    const [input, setInput] = React.useState({name:'', email:'',password:'', password_confirmation:'', agree:false});
    const [shouldRedirect, setShouldRedirect] = React.useState(false)
    const onSubmit = (input) => {
        dispatch(registerUserAction(input,()=>{ return setShouldRedirect(true) }));
    }

    const passwordStrength = (string) => {
        let score = passwordStrengthMeter(string);
        switch (true) {
            case (score>60):
                return <span className="font-weight-700" style={{color:'purple'}}>super strong</span>;
            case (score>50):
                return <span className="text-dark font-weight-700">very strong</span>;
            case (score>40):
                return <span className="text-success font-weight-700">strong</span>;
            case (score>30):
                return <span className="text-info font-weight-700">above average</span>;
            case (score>20):
                return <span className="text-primary font-weight-700">average</span>;
            case (score>10):
                return <span className="text-warning font-weight-700">weak</span>;
            default:
                return <span className="text-danger font-weight-700">very weak</span>;
        }
    }

    return (
        <React.Fragment>
            {shouldRedirect?<Redirect to={{pathname:"/login"}} />:null}
            <section className="section section-shaped section-lg">
                <div className="shape shape-style-1 bg-gradient-default">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <div className="container pt-lg-7">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card bg-secondary shadow border-0">
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Sign up with credentials</small>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <div className="input-group input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-hat-3" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Name" type="text" required onChange={(e)=>setInput({...input,name:e.target.value})} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Email" type="email" required onChange={(e)=>setInput({...input,email:e.target.value})} />
                                            </div>
                                        </div>
                                        <div className="form-group focused">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Password" type="password" required onChange={(e)=>setInput({...input,password:e.target.value})} />
                                            </div>
                                        </div>
                                        <div className="form-group focused">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Repeat Password" type="password" required onChange={(e)=>setInput({...input,password_confirmation:e.target.value})} />
                                            </div>
                                        </div>
                                        <div className="text-muted font-italic"><small>password strength: {passwordStrength(input.password)}</small></div>
                                            <div className="row my-4">
                                                <div className="col-12">
                                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                                        <input className="custom-control-input" id="customCheckRegister" type="checkbox" required onChange={(e)=>setInput({...input,agree:e.target.checked})} />
                                                        <label className="custom-control-label" htmlFor="customCheckRegister"><span>I agree with the Privacy Policy</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary mt-4" onClick={()=>onSubmit(input)}>Create account</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
