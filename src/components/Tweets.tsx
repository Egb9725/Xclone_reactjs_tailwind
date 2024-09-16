import React from 'react';
import Tweet from './Tweet';
import Image from '../assets/tweet-profile-photo.png';
import Image2 from '../assets/twitter.svg';
import Image3 from '../assets/image 1.svg';
import Image4 from '../assets/tweet-image.png';

const Tweets: React.FC = () => {
    return (
        <div className="tweets">
            <Tweet
                image_profile={Image}
                text_content="President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis"
                author="CNN"
                acro_author="@CNN"
                time="7m"
            />
            <Tweet
                image_profile={Image3}
                image_tweet={Image4}
                text_content="President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis"
                author="CNN"
                acro_author="@CNN"
                time="7m"
            />
            <Tweet
                image_profile={Image2}
                text_content="Crisis"
                author="CNN"
                acro_author="@CNN"
                time="7m"
            />
            <Tweet
                image_profile={Image2}
                text_content="Crisis"
                author="CNN"
                acro_author="@CNN"
                time="7m"
            />
        </div>
    );
};

export default Tweets;