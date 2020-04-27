import React from "react";

import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

// import gnbVideo from '../image/mongoliaMain.mp4';
// import gnbGif from '../image/ezgif.com-video-to-gif.gif';

const Gnb = () => (
    <div className={Gnb}>
        <div style={{ width: 'auto', height: 'auto' }}>
            {/* <ResponsiveEmbed aspectRatio="16by9">
                <embed type="" src={{}}/>
            </ResponsiveEmbed> */}

            <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=OAYuMygPkbI&feature=youtu.be&list=RDOAYuMygPkbI" />
</div>

            {/* <video controls autoplay loop>
                <source src="src/image/mongoliaMain.mp4" alt="src/image/logo.png" type="video/mp4"></source>
            </video> */}
        </div>
    </div>
)

export default Gnb;