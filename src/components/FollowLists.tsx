// import { FaTwitter } from 'react-icons/fa';
import ShowMoreButton from "./ShowMoreButton";


const followSuggestions = [
  { avatar:'https://res.cloudinary.com/doq50mquo/image/upload/v1726137392/pv34i2hyneahgbsk65g1.png',name: 'The New York Times', username: '@nytimes', profileUrl: 'https://twitter.com/nytimes' },
  { avatar:'https://res.cloudinary.com/doq50mquo/image/upload/v1726137392/dwkn8nuql4x2ez28ptom.png',name: 'CNN', username: '@CNN', profileUrl: 'https://twitter.com/CNN' },
  { avatar:'https://res.cloudinary.com/doq50mquo/image/upload/v1726137392/mmwhrrbh5lgtba2scvvy.png',name: 'Twitter', username: '@Twitter', profileUrl: 'https://twitter.com/Twitter' },
];

const FollowLists: React.FC = () => {
  return (
    <div className='mb-5 p-5 rounded-xl bg-[#202327]'>
      <h2 className="text-white font-bold">Who to follow</h2>
      <div className="mt-2">
        {followSuggestions.map((user, index) => (
          <div key={index} className="flex justify-between items-center text-gray-300 mb-3">
            <a href={user.profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400">
              {/* <FaTwitter className="text-blue-400 mr-2" /> */}
              <div>
                
                <div>{user.name}</div>
                <div className="text-gray-500">{user.username}</div>
              </div>
            </a>
            <button className="text-blue-400 bg-white rounded-full px-2 py-1 hover:bg-blue-100 transition">Follow</button>
          </div>
        ))}
        <ShowMoreButton />
      </div>
    </div>
  );
};

export default FollowLists;