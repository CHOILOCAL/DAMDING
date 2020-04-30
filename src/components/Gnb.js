import React from "react";

import '../css/Gnb.css';
import { gnbVideo } from '../image/V20200106_122219000_C8CE4FD0-602E-4C45-809F-B9EB65EA4327.MP4';

const Gnb = () => (
    <div className={Gnb}>
        <div
            style={{
                width: 'auto',
                height: 'auto'
            }}>
            {/* <ResponsiveEmbed aspectRatio="16by9">
                <embed type="" src={{}}/>
            </ResponsiveEmbed> */
            }
            <div class="videowrapper">
            <video>
    <source src={{gnbVideo}} type="video/mp4" />
</video>
            {/* <iframe width="560" height="315" src={{gnbVideo}} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
        </div>
    </div>
)

export default Gnb;