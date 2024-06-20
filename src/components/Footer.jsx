let year=new Date().getFullYear()
export default function Footer(){
    const goToTop=()=>{
        window.scrollTo(0,0);
    };
    return <footer className="bg-custom-grey font-bold text-center text-white h-28 items-center flex flex-col">
        <button onClick={goToTop} className="bg-panel-bg p-3 mb-4 w-full">Jump to top</button>
        Copyrights {year}
    </footer>
}