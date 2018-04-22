import React, { PureComponent } from "react";
import styles from "./ChatList.scss";
import ChatItem from "../ChatItem";

const messages = [
  {
    id: 0,
    user: 0,
    message: "test 0"
  },
  {
    id: 1,
    user: 1,
    message: "test 1"
  },
  {
    id: 2,
    user: 2,
    message: "test 2"
  },
  {
    id: 3,
    user: 3,
    message: "test 3"
  }
];

class ChatList extends PureComponent {
  render() {
    return (
      <div className={styles.chatListContainer}>
        <h4>Messages</h4>
        {messages.map((item) => <ChatItem key={item.id} />)}
      </div>
    );
  }
}

export default ChatList;
