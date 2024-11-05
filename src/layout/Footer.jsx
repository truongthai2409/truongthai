
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="description h-[50px] bg-image ">
            <hr></hr>
            <div className='flex justify-center mt-3'>
                <h1 className="text-white text-xm">Copyright © {currentYear} By Truong Thai.</h1>
            </div>
        </footer>
    );
};

export default Footer;

