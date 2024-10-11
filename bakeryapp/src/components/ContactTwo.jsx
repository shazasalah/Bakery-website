import React from 'react'
import '../styles/Contact.css'

export default function ContactTwo() {
  return (
    <div>
            <div className="container">
        <div className="row contactTwo">

            
            <div className="col-md-8">
                <div className='form'>
                <h3 className='text-start'>Contact Form</h3>
                <div className='d-flex mb-3'>
                <input className='form-control rounded-0 me-2' type="text" placeholder='Name' />
                <input className='form-control rounded-0 ' type="email" placeholder='Email' />

                </div>
                <input className='form-control mb-3 rounded-0 ' type="emtextail" placeholder='subject' />
                <textarea className='form-control mb-3 rounded-0 ' rows={10} cols={40}></textarea>
                <div> <button className='btn btnContact d-flex ' >Send</button>
</div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="contact">
                    <h3 className='text-start'>Contact Details</h3>
                   <p className='text-start'> I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                   <p className='text-start'>Our contact details:</p>
                   <ul>
                    <li className='d-flex align-items-center text-start'>
                        <div className='iContainer d-flex justify-content-center align-items-center'><i class="fa-solid fa-location-dot"></i>
                        </div> 
                        <div>Manchester St 123-78B, Random 7D, UK</div>
                    </li>
                    <li className='d-flex align-items-center text-start'>
                        <div className='iContainer d-flex justify-content-center align-items-center'> <i class="fa-solid fa-phone"></i>
                        </div><a className='linkC' href="tel:+46 123 456 789">+46 123 456 789</a>
                    </li>
                    <li className='d-flex align-items-center text-start '>
                    <div className='iContainer d-flex justify-content-center align-items-center'><i class="fa-solid fa-heart"></i>
                    </div>Social media loves us!</li>
                    <li className='d-flex align-items-center text-start'>
                    <div className='iContainer d-flex justify-content-center align-items-center'><i class="fa-solid fa-envelope"></i> 
                    </div><a className='linkC' href="">http://www.sitename.com</a>
                </li>
                </ul>

                </div>
            </div>
        </div>
      </div>

    </div>
  )
}
