import TwitteInput from './TwitterInput';
import Bouton from './Bouton';

const TwitteEditorForm = () => {
    return (
        <div className="flex-1">
            <TwitteInput />
            <div className="tweet-editor-buttons">
                <div className="tweet-editor-actions">
                    <img src="../assets/Media.svg" alt="" />
                    <img src="../assets/Gif.svg" alt="" />
                    <img src="../assets/Poll.svg" alt="" /> 
                </div>
                <Bouton/>
            </div>
            
        </div>
    );
};

export default TwitteEditorForm;