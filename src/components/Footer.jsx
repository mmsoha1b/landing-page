import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
const Footer = ()=>{
  return(
    <div className="bg-black w-full px-4 md:p-16">
    <div className="w-full md:px-4 py-3 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
      <div className='w-[75%]'>
        <h1 className="text-primary text-2xl font-bold">REACT.</h1>
        <p className="text-white my-2 md:my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam blanditiis natus officia. Nesciunt quo fugit magni consectetur, dolorem repellendus necessitatibus rem saepe dolorum. Iusto impedit id ipsa incidunt dolorem!</p>
        <div className="flex justify-between my-6 md:w-[75%]">
          <FaDribbbleSquare className='text-white' size={30}/>
          <FaFacebookSquare className='text-white' size={30}/>
          <FaGithubSquare className='text-white' size={30}/>
          <FaInstagram className='text-white' size={30}/>
          <FaTwitterSquare className='text-white' size={30}/>
        </div>
      </div>
      <div className='flex my-6'>
      <div className='flex flex-col ml-0 md:mx-16'>
        <h3 className='text-gray-500 text-xl '>Solutions</h3>
        <ul className='text-white py-0 my-4 md:my-6'>
          <li className='my-2'>
            Analytics
          </li>
          <li className='my-2'>
            Marketing
          </li>
          <li className='my-2'>
            Commerce
          </li>
          <li className='my-2'>
            Insights
          </li>
        </ul>
      </div>
      <div className='flex flex-col  mx-8'>
        <h3 className='text-gray-500 text-xl '>Support</h3>
        <ul className='text-white py-0 my-4 md:my-6'>
          <li className='my-2'>
            Pricing
          </li>
          <li className='my-2'>
            Documentation
          </li>
          <li className='my-2'>
            Guides
          </li>
          <li className='my-2'>
            API Status
          </li>
        </ul>
      </div>
      <div className='flex flex-col  mr-0'>
        <h3 className='text-gray-500  text-xl '>Company</h3>
        <ul className='text-white my-4 md:my-6'>
          <li className='my-2'>
            About
          </li>
          <li className='my-2'>
            Blog
          </li>
          <li className='my-2'>
            Jobs
          </li>
          <li className='my-2'>
            Press
          </li>
          <li className='my-2'>
            Partners
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
    )
}
export default Footer
