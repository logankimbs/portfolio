import React from 'react'

function Header() {
    return (
        <header className='head'>
            <nav className='nav'>
                <div className='logo'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <g id="Group_3" data-name="Group 3" transform="translate(-24.748 -37.748)">
                                <circle id="Ellipse_1" data-name="Ellipse 1" cx="14" cy="14" r="14" transform="translate(28.748 41.748)" fill="#606c38"/>
                                <rect id="Rectangle_2" data-name="Rectangle 2" width="36" height="36" transform="translate(24.748 37.748)" fill="none"/>
                                <path id="Path_1" data-name="Path 1" d="M8.527,7.368a6,6,0,0,1,9.946,0l2.211,3.276A6,6,0,0,1,15.711,20H11.289c-3.3,0-3.439-.261-3.764-3.443-.113-1.007-2.054-4.662-1.209-5.914Z" transform="translate(53.748 42.748) rotate(90)" fill="#fff"/>
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
}

export default Header;
