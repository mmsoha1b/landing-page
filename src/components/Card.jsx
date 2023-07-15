const Card = ({buttonColor, buttonTextColor, money, storage, packageName, allowedUsers, maxSendMemory,imgSrc})=>{
  return(
    <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20' src={imgSrc} alt={'package'}></img>
      <h3 className='font-bold mt-6 text-3xl'>{packageName}</h3>
      <p className='font-bold mt-6 text-5xl'> ${money}</p>
      <p className='mt-10 font-medium text-lg'>{storage} Storage</p>
      <p className='mt-10 font-medium text-lg'>{allowedUsers} User allowed</p>
      <p className='mt-10 font-medium text-lg'>Send up to {maxSendMemory}</p>
      <button className={`my-10 bg-${buttonColor} px-3 py-4  text-${buttonTextColor} w-[200px] font-bold rounded-md`}>Start Trial</button>
  </div>
  )
}
export default Card
