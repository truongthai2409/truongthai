// // import React from 'react';

// import { Link } from 'react-scroll';

// export default function ButtonTop()  {
//     return (
//         <div className='absolute bottom-5 right-5'>
//             <Link to="Heads" smooth={true} duration={900}> top
//                 <span>
//                     <iframe src="https://lottie.host/embed/7162dde6-ac05-433a-af3d-0e69e349979c/1OuP5fr0f7.json"></iframe>
//                 </span>
//             </Link>
//         </div>
//     );
// }

 
import { animateScroll as scroll } from 'react-scroll';

// Hàm để di chuyển đến vị trí đầu trang
const scrollToTop = () => {
    scroll.scrollToTop({
        duration: 900, // Thời gian di chuyển (milliseconds)
        smooth: true // Di chuyển mượt
    });
};

const ButtonTop = () => {
    return(
        <div onClick={scrollToTop} className='fixed z-10 cursor-pointer -right-20 bottom-1'>
            <span className='absolute z-10 w-[300px] h-[150px] opacity-0'>top</span>
            <iframe className='' src="https://lottie.host/embed/7162dde6-ac05-433a-af3d-0e69e349979c/1OuP5fr0f7.json"></iframe>
        </div>
    );
}

export default ButtonTop;