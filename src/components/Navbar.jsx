import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const {user,logout} = useAuth0();
  return (
    <div className='flex justify-center items-center gap-8 bg-gray-50 h-20 px-4'>
        <img src={user?.picture} alt="user" className='rounded-full w-10 h-10'/>
        <h4 className='text-lg tracking-widest'>Welcome, <strong className='font-medium text-xl'>{user?.name}</strong></h4>
        <button className='text-[#617d98] tracking-wider hover:text-black font-medium text-lg hover:bg-blue-300 px-4 py-2 rounded-3xl' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar