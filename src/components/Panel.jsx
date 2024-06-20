import MenuIcon from '@mui/icons-material/Menu';
function Panel() {
  return (
    <div className='bg-panel-bg flex flex-row h-[40px] text-white items-center justify-start pl-4 child:border-2 child:px-2 child:font-semibold child:border-transparent child:p-1 child:rounded-sm child-hover:border-white'>
        <span className='flex items-center'><MenuIcon/>All</span>
        <span>Today's deals</span>
        <span>Customer Service</span>
        <span>Registry</span>
        <span>Gift Cards</span>
        <span>Sell</span>
    </div>
  )
}

export default Panel