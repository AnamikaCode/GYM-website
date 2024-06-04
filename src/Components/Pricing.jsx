import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'lucide-react';
const Pricing = () => {
  const pricing =[
    {
      imgUrl:"img11.png",
      title:"",
      price:10000,
      length:3

    },
    {
      imgUrl:"img13.png",
      title:"",
      price:8000,
      length:3

    },
    {
      imgUrl:"img9.png",
      title:"",
      price:18000,
      length:3

    }
  ]
  return (
    <section className='pricing'>
      <h1>BoostPulse FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element =>{
            return(
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <p>For {element.length} Months</p>
                </div>
                <div className="description">
                  <p>
                    <Check/> Equipment
                  </p>
                  <p>
                    <Check/> All Day Training
                  </p>
                  <p>
                    <Check/> Free Restroom
                  </p>
                  <p>
                    <Check/> 24/7 Skilled Support
                  </p>
                  <p>
                    <Check/> 20 Days Freezing Options
                  </p>
                  <Link to={"/"}>Join Now</Link>
                  
                </div>
              </div>
            )
          })
        }
      </div>
      
    </section>
  )
}

export default Pricing
