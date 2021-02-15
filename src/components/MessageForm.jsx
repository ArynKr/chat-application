import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageFrom = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = () => {};

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };
  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        className="message-input"
        placeholder="Send a message ... "
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default MessageFrom;
