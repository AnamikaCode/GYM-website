import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>Top Workout Session</h1>
        <p>Welcome to HIIT BoostPulse! This high-intensity interval training (HIIT) workout is designed to torch calories, build lean muscle, and boost your endurance in just 45 minutes
          .</p>
          <img src="img2.png" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>HIIT BoostPulse combines short bursts of intense exercises with brief recovery periods to keep your heart rate up and burn fat efficiently. You'll perform a mix of cardio and strength exercises using body weight, kettlebells, and resistance bands.</p>
           <div className="bootcamp">
           <div>
              <h4>Physical Benefits:</h4>
              <p>Burn up to 500 calories per session, improve cardiovascular health, and build muscle.!</p>
            </div>
           
           
          
            <div>
              <h4>Mental Benefits:</h4>
              <p>Mental Benefits: Reduce stress, increase mental clarity, and boost your mood.</p>
            </div>
            <div>
              <h4>Unique Selling Points:</h4>
              <p>Quick results, full-body workout, and adaptable for all fitness levels.</p>
            </div>
            
      
           </div>
      </div>
      
    </section>
  )
}

export default WorkoutSessions
