import React, { PureComponent } from 'react';
import styles from "./ChatItem.scss";

class ChatItem extends PureComponent {
  render() {
    return <div className={styles.chatItemContainer}>Chat Item</div>;
  }
}

export default ChatItem;
