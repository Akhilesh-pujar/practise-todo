import React,{useState} from 'react'
import { account } from '../appwrite/appwrite-config'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';
function Signup() {
  const navigate = useNavigate();

  const [user,setuser] = useState({

    name:"",
    email:"",
    password:""
  })

  //sign up
const signupUser = async(e)=>{
 e.preventDefault()
 const promise = account.create(
    uuidv4(),
    user.email,
    user.password,
    user.name
  );

  promise.then(
    function(res){
        console.log(res)
        navigate("/login")//sucess
    },

    function(error){
        console.log(error)//error
    }
  )



}
  return (

    <div>
     <form className="container px-5 py-24 mx-auto flex flex-wrap items-center" >
    
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Wel come to web dev-blog</h1>
      <p className="leading-relaxed mt-4"> signing up with our cummunity where latest updates about web gets realesed.</p>
    </div>


    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div className="relative mb-4">
      
      <input
        placeholder="Enter your username"
        type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-200 text-base outline-none
         text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         onChange={(e)=>{
          setuser({
            ...user,name:e.target.value
          })
         }}
         />
      </div>

      <div className="relative mb-4">
       
        <input
         type="email" 
    
        placeholder="Enter your mail"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
         focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         
         onChange={(e)=>{
          setuser({
            ...user,email:e.target.value
          })
         }}
         />
      </div>
 

     <div className="relative mb-4">
       
       <input
        type="password" 
      
       placeholder="Confirm password"
         className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
        focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={(e)=>{
          setuser({
            ...user,password:e.target.value
          })
         }}
        
        />
     </div>

      <button
       className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={signupUser}>Sign Up</button>
     <button>Already have a account then </button>
     
    </div>
    
  </form>
    </div>
  )
}

export default Signup
