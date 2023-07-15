import Single from '../assests/single.png'
import Double from '../assests/double.png'
import Triple from '../assests/triple.png'
import Card from './Card'

const Cards = ()=>{
  return(
    <div className='w-full bg-white px-4 py-[10rem]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card imgSrc={Single} maxSendMemory={'2GB'} allowedUsers={'1'} storage={'500 GB'} packageName={'Single User'} money={149} buttonColor={'primary'} buttonTextColor={'black'}/>
        <Card imgSrc={Double} maxSendMemory={'10GB'} allowedUsers={'3'} storage={'1 TB'} packageName={'Partnership'} money={199} buttonColor={'black'} buttonTextColor={'primary'}/>
        <Card imgSrc={Triple} maxSendMemory={'20GB'} allowedUsers={'10'} storage={'5 TB'} packageName={'Group Account'} money={299} buttonColor={'primary'} buttonTextColor={'black'}/>
      </div>
    </div>
  )
}
export default Cards
