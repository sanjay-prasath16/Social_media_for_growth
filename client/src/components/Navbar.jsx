import { CiSearch } from "react-icons/ci";
import { TiHome } from "react-icons/ti";
import { IoPeopleSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { pathname } = useLocation();
    const subPage = pathname.split('/')?.[1] || 'home';

    const getLinkClasses = (type) => {
        const isActive = subPage === type;
        let linkClasses = 'cursor-pointer flex flex-col items-center';
        let iconAndTextClasses = 'text-iconGray';

        if (isActive) {
            linkClasses += ' border-b-2 border-black';
            iconAndTextClasses = 'text-black';
        }

        return { linkClasses, iconAndTextClasses };
    };

    return (
        <div className="relative bg-white flex justify-between" style={{ height: '3.8rem' }}>
            <div className="flex pt-3">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-none rounded-md p-2 w-72 h-10 search outline-none ml-5 pl-8 mb-2 hidden navSearch:block"
                />
                <CiSearch className="absolute ml-7 text-lg" style={{ marginTop: '0.6rem' }} />
            </div>
            <div className="flex gap-10 mr-10">
                <Link to='/home' className={getLinkClasses('home').linkClasses}>
                    <TiHome className={`text-3xl mt-2 ${getLinkClasses('home').iconAndTextClasses}`} />
                    <span className={`text-sm ${getLinkClasses('home').iconAndTextClasses}`}>Home</span>
                </Link>
                <Link to='/connection' className={getLinkClasses('connection').linkClasses}>
                    <IoPeopleSharp className={`text-3xl mt-2 ${getLinkClasses('connection').iconAndTextClasses}`} />
                    <span className={`text-sm ${getLinkClasses('connection').iconAndTextClasses}`}>My Network</span>
                </Link>
                <Link to='/message' className={getLinkClasses('message').linkClasses}>
                    <AiFillMessage className={`text-2xl mt-3 ${getLinkClasses('message').iconAndTextClasses}`} />
                    <span className={`text-sm ${getLinkClasses('message').iconAndTextClasses}`}>Messaging</span>
                </Link>
                <Link to='/notification' className={getLinkClasses('notification').linkClasses}>
                    <IoNotifications className={`text-2xl mt-3 ${getLinkClasses('notification').iconAndTextClasses}`} />
                    <span className={`text-sm ${getLinkClasses('notification').iconAndTextClasses}`}>Notifications</span>
                </Link>
                <Link to='/profile' className={getLinkClasses('profile').linkClasses}>
                    <CgProfile className={`text-2xl mt-3 ${getLinkClasses('profile').iconAndTextClasses}`} />
                    <span className={`text-sm ${getLinkClasses('profile').iconAndTextClasses}`}>Me</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;