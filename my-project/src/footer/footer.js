import { BsTwitter, BsFacebook, BsYoutube } from 'react-icons/bs';

function Footer(){
    return(
        <div className='p-10 mt-20 sm:mt-0 sm:p-32 flex flex-col gap-7 font-sans'>
            <div className=" text-white flex flex-row text-5xl gap-8 justify-center">
                <a target="_blank" href="https://twitter.com/kobid_aryal">
                    <div className='hover:text-blue-500 duration-300 cursor-pointer'>
                        <BsTwitter/>
                    </div>
                </a>
                <div className='hover:text-blue-700 duration-300 cursor-pointer'>
                    <BsFacebook/>
                </div>
                <div className='hover:text-red-600 duration-300 cursor-pointer'>
                    <BsYoutube/>
                </div>
            </div>
            <div className='text-xl text-white flex flex-row gap-5 justify-center'>
                <label className='duration-3000 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-violet-500 to-pink-500'>Privacy</label>
                <label className=' hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-violet-500 to-pink-500'>Terms of Use</label>
            </div>
        </div>

    )
}
export default Footer;