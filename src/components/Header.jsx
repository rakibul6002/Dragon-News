import moment from 'moment'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center gap-2 py-2'>
        <div className="logo">
            <img 
                className='w-[300px]'
                src={logo} 
                alt="Logo Image" 
            />
        </div>
        <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  )
}
