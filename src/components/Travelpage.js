import React from 'react'
import './Travelpages.css'
import Navbar from './Navbar'
export const Travelpage = () => {
  return (
    <>
        <Navbar/>
    <body className='bodyy'>
        <div class='header'>
            <h1 style={{color:'#5f5f5f '}}>Best Offer</h1>
            <h1 style={{color: '#f7650a'}}>Travel Packages</h1>
            <p style={{color:'#616161'}}>Deals made especially for you, Everything you need—on a budget.</p>
        </div>
    <div class="container">
        <div class="travelPlans">
            <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Manali" class="place"/>
            <h1 class="planType">Manali Kasol Trip</h1>
            <ul class="travelFeatures">
                <li class="travelFeaturesItem">5D/4N</li>
                <li class="travelFeaturesItem">Group Tour </li>
                <li class="travelFeaturesItem">Manali, Kasol</li>
            </ul>
            <span class="travelPrice"> <span>&#8377;</span>5999</span>
            <a href="#/" class="button">Book Now</a>
        </div>
        <div class="travelPlans">
            <img src="https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="rajasthan" class="place"/>
            <h1 class="planType">Rangeelo Rajasthan</h1>
            <ul class="travelFeatures">
                <li class="travelFeaturesItem">5D/4N</li>
                <li class="travelFeaturesItem">Group Tour</li>
                <li class="travelFeaturesItem">Udaipur, Mount Abu, Kumbhalgarh</li>
            </ul>
            <span class="travelPrice"> <span>&#8377;</span>5499</span>
            <a href="#/" class="button">Book Now</a>
        </div>
        <div class="travelPlans">
            <img src="https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Himachal" class="place"/>
            <h1 class="planType">Himachal Pradesh</h1>
            <ul class="travelFeatures">
                <li class="travelFeaturesItem">8D/7N</li>
                <li class="travelFeaturesItem">Group Tour</li>
                <li class="travelFeaturesItem">Shimla, Dalhousie, Kufri, Kullu</li>
            </ul>
            <span class="travelPrice"> <span>&#8377;</span>12399</span>
            <a href="#/" class="button">Book Now</a>
        </div>
        <div class="travelPlans">
            <img src="https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Goa" class="place"/>
            <h1 class="planType">Goa</h1>
            <ul class="travelFeatures">
                <li class="travelFeaturesItem">3D/2N</li>
                <li class="travelFeaturesItem">Group Tour</li>
                <li class="travelFeaturesItem">North Goa and South Goa</li>
            </ul>
            <span class="travelPrice"> <span>&#8377;</span>4299</span>
            <a href="#/" class="button">Book Now</a>
        </div>
        <div class="travelPlans">
            <img src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="kerala" class="place"/>
            <h1 class="planType">Magical Kerala</h1>
            <ul class="travelFeatures">
                <li class="travelFeaturesItem">5D/4N</li>
                <li class="travelFeaturesItem">Group Tour</li>
                <li class="travelFeaturesItem">Munnar, Thekkady, Alleppey</li>
            </ul>
            <span class="travelPrice"> <span>&#8377;</span>10500</span>
            <a href="#/" class="button">Book Now</a>
        </div>
        <div class="travelPlans">
            <img src="https://images.unsplash.com/photo-1617653202545-931490e8d7e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Andaman" class="place"/>
            <h1 class="planType">Andaman and Nicobar</h1>
            <ul class="travelFeatures">
                <li class="travelFeaturesItem">6D/5N</li>
                <li class="travelFeaturesItem">Group Tour</li>
                <li class="travelFeaturesItem">Port Blair, Neil Island and Havelock</li>
            </ul>
            <span class="travelPrice"> <span>&#8377;</span>24000</span>
            <a href="#/" class="button">Book Now</a>
        </div>

    </div>
</body>
</>
  )
}
