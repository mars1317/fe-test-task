import React, { useState } from 'react';
import { UserListProps } from 'types/UserList';
import UserItem from 'components/UserItem';
import Dropdown from 'components/Dropdown';
import { createStyles } from './style';

const UserList = (props: UserListProps): JSX.Element => {
  const {userData, dropdownData} = props;
  const classes = createStyles();

  return (
    <section className={classes.UserList}>
      <div>
        <h2>User information for insurance company</h2>
        {userData?.map( (user)=>
        <div key={user.name} className={classes.UserContainer}>
          <UserItem key={user.name + user.id+'2' + Math.random()} userData = {user}/>
          <Dropdown key={user.name + user.id+'3' + Math.random()} dropdownTitle={dropdownData.dropdownTitle} dropdownOptions={dropdownData.dropdownOptions} setDropdownTitle={dropdownData.setDropdownTitle}/>
        </div>
        )}
      </div>
    </section> 
  );
};

export default UserList;
