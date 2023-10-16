import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-1'>
                <h1 className='footer-title'>About Us</h1>
                <div className='footer-description'>
                    <div className='footer-1-description-one' >Support Center</div>
                    <div className='footer-1-description-two' >Customer Support</div>
                    <div className='footer-1-description-three' >About us</div>
                    <div className='footer-1-description-four' >Copyright</div>
                    <div className='footer-1-description-five' >Popular campaign</div>
                </div>
            </div>
            <div className='footer-2'>
                <h1 className='footer-title'> Our Information</h1>
                <div className='footer-description'>
                    <div >Return Policy</div>
                    <div  >Privacy Policy</div>
                    <div  >Terms and Conditions</div>
                    <div  >Sit Map</div>
                    <div  >Store Hours</div>
                </div>
            </div>
            <div className='footer-3'>
                <h1 className='footer-title'> My Accounts</h1>
                <div className='footer-description'>
                    <div  >Press inquiries</div>
                    <div  >Social Media</div>
                    <div  >Directories </div>
                    <div >Images & B-roll</div>
                    <div  >Permisssions</div>
                </div>


            </div>
            <div className='footer-4'>
                <h1 className='footer-title'>Policy</h1>
                <div className='footer-description'>
                    <div >Application Security</div>
                    <div  >Software Principles</div>
                    <div  >Unwanted Software policy</div>
                    <div  >Responsible supply chain</div>
                </div>
            </div>
        </div>
    )
}

export default Footer