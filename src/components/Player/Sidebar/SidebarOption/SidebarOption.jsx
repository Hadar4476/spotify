import React from 'react';

import classes from './SidebarOption.module.css';

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className={classes.SidebarOption}>
      {Icon && <Icon className={classes.Icon} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
