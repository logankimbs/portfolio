import React, { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers';

function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const headerStyles = {
        backgroundColor: 'white'
    };

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <header
            className={'head'}
            style={{...headerStyles, top: visible ? '0' : '-100px' }}
        >
            <nav className='nav'>
                <div className='logo'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 36 36">
                            <g id="Group_17" data-name="Group 17" transform="translate(-271 -187)">
                                <rect id="Rectangle_6" data-name="Rectangle 6" width="36" height="36" transform="translate(271 187)" fill="none"/>
                                <g id="Group_15" data-name="Group 15" transform="translate(274.511 190.601)">
                                <g id="Group_14" data-name="Group 14" transform="translate(0.489 0.399)">
                                    <path id="Path_2" data-name="Path 2" d="M26.243,5.9a6.884,6.884,0,0,0-5.48-3.722c-1.229-.093-2.462.168-3.692.114-1.211-.054-2.393-.411-3.6-.431A7.357,7.357,0,0,0,9.61,2.933a6.49,6.49,0,0,0-1.234.948,2.535,2.535,0,0,0-.962.611C6.306,5.7,7.286,7.827,6.228,9.076a6.351,6.351,0,0,1-1.917,1.156A4.5,4.5,0,0,0,1.989,13.9a4.469,4.469,0,0,0,2,3.838c.752.5,1.642.772,2.4,1.259,1.832,1.178,2.625,3.388,4.257,4.809,1.565,1.364,3.727,1.863,5.789,2.314a31.8,31.8,0,0,0,4.882.806,5.58,5.58,0,0,0,2.639-.343,3.934,3.934,0,0,0,2.135-3.09,7.58,7.58,0,0,0-.646-3.773,8.633,8.633,0,0,1-.806-2.562c-.109-1.682,1.031-3.167,1.7-4.726A7.82,7.82,0,0,0,26.243,5.9Zm-6.419,6.6a3.021,3.021,0,0,1-.379,1.382,5.992,5.992,0,0,1-.477,1c-.074.114-.146.226-.208.346a5.377,5.377,0,0,1-.039,2.229,5.22,5.22,0,0,1-2.393,3.087,5.355,5.355,0,0,1-4.012.521,5.5,5.5,0,0,1-2.9-2.019,6.631,6.631,0,0,1-1.193-.91,6.612,6.612,0,0,1-1.886-4.447A5.707,5.707,0,0,1,9.188,8.8a7.8,7.8,0,0,1,.986-.465,5.828,5.828,0,0,1,.768-1.066,5.28,5.28,0,0,1,3.681-1.514,3.944,3.944,0,0,1,2.005.445A3.908,3.908,0,0,1,18.306,7.27a5.318,5.318,0,0,1,1.514,3.388,5.807,5.807,0,0,1,.1.933A6.529,6.529,0,0,1,19.824,12.5Z" transform="translate(-0.489 -0.399)" fill="#606c38"/>
                                    <g id="Group_13" data-name="Group 13">
                                    <path id="Path_3" data-name="Path 3" d="M27.535,5.148a8.492,8.492,0,0,0-6.8-4.474c-1.71-.121-3.344.2-5.057-.059a10.237,10.237,0,0,0-5,.188A15.1,15.1,0,0,0,6.942,2.942,4.332,4.332,0,0,0,5.287,6.627c-.02.417.075,1.069-.18,1.427-.369.518-1.336.716-1.862,1.058a6.123,6.123,0,0,0-2.55,3.465c-.823,2.991.921,5.73,3.575,7.033a7.387,7.387,0,0,1,3.007,2.458,14.07,14.07,0,0,0,2.9,3.286c2.467,1.815,5.951,2.366,8.917,2.824,3.059.473,6.452.442,7.953-2.749a7.1,7.1,0,0,0,.269-4.911c-.512-1.9-1.61-3.2-.738-5.168a17.356,17.356,0,0,0,1.838-4.932,9.422,9.422,0,0,0-.879-5.27c-.84-1.8-3.522-.235-2.686,1.559,1.19,2.554.137,4.754-.958,7.084a7.149,7.149,0,0,0-.851,3.359c.068,1.423.818,2.644,1.214,3.983a3.932,3.932,0,0,1-.135,3.213c-.752,1.212-2.254,1.068-3.5.94a25.385,25.385,0,0,1-7.384-1.72c-2.21-.98-3.045-3.1-4.625-4.759a8.574,8.574,0,0,0-2.595-1.781A3.6,3.6,0,0,1,3.649,14.6C3.081,11.774,6.356,11.6,7.607,9.874a4.945,4.945,0,0,0,.772-2.745A3.718,3.718,0,0,1,8.5,5.754c.205-.4.909-.708,1.287-1.008a5.842,5.842,0,0,1,3.685-1.3c1.52.024,2.973.481,4.508.422,1.464-.057,2.882-.319,4.266.312a5.6,5.6,0,0,1,2.6,2.526C25.8,8.459,28.482,6.9,27.535,5.148Z" transform="translate(-0.489 -0.399)" fill="#606c38"/>
                                    <path id="Path_4" data-name="Path 4" d="M17.617,12.155a1.959,1.959,0,0,1-.16.581,8.413,8.413,0,0,0-.835,1.857,15.241,15.241,0,0,1-.04,2.068,3.011,3.011,0,0,1-.823,1.364,3.566,3.566,0,0,1-5.344-.3c-.446-.538-1.074-.841-1.547-1.361a4.534,4.534,0,0,1-.885-1.478A4.082,4.082,0,0,1,7.99,11.73a4.381,4.381,0,0,1,2.259-2.155,2.076,2.076,0,0,0,1.024-.9,3.505,3.505,0,0,1,.539-.681,3.277,3.277,0,0,1,1.569-.76c2.718-.611,4.655,1.993,4.29,4.527A1.549,1.549,0,0,0,18.718,13.6a1.509,1.509,0,0,0,1.845-1.047C21,9.488,19.9,6.066,16.856,4.774a6.574,6.574,0,0,0-4.608-.35A6.254,6.254,0,0,0,8.555,7.371l.9-.689A7.285,7.285,0,0,0,4.68,12.758a7.791,7.791,0,0,0,3.683,7.025l-.539-.538a6.657,6.657,0,0,0,7.558,2.516A6.917,6.917,0,0,0,18.7,19.147a6.4,6.4,0,0,0,.842-4.753l-.151,1.155a9.015,9.015,0,0,0,1.226-3.394,1.508,1.508,0,0,0-1.5-1.5A1.539,1.539,0,0,0,17.617,12.155Z" transform="translate(-0.114 -0.399)" fill="#606c38"/>
                                    </g>
                                </g>
                                <path id="Path_5" data-name="Path 5" d="M8.082,3.648" transform="translate(0.279)" fill="none" stroke="#606c38" stroke-miterlimit="10" stroke-width="1"/>
                                <path id="Path_6" data-name="Path 6" d="M7.777,3.9" transform="translate(0.267)" fill="none" stroke="#606c38" stroke-miterlimit="10" stroke-width="1"/>
                                <path id="Path_7" data-name="Path 7" d="M8.193,3.509" transform="translate(0.283)" fill="none" stroke="#606c38" stroke-miterlimit="10" stroke-width="1"/>
                                <path id="Path_8" data-name="Path 8" d="M10.741,2.261a3.1,3.1,0,0,0-1.617.491A9.238,9.238,0,0,0,7.778,3.807a1.337,1.337,0,0,0-.258.279,1.332,1.332,0,0,0,.021,1.079" transform="translate(0.29)" fill="none" stroke="#606c38" stroke-miterlimit="10" stroke-width="1"/>
                                <path id="Path_9" data-name="Path 9" d="M9.3,2.654a2.92,2.92,0,0,0,.869-.254c.145-.078.276-.181.427-.248a1.752,1.752,0,0,1,.464-.12,6.429,6.429,0,0,1,2.561.137" transform="translate(0.385)" fill="none" stroke="#606c38" stroke-miterlimit="10" stroke-width="1"/>
                                <path id="Path_10" data-name="Path 10" d="M10.521,2.175a.615.615,0,0,0-.576.395" transform="translate(0.355)" fill="none" stroke="#606c38" stroke-miterlimit="10" stroke-width="1"/>
                                <path id="Path_11" data-name="Path 11" d="M10.548,2.124" transform="translate(0.369)" fill="none" stroke="#606c38" stroke-miterlimit="10" stroke-width="1"/>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <div className='menu'>
                    <div>
                        <button className='ham'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                <g id="Group_2" data-name="Group 2" transform="translate(-325.591 -37.591)">
                                    <rect id="Boundary" width="36" height="36" transform="translate(325.591 37.591)" fill="none"/>
                                    <path id="_Color" data-name=" ↳Color" d="M27,18H0V15H27v3Zm0-7.5H0v-3H27v3ZM27,3H0V0H27V3Z" transform="translate(330.591 46.591)" fill="#606c38"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;