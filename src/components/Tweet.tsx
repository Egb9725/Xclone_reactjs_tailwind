import React from 'react';
import Group from '../assets/Group.svg';
import Reply from '../assets/Reply.svg';
import Like from '../assets/Like.svg';
import Retweet from '../assets/Retweet.svg';
import Replies from '../assets/Tweet-Replies.svg';

interface TweetProps {
    image_profile: string;
    text_content: string;
    author: string;
    acro_author: string;
    time: string;
    image_tweet?: string; // image_tweet est optionnel
}

const Tweet: React.FC<TweetProps> = ({ image_profile, text_content, author, acro_author, time, image_tweet }) => {
    return (
        <div className="flex justify-start items-start gap-5 p-6 border-b border-gray-800">
            <img className="flex-none w-[70px]" src={image_profile} alt={`${author}'s profile`} />
            <div className="flex flex-col items-start justify-start gap-7 w-full">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-start items-start gap-2 text-base">
                        <h3 className="tweet-title-author">{author}</h3>
                        <img className="w-[1.2rem] h-auto" src={Group} alt="Group icon" />
                        <span className="text-[#6E767D]">{acro_author}</span>
                        <span className="text-[#6E767D]">.</span>
                        <span className="text-[#6E767D]">{time}</span>
                    </div>
                    <div className="text-[#D9D9D9] text-base">{text_content}</div>
                    {image_tweet && <img className="w-full pt-1.5" src={image_tweet} alt="" />}
                </div>
                <div className="flex justify-center items-center gap-20 text-gray-500 text-base">
                    <div className="flex items-center justify-center gap-5">
                        <img className="w-[1rem] h-auto text-[#2F3336]" src={Reply} alt="Reply icon" />
                        <span>57</span>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <img className="w-[1rem] h-auto text-[#2F3336]"src={Like} alt="Like icon" />
                        <span>144</span>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <img className="w-[1rem] h-auto text-[#2F3336]"src={Retweet} alt="Retweet icon" />
                        <span>80</span>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <img className="w-[1rem] h-auto text-[#2F3336]"src={Replies} alt="Replies icon" />
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweet;