const Header = () => {
    return (
        <div className="p-4 md:p-6 flex items-center justify-between border-b border-gray-800">
            <div className="text-xl md:text-2xl font-bold">
                Home
            </div> 
            <div className="w-8 h-auto md:w-6">
                <img src="./assets/Timeline-Prop.svg" alt="Timeline Prop" />
            </div>
        </div>
    );
};

export default Header;