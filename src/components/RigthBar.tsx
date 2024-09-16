import SearchInput from './SearchInput';
import { AiOutlineSearch } from 'react-icons/ai';
import FollowLists from './FollowLists';
import TrendingLists from './TrendingLists';



const RightBar = () => {
  return (
    <div className="w-[400px] bg-black p-5 shadow-lg right-0 top-0 h-full overflow-y-auto">

      {/* Search Input */}
      <div className="flex items-center mb-5 bg-[#202327] rounded-2xl p-2">
        <AiOutlineSearch className="text-gray-400 mr-2" />
        <SearchInput />
      </div>

      {/* Trends Section */}
        <TrendingLists/>

      {/* Who to Follow Section */}
        <FollowLists/>
      
    </div>
  );
};

export default RightBar;