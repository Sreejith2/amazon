import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlagIcon from '@mui/icons-material/Flag';
export default function NavBar() {
    return (
        <nav className="flex font-bold bg-custom-grey flex-row text-white w-full h-[60px] items-center justify-between">
            <span className="ml-4 border-2 border-transparent hover:border-white p-2"><img className="h-[40px] w-[113px]" src="assets/amazon-logo.png" alt="logo" /></span>
            <div className="grid grid-cols-[auto,1fr] items-end bord border-2 border-transparent hover:border-white p-2">
                <LocationOnIcon />
                <div className="flex flex-col">
                    <span className="text-[12px] font-normal">Deliver to</span>
                    <span className='text-[14px]'>India</span>
                </div>
            </div>
            <div className="flex items-center border-4 border-transparent rounded-lg [&>*]:h-[45px] [&>input]:focus:border-4 [&>input]:focus:border-orange-500">
                <select className="bg-gray-300 w-[50px] border-4 border-transparent text-black font-normal rounded-l-lg focus:outline-none focus:border-4 focus:border-orange-500">
                    <option>All</option>
                    <option>All departments</option>
                    <option>Baby</option>
                    <option>Beauty</option>
                </select>
                <input className="text-black font-normal w-[455px] focus:outline-none" placeholder="Search in Amazon" />
                <button className="text-black bg-custom-yellow rounded-r-lg w-[45px] hover:bg-yellow-500 border-transparent focus:border-4 focus:border-orange-500 "><SearchIcon/></button>
            </div>
            <span className="mr-4 flex flex-row border-2 border-transparent hover:border-white p-3"><FlagIcon/>EN</span>
            <span className='w-[132px] h-[50px] flex flex-col items-center border-2 border-transparent hover:border-white'><span className='font-normal text-[14px]'>Hello Signin</span><span>Account & Lists</span></span>
            <span className='w-[76px] h-[50px] flex flex-col items-center border-2 border-transparent hover:border-white'><span className='font-normal text-[14px]'>Returns</span><span>& Orders</span></span>
            <span className="mr-4 flex flex-row border-2 border-transparent hover:border-white p-3"><ShoppingCartIcon/>Cart</span>
        </nav>
    );
}
