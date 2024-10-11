import React from 'react'
import '../styles/Home.css';


export default function HomeFour() {
  return (
    <div>
        <div className="container ">
            <div className="row homeFour">
                <div className="col-md-12 headerFour">
                    <h3>Our Baking</h3>
                    <p className='pFour'>Learn more about them. We have worked truly hard to make them perfect for every use.</p>
                </div>
                <div className="col-md-4 col-sm-12 cards ">
                    <img className='w-100' src="./images/ben-garratt-134774-600x500.jpg" alt="" />
                    <h4>Superior Breads</h4>
                    <p>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.</p>
                </div>
                <div className="col-md-4 col-sm-12 cards">
                <img className='w-100' src="./images/stas-ovsky-123540-600x500.jpg" alt="" />
                    <h4>Superior Breads</h4>
                    <p>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.</p>
                </div>
                <div className="col-md-4 col-sm-12 cards">
                <img className='w-100' src="./images/clem-onojeghuo-206832-600x500.jpg" alt="" />
                    <h4>Superior Breads</h4>
                    <p>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
