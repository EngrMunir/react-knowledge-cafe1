import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-auto border-b-2'>
            <h2 className="text-4xl font-bold">This is header</h2>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;