
function Fourth(){
    return(
        <div id="fourth" className=" p-5 pt-36 sm:mt-0 sm:p-36 flex flex-col gap-7 text-white">
            <div className='flex flex-row'>
                <div className='hidden lg:block w-1/6 animate-bounce-slow '>
                    <img className='' src=" https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"></img>
                </div>
                <h1 className="text-7xl lg:text-8xl font-mono font-bold ">JOIN US VIA
                <span className="pt-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500"> TWITTER</span></h1>
                <div className='hidden lg:block w-1/6 animate-bounce-slow'>
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png"></img>
                </div>
            </div>
            <p className=" text-2xl">Invest and manage all your crypto at one place.</p>
            <div>
                <a target="_blank" href="https://twitter.com/kobid_aryal">
                    <button style={{background: " linear-gradient(25deg, #2600fc, #ff00ea)"}}
                         className="p-6 mt-5 font-sans font-bold text-2xl rounded-3xl">Join via Twitter
                    </button>
                </a>
            </div>
        </div>
    )
}
export default Fourth;