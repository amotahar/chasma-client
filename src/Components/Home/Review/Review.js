import React, { useEffect, useState } from 'react';
import UseAuth from '../../../Hook/useAuth';
import './Review.css'
import ReviewPoint from './ReviewPoint';

const Review = () => {
    

    const [review, setReview] = useState([]);
    useEffect(() => {
      fetch("https://still-brushlands-71573.herokuapp.com/review")
        .then((res) => res.json())
        .then((data) => setReview(data));
    }, []);

 


    return (
        <div className='Review'>
            <div className="container">
                <div className="row">
                    <div className="col text-center text-light">
                    <h2>Our All Review</h2>
                    </div>
                </div>
                <div className="row">
                 
                    
                        {
                            review.map((reviewData)=><ReviewPoint reviewData={reviewData}></ReviewPoint>)
                        }

                       
                    
                </div>
            </div>
        </div>
    );
};

export default Review;