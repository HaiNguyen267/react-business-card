

function Header({name, position, websiteUrl}) {
    return (
        <div className="Header">
            <h1 id="name">{name}</h1>
            <p id="position">{position}</p>
            <a id="website" href={websiteUrl}>{websiteUrl}</a>
            <div id="btn-container">
                <button id='email-btn'>
                    <i class="fa-solid fa-envelope"></i> 
                    Email
                </button>
                <button id='linkedin-btn'>
                    <i class="fa-brands fa-linkedin"></i>
                    Linkedin
                </button>
            </div>
        </div>
    )
}


export default Header