import Tweets from './Tweets';
import TwitteEditors from './TwitteEditors';
import Header from './Header';

const Timeline = () => {
    return (
        <div className="flex-none w-full max-w-[800px] mx-auto font-inter border-l border-r border-gray-800">
            <Header />
            <TwitteEditors />
            <Tweets />
        </div>
    );
};

export default Timeline;