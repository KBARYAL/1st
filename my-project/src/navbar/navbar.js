import { AiOutlineTwitter, AiFillFacebook,AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';

function Navbar(){
   window.addEventListener("scroll",()=>{
    //Changing the background of navbar black when scrolled
        const navCol = document.getElementById("navbar");
        if(window.scrollY>=80){
            navCol.classList.add("bg-black");
        }
        else{
            navCol.classList.remove("bg-black");
        }
   })
   //Making of sidebar for mobile
    const SideBar=()=>{
        const sidebar = document.getElementById("sidebar");
        const navbar = document.getElementById("navbar");
        sidebar.classList.toggle("w-full");
        sidebar.classList.toggle("w-0");
        sidebar.classList.toggle("bg-black");
        navbar.classList.toggle("hidden");

    }
    return (
        //Making of NavBar
        //Used flex to distrubuite it evenly
        //Used react-icon for the icons used in the navbar
        <div>    
        <div id="navbar" className='fixed w-full pb-7 z-10 flex-col flex ' >
            <div className='hidden sm:block'>
                <div className="flex flex-row  text-white pt-6 gap-6 whitespace-nowrap justify-evenly">
                    <HashLink to={"/#home"}>
                        <div className=' text-3xl font-bold lg:text-4xl hover:cursor-pointer'>COINDOM</div>  
                    </HashLink>    
                        <div className='flex gap-8 text-xl lg:text-2xl items-end font-semibold'>
                                    <HashLink to={"/#home"}>
                                        <label className=' hover:cursor-pointer duration-300 hover:text-purple-500 font-bold'>Home</label>
                                    </HashLink>
                                    <HashLink to={"/#market"}>
                                        <label className=' hover:cursor-pointer duration-300 hover:text-purple-500 font-bold'>Market</label>
                                    </HashLink>
                                    <HashLink to={"/#third"}>
                                        <label className=' hover:cursor-pointer duration-300 hover:text-purple-500 font-bold'>Choose Us</label>
                                    </HashLink>
                                    <HashLink to={"/#fourth"}>
                                        <label className=' hover:cursor-pointer duration-300 hover:text-purple-500 font-bold'>Join</label>
                                    </HashLink>    
                            
                            
                        </div>
                        <div className='flex flex-row gap-3 text-2xl lg:text-2xl items-end'>
                            <a target="_blank" href="https://twitter.com/kobid_aryal">
                                <label  className=' hover:cursor-pointer duration-300 hover:text-blue-500'><AiOutlineTwitter/>
                            </label></a>
                            <label  className=' hover:cursor-pointer duration-300 hover:text-blue-700'><AiFillFacebook/></label>  
                        </div>
                </div>
            </div>
            <div id="navbar" className=' sm:hidden ml-8 mr-8 flex flex-col '>
                <div className="flex flex-row  text-white pt-6 gap-8 whitespace-nowrap justify-between items-end">
                    <HashLink to="/#home"><div className=' text-4xl font-bold hover:cursor-pointer'>COINDOM</div> </HashLink>
                    <button className=' text-3xl hover:cursor-pointer' onClick={SideBar}>
                        <AiOutlineMenu/>
                    </button>
                </div>
            </div>
        </div>
        <div id="sidebar" className='w-0 fixed overflow-hidden h-screen duration-500 z-20'>
            <div className=''>
                <div className=" flex flex-row  text-white justify-between p-6">
                    <HashLink to="/#home"><div className=' text-4xl font-bold hover:cursor-pointer'>COINDOM</div> </HashLink>
                    <button className=' text-3xl hover:cursor-pointer mr-2' onClick={SideBar}>
                        <AiOutlineClose/>
                    </button>
                </div>
            </div>
            <div  className='bg-black flex flex-col h-screen items-center justify-center text-white font-semibold text-5xl gap-8'>
                <HashLink to={"/#home"} onClick={SideBar}><h1 className='hover:cursor-pointer'>Home</h1></HashLink>
                <HashLink to={"/#market"} onClick={SideBar}><h1 className='hover:cursor-pointer'>Market</h1></HashLink>
                <HashLink to={"/#third"} onClick={SideBar}><h1 className='hover:cursor-pointer whitespace-nowrap'>Choose Us</h1></HashLink>
                <HashLink to={"/#fourth"} onClick={SideBar}><h1 className='hover:cursor-pointer'>Join</h1></HashLink>  
            </div>
        </div>
    </div>
    )
}
export default Navbar;