import React from 'react'
import image from '../../assets/slide2.jpg'
const DisplayCard = ({data}) => {
  const {title,image} = data
  return (
    <div className={`rounded-lg flex-1 items-center  justify-center md:items-start md:justify-start overflow-hidden relative lg:p-12 p-6 2xl:p-20  flex flex-col min-h-[60vh]  text-white m-8 bg-gray-200 gap-4`}  style={{backgroundImage:`url(${image})`,backgroundSize:'cover', backgroundRepeat:'none',backgroundPosition:'center'}}  >
      <div className='bg-black bg-opacity-25 absolute w-full h-full inset-0 '/>
             <p className='font-bold max-w-[250px] md:leading-8 lg:leading-9 textClamp relative text-center md:text-start'>{title} </p>
             <button className='bg-blue-500 w-fit hover:bg-blue-600 duration-300 py-2 px-4 rounded-md relative '>Experiences</button>
    </div>
  )
}

export default DisplayCard