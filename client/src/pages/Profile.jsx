import background from '../assets/defaultBackground.jpg'
import ProfileCamera from '../assets/profileCamera.png'
import Camera from '../assets/camera.webp'
import { BiPencil } from "react-icons/bi";

const Profile = () => {
  return (
    <div className="flex mt-6 md:flex-row flex-col mr-10 lg:mr-0">
      <div className="border border-solid bg-white rounded-lg ml-5 md:ml-10 lg:ml-20 w-full mr-10 lg:mr-0 lg:w-3/4 relative">
        <div className='flex justify-end mr-5 cursor-pointer'>
          <div className='border border-solid bg-white w-10 h-10 rounded-full absolute mt-5 flex justify-center items-center'>
            <img src={Camera} alt="" className='w-6 h-6' />
          </div>
        </div>
        <img src={background} alt="" className="w-full h-52 rounded-t-lg z-0 cursor-pointer" />
        <div className='rounded-full w-40 h-40 z-10 border-white ml-10 bg-profileColor absolute flex justify-center items-center cursor-pointer' style={{ marginTop: '-4rem' }}>
          <img src={ProfileCamera} alt="" className='w-24 h-20' />
        </div>
        <div className="flex justify-end">
          <span className='hover:border-gray-300 hover:bg-gray-200 hover:rounded-full cursor-pointer p-2 mr-5 mt-2'>
            <BiPencil className='text-xl' />
          </span>
        </div>
        <div className='ml-7'>
          <h1 className='mt-16'>Sanjay</h1>
          <div className='flex'>
            <p>Desc</p>
          </div>
          <div className="border border-gray-400 bg-white h-40 mt-10"></div>
        </div>
      </div>
      <div className="w-1/4 border border-solid bg-white ml-10 mr-20 rounded-lg hidden lg:block"></div>
    </div>
  )
}

export default Profile;