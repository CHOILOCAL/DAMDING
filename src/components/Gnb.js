import React from "react";

import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'


const Gnb = () => (
    <div className={Gnb}>
        <div style={{ width: 'auto', height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
                <embed type="video/mp4" src="https://youtube/uXO0wBX2Qy8" />
            </ResponsiveEmbed>
            {/* <video controls autoplay loop>
                <source src="src/image/mongoliaMain.mp4" alt="src/image/logo.png" type="video/mp4"></source>
            </video> */}
        </div>
    </div>
)

export default Gnb;