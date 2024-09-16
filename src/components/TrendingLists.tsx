import ShowMoreButton from "./ShowMoreButton";
import { FaCog } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';

const trends = [
    { subtitle: 'Trending in Turkey',tag: '#SQUID', count: '2,066 Tweets' },
    { subtitle: 'Trending in Turkey',tag: '#SQUID', count: '2,066 Tweets' },
    { subtitle: 'Trending in Turkey',tag: '#SQUID', count: '2,066 Tweets' },
    { subtitle: 'Trending in Turkey',tag: '#SQUID', count: '2,066 Tweets' },
  ];
const TrendingLists = () => {
    return (

        <div className="mb-5 p-5 rounded-xl bg-[#202327]">
            <div className="flex justify-between items-center">
            <h2 className="text-white font-bold">Trends for you</h2>
            <FaCog className="text-gray-400 cursor-pointer" />
            </div>
            <div className="mt-2">
                {trends.map((trend, index) => (
                    <div key={index} className="text-gray-300">
                        <div className="flex justify-between items-center">

                            <div>
                                <div className="text-gray-500 text-sm">{trend.subtitle}</div>
                                <div>{trend.tag}</div>
                                <div className="text-gray-500 text-sm">{trend.count}</div>
                            </div>
                            <FaEllipsisH />
                            
                        </div>
                        <br/>
                    </div>
                ))}
                <ShowMoreButton/>
            </div>
      </div>
)};

export default TrendingLists;