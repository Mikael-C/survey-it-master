import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { loginUserAction } from '../../redux/actions/authActions';

export default function Login() {

    const dispatch = useDispatch();
    const [input, setInput] = React.useState({email:'',password:'', rememberMe:false});
    const [shouldRedirect, setShouldRedirect] = React.useState(false)
    const onSubmit = (input) => {
        dispatch(loginUserAction(input,()=>{ return setShouldRedirect(true) }));
    }

    return (
        <React.Fragment>
            {shouldRedirect?<Redirect to={{pathname:"/dashboard"}} />:null}
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
                                        <small>Sign in with your credentials</small>
                                    </div>
                                    <form>
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
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
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox" required onChange={(e)=>setInput({...input,rememberMe:e.target.checked})} />
                                            <label className="custom-control-label" htmlFor=" customCheckLogin"><span>Remember me</span></label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary my-4" onClick={()=>onSubmit(input)}>Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row mt-3">
                            <div className="col-6">
                                <a href="/#" className="text-light"><small>Forgot password?</small></a>
                            </div>
                            <div className="col-6 text-right">
                                <a href="/register" className="text-light"><small>Create new account</small></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
