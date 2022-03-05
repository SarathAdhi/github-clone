import React, { useState } from 'react';
import './home.css'

export default function Home() {
    const repos = [
        "SarathAdhi/helperdoc", "SarathAdhi/SarathAdhi",  "SarathAdhi/Book_recomendation_website",
        "SarathAdhi/My_Discord_BOT", "SarathAdhi/My_Folio_Netify",
        "SarathAdhi/20BRS1194-Design-O-Flex", "SarathAdhi/Quiz_js_API", "Codes-Info/Codes-Info-Main",
        "SarathAdhi/codesInfo", "SarathAdhi/codes-info-api",
        "SarathAdhi/Automatic_Irrigation_System", "SarathAdhi/Robotic-car-with-object-detection",
        "SarathAdhi/code_chef_codes", "SarathAdhi/Age-Finder-Website",
        "SarathAdhi/send_whatsapp_msg_using_python",
        "SarathAdhi/WebD-Dyeus", "SarathAdhi/Face-Detection-tensorFlow.js", "SarathAdhi/20BRS1194",
        "SarathAdhi/Graphical-password", "SarathAdhi/vishaal-project",
        "SarathAdhi/WiFi-Hack", "SarathAdhi/My_AI",
        "SarathAdhi/DSA", "SarathAdhi/Book-Your-Slot-Server",
        "SarathAdhi/Zoho_questions", "SarathAdhi/Graphical_Password_App",
        "SarathAdhi/SJPS-School-Website", "SarathAdhi/20BRS1194",
    ];

    const [showAllRepo, setShowAllRepo] = useState(false);

    const activity = [
        {
            url: "https://avatars.githubusercontent.com/u/74726836",
            userName: "vjk743_5",
            orgName: "Vijesh Kumar",
            profile: "Full Satck Developer | ReactJS",
            repo: "10 repositories",
            followers: "15 followers"

        },
        {
            url: "https://avatars.githubusercontent.com/u/98220011",
            userName: "Alex_Inferno",
            orgName: "Alex",
            profile: "Android App Developer",
            repo: "19 repositories",
            followers: "20 followers"
        },
    ];

    const exploreRepo = [
        {
            title: "Python-World/python-mini-projects",
            info: "A collection of simple python mini projects to enhance your python skills",
            lang: "Python",
            star: "9.4k"
        },
        {
            title: "jackfrued/Python-100-Days",
            info: "Python - 100天从新手到大师",
            lang: "Python",
            star: "115k"
        },
        {
            title: "yznpku/HackerRank",
            info: "HackerRank Solutions in Python3",
            lang: "Python",
            star: "137"
        },
    ];

    return (
        <div className='home-container'>

            <div className='home-left'>
                <div className='home-left-top'>
                    <a href='/'><img style={{borderRadius: '100%'}} src="https://avatars.githubusercontent.com/u/91727830" alt="@SarathAdhi" size="20" height="20" width="20" data-view-component="true" />
                    &nbsp;&nbsp;SarathAdhi&nbsp;<span className="dropdown-caret"></span></a>
                </div>
                <hr className='line1' />
                <div className='home-left-recent-repo'>
                    <h5>Recent Repositories</h5>
                    <button>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        &nbsp;New
                    </button>
                </div>
                <input className='find-repo-searchbar' type='text' placeholder='Find a repository...' />
                <div className='home-left-all-repos'>
                    {repos.map((element, index) => {
                        if(index<7){
                            return (
                                <a href='/' className='home-left-sub-repos'>
                                    <img style={{borderRadius: '100%'}} src="https://avatars.githubusercontent.com/u/91727830" alt="@SarathAdhi" size="20" data-view-component="true" />
                                    {element}
                                </a>
                            )
                        }else{
                            return null;
                        }
                    })}
                    <button className='show-more-btn'
                    onClick={() => {
                            setShowAllRepo(!showAllRepo);
                            document.querySelector('.show-more-btn').style.display = 'none';
                        }
                    }
                    >
                        Show more
                    </button>

                    {showAllRepo && repos.map((element, index) => {
                        if(index>7){
                            return (
                                <a href='/' className='home-left-sub-repos'>
                                    <img style={{borderRadius: '100%'}} src="https://avatars.githubusercontent.com/u/91727830" alt="@SarathAdhi" size="20" data-view-component="true" />
                                    {element}
                                </a>
                            )
                        }else{
                            return null;
                        }
                        
                    })}
                </div>
                <hr className='line1' style={{marginTop: '5px'}}/>

                <div className='home-left-recent-activity'>
                    <h5>Recent activity</h5>
                    <p>When you take actions across GitHub, we'll provide links to that activity here.</p>
                </div>

            </div>
            
            <div className='home-right'>
                <div className='home-right-left'>
                    <p>All activity</p>
                    <div className='home-right-left-top'>
                        {activity.map((element, index) => {
                            return(
                                <div className='home-activity'>
                                    <div className='home-activity-details-title'>
                                        <img style={{borderRadius: '100%'}} src={element.url} size="20" width='30px' alt='' />
                                        <h4>{element.userName} started following you</h4>
                                        <p>{index+5} days ago</p>
                                    </div>
                                    <div className='home-activity-details'>
                                        <img style={{borderRadius: '100%', marginRight: '10px'}} src={element.url} size="20" width='40px' alt='' />
                                        <div>
                                            <div>
                                                <h4>{element.userName}&emsp;</h4>
                                                <p>{element.orgName}</p>
                                            </div>
                                            <h5>{element.profile}</h5>
                                            <div>
                                                <p>{element.repo}</p>&emsp;&nbsp;
                                                <p>{element.followers}</p>
                                            </div>
                                        </div>
                                        <button>Follow</button>
                                    </div>
                                    <hr className='line2' />
                                </div>
                            )
                        })}
                    </div>
                    <div className='home-right-left-bottom'>
                        <p>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                <path fillRule="evenodd" d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"></path>
                            </svg>
                            <strong>&nbsp;ProTip!</strong>&nbsp;The feed shows you events from people you and repositories you watch or star.
                        </p>
                        <a href='/'>
                            <p>
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-rss mr-1">
                                    <path fillRule="evenodd" d="M2.002 2.725a.75.75 0 01.797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 11-1.497.098 10.502 10.502 0 00-9.776-9.776.75.75 0 01-.7-.798zM2 13a1 1 0 112 0 1 1 0 01-2 0zm.84-5.95a.75.75 0 00-.179 1.489c2.509.3 4.5 2.291 4.8 4.8a.75.75 0 101.49-.178A7.003 7.003 0 002.838 7.05z"></path>
                                </svg>
                                &nbsp;Subscribe to your news feed</p>
                        </a>
                    </div>
                </div>
                <div className='home-right-right'>
                    <div className='home-right-right-top'>
                        <h3>Welcome to GitHub Global Campus!</h3>
                        <p>Prepare for a career in tech by joining GitHub Global Campus. Global Campus will help you get the practical industry knowledge you need by giving you access to industry tools, events, learning resources and a growing student community.</p>
                        <button>Go to Global Campus</button>
                    </div>
                    <div className='home-right-right-bottom'>
                        <h5>Explore repositories</h5>

                        {exploreRepo.map((element) => {
                            return(
                                <div>
                                    <h5>{element.title}</h5>
                                    <p>{element.info}</p>
                                    <div>
                                        <span className="repo-language-color"></span>
                                        <p>{element.lang}</p>&emsp;&emsp;
                                        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star">
                                            <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                        </svg>&nbsp;
                                        <p>{element.star}</p>
                                    </div>
                                    <hr className='line3' />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}
