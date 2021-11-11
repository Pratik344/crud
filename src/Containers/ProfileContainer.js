import Profile from "../Components/Profile";
import { connect } from "react-redux";
import { addToUserName } from "../Services/Action/Action";

const mapStateToProps = (state) => ({
    profileData:state.profileName.profileData
});

const mapDispatchToProps = (dispatch) => ({
    addToUserName: (data) => dispatch(addToUserName(data)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Profile)

// export default Profile;
