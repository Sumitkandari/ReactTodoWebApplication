import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { connect } from "react-redux";

const Navbar = ({ todos }) => {
 
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>{" "}
          <span className="nav-noti">{todos.length}</span>
        </li>
        <li>
          <Link to="/favourite" className="nav-link">
            Favourite
          </Link>
          <span className="nav-noti-fav">
            {
              todos.filter((data, index) => {
                if (data.favourite) return data;
              }).length
            }
          </span>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { todos: state.todos };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
{
  /* <li><Link  className='nav-link' to="/">Home</Link></li>
                <li><Link   className='nav-link' to="/favourite">Favourite</Link></li> */
}
