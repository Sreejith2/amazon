function MultiBox(props) {
  return (
    <div className='flex flex-col bg-white items-center justify-center h-96 w-96 mt-10'>
        <span className='font-bold mb-3 text-xl'>{props.head}</span>
        <div className='flex flex-row flex-wrap justify-evenly [&>span>img]:h-[115px] [&>span]:flex [&>span]:flex-col [&>span]:text-center [&>span]:font-semi-bold'>
            <span><img src={props.img1} alt='img'></img>{props.name1}</span>
            <span><img src={props.img2} alt='img'></img>{props.name2}</span>
            <span><img src={props.img3} alt='img'></img>{props.name3}</span>
            <span><img src={props.img4} alt='img'></img>{props.name4}</span>
        </div>
    </div>
  )
}

export default MultiBox