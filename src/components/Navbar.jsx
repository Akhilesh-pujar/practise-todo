import React from 'react'



function Navbar() {
  
  return (
    <div>
       <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello </p>
            </div>
            <div>
                
              <a href='/login'
                className="bg-green-400 text-gray-900 p-1 rounded-md"
              
              >
                 Login/Sign up
               
              </a>
            </div>
          </div>
    </div>
  )
}

export default Navbar
