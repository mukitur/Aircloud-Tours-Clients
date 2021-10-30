import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SinglePackage from '../../SinglePackage/SinglePackage';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/services')
            .then(res=>res.json())
            .then(data=> setPackages(data))
    } , [])
    return (
        <div>
            <h2 className="my-5">"We organize Both Domestic & International Tour for you and your family <br/>with affordable price."</h2>
            <Row xs={2} md={3} className="g-3">
                {
                    packages.map(sp => <SinglePackage
                        key= {sp._id}
                        sp={sp}
                    ></SinglePackage>)
                }
            </Row>
        </div>
    );
};

export default Packages;