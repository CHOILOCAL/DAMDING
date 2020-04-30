import React from "react";

import '../css/Gnb.css';
import {gnbVideo} from '../image/담딩투어.mp4';

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
                    <source
                        src={{gnbVideo}}
                        type="video/mp4"/>
                </video>
                {/*  <iframe width="560" height="315" src={{gnbVideo}} frameborder="0" allow="acc
 * elerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfu
 * llscreen></iframe> 
 */
                }
            </div>
        </div>
    </div>
)

export default Gnb;