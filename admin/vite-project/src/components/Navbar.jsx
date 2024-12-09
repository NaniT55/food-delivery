import {assets} from '../assets/assets'


function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center w-[90%] mx-auto p-2'>
      <img src={assets.logo} alt="logo" className='max-w-[120px]'/>
      <img src={assets.profile_image} alt="profile" className='w-[40px]'/>
    </div>
  )
}

export default Navbar

