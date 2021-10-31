import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/logo1.png';
import googleIcon from '../../../../images/google.png';
import image from '../../../../images/banner3.jpg';

const Login = () => {
    const {signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    //Google Login Process
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri)  
        })   
    }
    return (
        <div>
             <img className = "mt-4" src = {logo} alt=""/>
            <div className="container px-4 my-5">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <h4 className="text-success">Please Login using your Gmail Account! </h4>
                            <Button onClick={handleGoogleLogin} variant="light"><img className = "mt-4" src = {googleIcon} alt=""/>  </Button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light"><img className="text-right" rounded src = {image} width={"100%"} alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;