import { useState } from "react"

const Newsletter = ()=>{
  const [email, setEmail] = useState('')

  const handleEmail=(e)=>{
    e.preventDefault()
    setEmail(e.target.value)
  }
  return(
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 px-4" >
        <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl">Want tips & tricks to optimize your flow?</h1>
        <p className="mt-2">Sign up to our new letter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex mb-2 flex-col sm:flex-row justify-between w-full items-start px-4 md:px-0">
          <input placeholder="Enter your email.." className="w-full mx-2 rounded-lg h-12 p-4 text-black flex" type="email" value={email} onChange={handleEmail}/>
          <button className="bg-primary h-12 rounded-lg text-black p-4 font-medium w-[200px]  mx-auto md:ml-4 px-6 py-3 my-6 sm:mt-auto ">Notify me</button>
        </div>
          <p className="px-6">We care about protection of your data and <span className="text-primary">Privacy</span></p>
      </div>
      </div>
    </div>
  )
}
export default Newsletter
