import Typed from 'react-typed'
const Hero =()=>{
  return(
    <>
    <div className="text-white">

    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <p className="uppercase text-primary font-bold p-2">Growing with data anaylytics</p>
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6" >Grow woth data.</h1>
      <div className='flex justify-center items-center'>
        <p className="md:text-5xl sm:text-6xl text-xl font-bold">
        Fast, flexible financing for
        <Typed className="md:text-5xl sm:text-6xl text-xl font-bold pl-2" strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop/>
        </p>
      </div>
      <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
      <button className='bg-primary h-16 mx-auto w-[200px] rounded-md font-medium text-black my-6'>Get Started</button>
    </div>
    </div>

    </>
  )
}
export default Hero
