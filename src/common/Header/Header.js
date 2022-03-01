import React from 'react';
import './header.css';

export default function Header() {
    return (
        <header className='main-header'>
            <div className='main-header-left'>
                <img className='github-logo' src={require('../../assets/github-logo.png')} alt='' />
                <input className='header-searchbar' type='text' placeholder='Search or jump to...' />
                <svg className='header-search-shash' xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" >
                    <path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path>
                    <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
                </svg>
                <a href='/'>Pull requests</a>
                <a href='/'>Issues</a>
                <a href='/'>Marketplace</a>
                <a href='/'>Explore</a>

            </div>

            <div className='main-header-right'>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-bell">
                    <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
                    <path fillRule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
                </svg>

                <details>
                    <summary>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-plus">
                            <path fillRule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
                        </svg>&nbsp;<span className="dropdown-caret"></span>
                    </summary>
                </details>
                <details>
                    <summary>
                        <img style={{borderRadius: '100%'}} className='profile-img' src="https://avatars.githubusercontent.com/u/91727830" alt="@SarathAdhi" size="20" height="20" width="20" data-view-component="true" />
                        &nbsp;<span className="dropdown-caret"></span>
                    </summary>
                    
                </details>
                
            </div>
        </header>
    )
}
