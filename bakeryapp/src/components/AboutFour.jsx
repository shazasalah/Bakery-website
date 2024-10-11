import React from 'react';
import '../styles/AboutFour.css';

export default function AboutFour() {
    return (
        <div className='bgfour'>
        <div className="container aboutFour">
        <div className="row ">
          <div className="col-md-3 ">
            <div><i class="fa-regular fa-thumbs-up"></i></div> 
            <div className='counterFour'></div>
            <div><h4>Page Likes</h4></div>
          </div>

          <div className="col-md-3 ">
            <div><i class="fa-solid fa-shop"></i></div>
            <div className='counterFour2'></div>
            <div><h4>Locations</h4></div>
          </div>

          <div className="col-md-3 ">
          <div><i class="fa-regular fa-lightbulb"></i></div>
          <div className='counterFour3'></div>
          <div><h4>Great Ideas</h4></div>
          </div>

          <div className="col-md-3 ">
            <div><i class="fa-regular fa-comment"></i></div>
            <div className="counterFour4"></div>
            <div><h4>Comments</h4></div>
          </div>

        </div>
      </div>

            
        </div>
    );
  }