import React from 'react';
import { Button } from 'semantic-ui-react';
import '../../css/Naviage.css';

const Navigate = ({onClick, postId, disabled}) => (
    <div className="Navigate">
        <div className="NavigateLeftButton">
        <Button
            color="teal"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
            onClick={() => onClick('PREV')}
            disabled={disabled}
            className="Navigate-left-button"
        />
        </div>
        <div className="Navigate-page-num">
            {postId}
        </div>
        <div className="NavigateRightButton">
        <Button
            color="teal"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            onClick={() => onClick('NEXT')}
            disabled={disabled}
            className="Navigate-right-button"
        />
        </div>
    </div>
);

export default Navigate;