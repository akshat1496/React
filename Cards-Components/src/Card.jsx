import ProfilePic from"./assets/Profile.jpg"
function Card() {
    return(
        <>
        <div className="card">
            <img className="card-image"src={ProfilePic} alt="profile picture"></img>
            <h2 className="card-title">AKSHAT SRIVASTAVA</h2>
            <p className="card-text"> Web Developer</p>
        </div>
        </>
        
    );
}

export default Card