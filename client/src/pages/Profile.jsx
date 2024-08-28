import { useState } from 'react';
import background from '../assets/defaultBackground.jpg';
import ProfileCamera from '../assets/profileCamera.png';
import Camera from '../assets/camera.webp';
import { HiPhoto } from "react-icons/hi2";
import { BiPencil } from "react-icons/bi";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [postImage, setPostImage] = useState(null);  // State to store the uploaded post image

  const handleCreatePostClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPostImage(null); // Reset the post image when modal is closed
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (e.target.id === "backgroundFileInput") {
          setProfileImage(reader.result);
        } else if (e.target.id === "profileFileInput") {
          setProfilePicture(reader.result);
        } else if (e.target.id === "postFileInput") {
          setPostImage(reader.result);  // Set the post image
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = (inputId) => {
    document.getElementById(inputId).click();
  };

  return (
    <div className="flex flex-col lg:flex-row mt-6 mr-20 lg:mr-0">
      <div className="flex flex-col w-full lg:w-3/4 mr-20">
        <div className="border border-solid bg-white rounded-lg ml-5 md:ml-10 lg:ml-20 w-full mr-10 lg:mr-0 relative">
          <div className='flex justify-end mr-5 cursor-pointer'>
            <div 
              className='border border-solid bg-white w-10 h-10 rounded-full absolute mt-5 flex justify-center items-center overflow-hidden'
              onClick={() => triggerFileInput('backgroundFileInput')}
            >
              <img 
                src={Camera} 
                alt="" 
                className={`w-full h-full object-cover p-2`} 
              />
            </div>
          </div>
          <img 
            src={profileImage || background} 
            alt="Profile Background" 
            className="w-full h-auto rounded-t-lg z-0 cursor-pointer max-h-60"
            style={{ objectFit: 'cover' }}
          />
          <div 
            className='rounded-full z-10 ml-4 lg:ml-10 border-white bg-profileColor absolute flex justify-center items-center cursor-pointer w-24 h-24 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-defaultBorderDown sm:mt-borderDown overflow-hidden'
            onClick={() => triggerFileInput('profileFileInput')}
          >
            <img 
              src={profilePicture || ProfileCamera} 
              alt="Profile" 
              className={`object-cover ${!profilePicture ? 'h-20' : 'w-full h-full'}`} 
            />
          </div>
          <div className="flex justify-end">
            <span className='hover:border-gray-300 hover:bg-gray-200 hover:rounded-full cursor-pointer p-2 mr-5 mt-2'>
              <BiPencil className='text-2xl' />
            </span>
          </div>
          <div className='ml-7'>
            <h1 className='mt-4 lg:mt-12 text-xl font-extrabold'>sanjay s</h1>
            <div className='flex'>
              <p>Desc</p>
            </div>
            <p className='text-blue-800 font-semibold leading-none hover:border-b w-borderWidth mb-5 mt-1 hover:border-b-blue-800 cursor-pointer'>1 connection</p>
          </div>
        </div>
        <div className="border border-solid bg-white rounded-lg h-40 mt-10 ml-5 md:ml-10 lg:ml-20 pl-5 pt-5 w-full mr-10 lg:mr-0">
          <div className='flex'>
            <div>
              <p className='text-xl font-extrabold'>Activity</p>
              <p className='text-blue-800 font-semibold leading-none hover:border-b w-borderWidth mb-5 mt-1 hover:border-b-blue-800 cursor-pointer'>1 followers</p>
            </div>
            <div className='ml-auto mr-10'>
              <button 
                onClick={handleCreatePostClick} 
                className='border h-10 text-blue-600 pl-3 pr-3 rounded-lg text-lg font-semibold border-blue-600 hover:border-2 hover:bg-blue-50'>
                Create a post
              </button>
            </div>
          </div>
          <p className='text-lg font-extrabold'>{`You haven't posted yet`}</p>
          <p>{`Posts you share will be displayed here.`}</p>
        </div>
      </div>
      <div className="w-full lg:w-1/4 border border-solid bg-white ml-5 lg:ml-10 mr-10 lg:mr-20 rounded-lg mt-10 lg:mt-0"></div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-postCreationWidth h-postCreationHeight flex flex-col relative">
            <h2 className="text-xl font-bold mb-4">Create a Post</h2>
            <textarea
              className="border-white outline-none w-full h-1/4 rounded-lg resize-none"
              placeholder="What do you want to talk about?"
            ></textarea>
            
            <div className="mt-4 overflow-auto flex-1" style={{ maxHeight: '200px' }}>
              {postImage && (
                <img src={postImage} alt="Uploaded Post" className="w-full h-auto rounded-lg" />
              )}
            </div>
            
            <div className='flex items-center mt-6'>
              <HiPhoto 
                className='text-2xl cursor-pointer' 
                onClick={() => triggerFileInput('postFileInput')}
              />
            </div>
            
            <hr className="my-4" />
            
            <div className="flex justify-end items-end mt-4">
              <button
                onClick={closeModal}
                className="border h-10 text-blue-600 pl-3 pr-3 rounded-lg text-lg font-semibold border-blue-600 hover:border-2 hover:bg-blue-50">
                Cancel
              </button>
              <button
                className="ml-4 bg-blue-600 text-white h-10 pl-3 pr-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden file inputs */}
      <input 
        id="backgroundFileInput" 
        type="file" 
        className="hidden" 
        accept="image/*"
        onChange={handleFileChange}
      />
      <input 
        id="profileFileInput" 
        type="file" 
        className="hidden" 
        accept="image/*"
        onChange={handleFileChange}
      />
      <input 
        id="postFileInput" 
        type="file" 
        className="hidden" 
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Profile;