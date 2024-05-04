function Navbar(){
    return(
    <div className="w-screen flex  justify-around items-center py-6">
            <div className="flex w-[60%] justify-evenly items-center">
        <img className="w-[50px]" src="https://imgs.search.brave.com/nPXkJ0yA0kYzGe0nvhW5X4G5DK35FX_AyDVEwA3oR_w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MzAzYTFjM2FiMWI5/MDA2NTRhYWQzYWIu/cG5n" alt="" />
        <h1 className="font-semibold ">HootSuite</h1>
        <div>
            <a  className="font-semibold " href="">Platform</a>
        </div>
        <div>
            <a className="font-semibold " href="">Price</a>
        </div>
        <div>
            <a className="font-semibold " href="">Plan</a>
        </div>
        <div>
            <a className="font-semibold " href="">Education</a>
        </div>
        <div>
            <a className="font-semibold " href="">Resources</a>
        </div>

        </div>
        <div className="flex justify-evenly w-[30%]">
            <button className="font-semibold text-gray-500 ">Contact Us</button>
            <button className="font-semibold text-gray-500 ">Log In</button>
            <button className="font-semibold text-white bg-green-700 py-2 px-5 ">Sign Up</button>
        </div>
    </div>
    )

}
export default Navbar;