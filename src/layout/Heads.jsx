import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Element, Link } from 'react-scroll';


const Heads = () => {
    const [active, setActive] = useState('Home');
    const { t } = useTranslation('main');

    const setActiveItem = (itemName) => {
        setActive(itemName);
    };

    return (
        <Element name="Heads">
            <header>
                <nav className='flex h-20 border-none outline-none px-25 bg-image sm-max:hidden'>
                    <div className="mx-auto my-auto min-w-fit rounded-[80px] bg-indigo-50 outline-none">
                        <div className="navigation flex text-center justify-center align-center border-secondary rounded-[80px] text-xl">
                            <Link to="Home" smooth={true} duration={400} className={active === 'Home' ? 'button_nav button_nav_active' : 'button_nav'} onClick={() => setActiveItem('Home')}>{t('homeTL')}</Link>
                            <Link to="About" smooth={true} duration={600} className={active === 'About' ? 'button_nav button_nav_active' : 'button_nav'} onClick={() => setActiveItem('About')}>{t('aboutTL')}</Link>
                            <Link to="Projects" smooth={true} duration={700} className={active === 'Projects' ? 'button_nav button_nav_active' : 'button_nav'} onClick={() => setActiveItem('Projects')}>{t('projectTL')}</Link>
                            <Link to="Contact" smooth={true} duration={800} className={active === 'Contact' ? 'button_nav button_nav_active' : 'button_nav'} onClick={() => setActiveItem('Contact')}>{t('contactTL')}</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </Element>
    );
};

export default Heads;