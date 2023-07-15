import Laptop from '../assests/laptop.jpg'

const Analytics = ()=>{
  return(
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} className='mx-auto my-4 w-[500px]' alt={'laptop'}/>
        <div>
          <p className='uppercase text-primary font-bold'>
            Data Analytics dashboard
          </p>
          <h1 className='d:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Handle Data Analytics Centerally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iusto ad culpa, earum voluptatibus error sit magnam reprehenderit aperiam, soluta sequi, quaerat expedita maiores accusamus labore quis rem quia tenetur?
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}
export default Analytics
