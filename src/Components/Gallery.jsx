import React from 'react'

const Gallery = () => {
  const gallery= ["img3.png","img5.png","img15.png","img15.png","img11.png","img12.png","img9.png","img13.png","img7.png","img3.png"]
  return (
    <section className='gallery'>
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {
            gallery.slice(0 , 3).map((element, index) =>(
              <img key={index} src={element} alt="image" />
            )
          )
          }
        </div>
        
        <div>
          {
            gallery.slice(3 , 6).map((element, index) =>(
              <img key={index} src={element} alt="image" />
            )
          )
          }
        </div>
        
        <div>
          {
            gallery.slice(6 , 9).map((element, index) =>(
              <img key={index} src={element} alt="image" />
            )
          )
          }
        </div>
        
      </div>
    </section>
  )
}

export default Gallery
