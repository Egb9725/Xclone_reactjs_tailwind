import React from 'react';
import Avatar from './Avatar';
import TwitteEditorForm from './TwitterEditorForm';

const TwitteEditors: React.FC = () => {
    return (
        <div className="flex items-start justify-start gap-3 p-2 md:gap-5 md:p-1.5 pb-1 border-b border-[#2F3336]">
            <Avatar />
            <TwitteEditorForm />
        </div>
    );
};

export default TwitteEditors;