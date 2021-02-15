import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="c3486a37-7127-4111-a94c-d2331b7d29f9"
      userName="arynkr"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
