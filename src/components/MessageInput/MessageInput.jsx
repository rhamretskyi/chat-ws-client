import React, { PureComponent } from "react";
import styles from "./MessageInput.scss";

class MessageInput extends PureComponent {
  render() {
    return (
      <div className={styles.messsageInputContainer}>
        <div className={styles.messageInput}>
          <form action="">
            <textarea name="message" id="message" cols="50" rows="10" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default MessageInput;
