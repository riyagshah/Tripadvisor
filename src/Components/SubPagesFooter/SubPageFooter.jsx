import React from 'react'
import "./footerforanother.css"
const SubPageFooter = () => {
  return (
    <div className='main1'>
        <div className='foot'>
        <img className='footimg' src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="" />
       
        <div className='align'>
            <p>© 2022 TripAdvisor LLC All rights reserved.</p>
            <h2 >
                <div className='child'>
                <div className='child1'>Terms of Use</div>
                <br />
                <div className='child1'>Privacy and Cookies</div>
                <div className='child1'>Cookie Content</div>
                <div className='child1'>Site Map</div>
                </div>
                <div className='child'>
                <div className='child1'>How this site work</div>
                <br />
                <div className='child1'>Contact Us</div>
                
                </div>
            </h2>
        </div>
        <div>
           <select className='input1' name="INR" id="" placeholder='INR'>
           <option value="sydney">INR</option>
           </select>
          <select className='input1' name="iNDIA" id="">
          <option value="sydney">India</option>
          </select>
          <select className='input1' name="LIGHT THEME" id="">
          <option value="sydney">Light Theme</option>
          </select>
        </div>
</div>
<div className='lastbox'>
<p>This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. more</p>
</div>
    </div>
  )
}

export default SubPageFooter