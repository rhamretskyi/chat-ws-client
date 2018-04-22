import React, { PureComponent } from "react";
import styles from "./ChatPage.scss";
import ChatList from "../ChatList";
import MessageInput from "../MessageInput";
import UserList from "../UserList";
import { w3cwebsocket } from "websocket";

class ChatPage extends PureComponent {
  componentDidMount() {
    var W3CWebSocket = w3cwebsocket;

    var client = new W3CWebSocket('ws://localhost:1337/', 'echo-protocol');
    console.log(client);
    client.onerror = function() {
        console.log('Connection Error');
    };
    
    client.onopen = function() {
        console.log('WebSocket Client Connected');
    
        function sendNumber() {
            if (client.readyState === client.OPEN) {
                var number = Math.round(Math.random() * 0xFFFFFF);
                client.send(number.toString());
                //setTimeout(sendNumber, 1000);
            }
        }
        sendNumber();
    };
    
    client.onclose = function() {
        console.log('echo-protocol Client Closed');
    };
    
    client.onmessage = function(e) {
      console.log(e)
        if (typeof e.data === 'string') {
            console.log("Received: '" + e.data + "'");
        }
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.chat}>
            <h4>Chat</h4>
            <ChatList />
          </div>
          <div className={styles.users}>
            <h4>Users</h4>
            <UserList />
          </div>
        </div>
        <div className={styles.row}>
            <MessageInput />
        </div>
      </div>
    );
  }
}

export default ChatPage;
