import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
             <Container>
                <Row className="text-start my-5">
                    <Col className="bg-light p-5" sm={6}>
                        <h4 className="text-success">Please Login using your Gmail Account! </h4>
                        <Button onClick={handleGoogleLogin} variant="light"><img className = "mt-4" src = {googleIcon} alt=""/>  </Button>
                    </Col>
                    <Col sm={6} className="text-center">
                        <img rounded src = {image} width={"100%"} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;