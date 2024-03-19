import { Fragment, useState } from 'react';
import { Element, Link } from 'react-scroll';

const Heads = () => {
    const [active, setActive] = useState('Home');

    const setActiveItem = (itemName) => {
        setActive(itemName);
    };

    return (
        <Fragment>
            <Element name="Heads">
                <header>
                    <nav className='flex h-20 border-none outline-none px-25 bg-image'>
                        <div className="mx-auto my-auto min-w-fit rounded-[80px] bg-indigo-50 outline-none">
                            <div className="navigation flex text-center justify-center align-center border-secondary rounded-[80px] text-xl">
                                <Link to="Home" smooth={true} duration={400} className={active === 'Home' ? 'button_nav button_nav_active' : 'button_nav'} onClick={() => setActiveItem('Home')}>Home</Link>
                                <Link to="About" smooth={true} duration={600} className={active === 'About' ? 'button_nav button_nav_active' : 'button_nav'} onClick={() => setActiveItem('About')}>About</Link>
                                <Link to="Projects" smooth={true} duration={700} className={active === 'Projects' ? 'button_nav button_nav_active' : 'button_nav'} onClick={() => setActiveItem('Projects')}>Projects</Link>
                                <Link to="Contact" smooth={true} duration={800} className={active === 'Contact' ? 'button_nav button_nav_active' : 'button_nav'} onClick={() => setActiveItem('Contact')}>Contact</Link>
                            </div>
                        </div>
                    </nav>
                </header>
            </Element>
        </Fragment>
    );
};

export default Heads;