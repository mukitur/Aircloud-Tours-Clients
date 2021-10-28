import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/logo1.png';
import googleIcon from '../../../../images/google.png';

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
             <Container className="mt-5 border">
                <Button onClick={handleGoogleLogin} variant="light"><img className = "mt-4" src = {googleIcon} alt=""/> Login with GOOGLE </Button>
            </Container>
        </div>
    );
};

export default Login;