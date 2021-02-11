import React from "react";
import PropTypes from "prop-types";

const styles = {
  background: "orange",
  outline: "1px solid cyan",
};

const Panel = ({ title, children }) => (
  <div style={styles}>
    {/* paste prop(title) in a current component in App - render <h2>{title}</h2>... && or use(? :)*/}
    {title && <h2>{title}</h2>}

    {children}
  </div>
);

Panel.defaultProps = {
  title: "",
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
