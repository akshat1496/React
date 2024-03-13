import PropTypes from "prop-types"
function UserGreet(props){
    
   
    // if(props.isLoggedIn) {
    //     return <h2> Welcome {props.username}</h2>
    // }
    // else return <h2>Please Login to view this content</h2> 

    return (props.isLoggedIn ?  <h2 className="welcome-message">Welcome {props.username}</h2> :<h2 className="login-prompt">Please Log In</h2>)
}
export default UserGreet

UserGreet.propTypes = {
    username: PropTypes.string.isRequired, // Name prop is required and should be a string
    isLoggedIn: PropTypes.bool.isRequired, // Age prop is required and should be a number
    
  };
  UserGreet.defaultProps={
    isLoggedIn : false,
    username : 'Guest',
  };