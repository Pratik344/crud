import Profile from "../Components/Profile";
import { connect } from "react-redux";
import {addToCart} from "../Services/Action/addToCartAction";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler:data=>dispatch(addToCart(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// export default Profile;
