import React from 'react';
import { UserItemProps } from 'types/UserList';
import { createStyles } from './style';

interface UserItemPropsData {
  userData: UserItemProps
}

const UserItem = (props:UserItemPropsData): JSX.Element => {
  const {userData} = props;
  const classes = createStyles();

  return (
  <div className={classes.UserItem}>
    <p>{userData.name}</p>
    <div className={classes.AddInfo}>
      <span>{userData.creationDateTime}</span>
      <span>{userData.lastUpdateTime}</span>
    </div>
  </div>)
};

export default UserItem;
