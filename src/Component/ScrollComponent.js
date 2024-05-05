import MouseIcon from '../icons/mouse.svg';
import Line from '../icons/Line.svg';

function ScrollComponent() {
    return (
        <div className="flex flex-col items-center gap-4 py-10">
            <img src={MouseIcon} alt="mouse icon" className="mouse-icon"/>
            <img src={Line} alt="line" className="line"/>
        </div>
    );
}

export default ScrollComponent;