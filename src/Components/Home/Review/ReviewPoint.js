import React from "react";
import "./Review.css";
import commentImg from "../../../img/comment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import UseAuth from "../../../Hook/useAuth";
import { far } from '@fortawesome/free-solid-svg-icons'
import './Review.css'

const ReviewPoint = (props) => {
    const { user } = UseAuth();

  const { text, value,dName } = props.reviewData;
 
  return (
    <div className="col-lg-3 ReviewPoint">
      <div class="card">
      

        <div class="card-body text-light">
            <h6 className='textColor mb-3'>{dName}</h6>
          <div>
          {value == 1 ? (
          <FontAwesomeIcon className="mr-2" icon={faStar} />
        ) : value == 2 ? (
          <div>
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2" icon={faStar} />
          </div>
        ) : value == 3 ? (
          <div>
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2" icon={faStar} />
          </div>
        ) : value == 4 ? (
          <div>
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2" icon={faStar} />
          </div>
        ) : (
          <span>
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2" icon={faStar} />
            <FontAwesomeIcon className="mr-2 " icon={faStar} />
          </span>
        )}
          </div>
          <FontAwesomeIcon className="mr-2" icon={faCoffee} /> {text}
        </div>
      </div>
    </div>
  );
};

export default ReviewPoint;
