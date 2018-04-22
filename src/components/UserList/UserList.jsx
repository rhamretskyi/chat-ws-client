import React, { PureComponent } from "react";
import styles from './UserList.scss';

class UserList extends PureComponent {
  render() {
    return (
      <div className={styles.userListContainer}>
        <div>
          <h5>Online</h5>
        </div>
        <div>
          <h5>Offline</h5>
        </div>
      </div>
    );
  }
}

export default UserList;
