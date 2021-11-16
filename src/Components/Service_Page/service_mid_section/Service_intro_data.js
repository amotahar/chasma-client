import React from 'react';

import './Service_page_data.css'

const Service_intro_data = (props) => {
    const{name,des,img}=props;
    return (
        <div className='d-flex service_page'>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
                <h2 className='text-primary'> {name} </h2>
                <p> {des} </p>
            </div>
        </div>
    );
};

export default Service_intro_data;