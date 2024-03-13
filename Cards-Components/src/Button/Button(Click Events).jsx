
function Button() {
   
    // const styles = {
    //     backgroundColor: "hsl(0, 100%, 51%)",
    //     color: "hsl(0%, 10%, 10%)",
    //     padding: "10px 20px",
    //     borderRadius: "5px",
    //     border: "none",
    //     cursor: "pointer",
    //     boxShadow: "5px 5px 5px black",
    //   }

    // const handleClick = () =>{console.log("Welcome")}
    // const handleClick2 = (name) =>{console.log(`Welcome ${name}`)}
    
    const handleClick = (e)=>e.target.textContent = "Bhakk MADARCHOD" // e is a event quantity that shows how many event can be done using e when we output console.log(e).
    return(
        <>
        {/* <button style={styles}>  */}
        {/* <button onClick={handleClick2("Akshat")}> //--> If we use parenthesiis for giving parameter then we must use ARROW FUNCTION to run only when the click is activated otherwise It will run before clicking */}

        {/* <button className = "Button"onClick={(e)=>handleClick(e)}>
        Click Me
        </button> */}

        <button className = "Button"onClick={(e)=>handleClick(e)}>
        Click Me
        </button>
        </>
    );
}

export default Button;