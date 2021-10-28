import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle, handleEmailChange, handlePasswordChange, registerWithPassword, error,isLogin, toggleLogin } = useAuth();
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
             <Container className="mt-3">
                <p>You can log in with Google</p>
                <Button onClick={handleGoogleLogin} variant="light"> Gmail Login  </Button>
            </Container>
        </div>
    );
};

export default Login;