function Picture() {
    const imageUrl = "./src/assets/Profile.jpg";

    const handleClick  = () => console.log("Welcome");
    const handleDoubleClick =(e)=>e.target.style.display="none"
        return (
            <>
            <img onClick={handleClick} onDoubleClick={handleDoubleClick} src={imageUrl}></img>
            </>
        )
}
export default Picture;