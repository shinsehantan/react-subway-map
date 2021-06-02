import React from "react";
import PropTypes from "prop-types";
import { NavLink as RRDNavLink } from "react-router-dom";

const NavLink = ({ children, to, onClick }) => (
  <RRDNavLink
    onClick={onClick}
    to={to}
    activeClassName="bg-black bg-opacity-10 rounded-md"
    className="px-4 py-2 hover:font-semibold hover:bg-black hover:bg-opacity-10 hover:rounded-md"
  >
    {children}
  </RRDNavLink>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavLink.defaultProps = {
  onClick: null,
};

export default NavLink;
