import React from 'react'
import './Main.css'
import iconmusic from './img/icon-music.svg'

const Main = () => {
  return (
    <div className='Main'>
      
      <div className='orderpara'>
        

                                              <div className='moctext'>
                                                        <h2 className='order'>Order Summary</h2>
                                                        <p id="para">You can now listen to million of songs,
                                                          audiobooks, and podcasts on any device
                                                          anywhere you like!
                                                      </p>
        

                          
                                                      <div className='movempc'>
                                                        <div className='musplancolor'>
                                                          <div className='musplan'>
                                                                <img id='iconmusic' src={iconmusic} alt="" />
                                                                <p className='plan'> <span id='annual'> Annual Plan</span> $59.99/year</p>
                                                                  <a id='change' href="">change</a>
                                                            </div>
                                                        </div>
                                                      </div>
                                                      
                                                          
                                                    <div className='proceed'>
                                                      <button id='btn'>Proceed to Payment</button>
                                                    </div>
                                                    

                                                  <div className='movecancel'>
                                                  <a id='cancel' href="">Cancel Order</a>
                                                  </div>
                                              </div>


                    






                            </div>









    </div>
  )
}

export default Main