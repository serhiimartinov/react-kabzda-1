import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./MessageItem/messageItem";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ));
  
  let newDialogsElement = React.createRef();

  let addDialogsElement = () =>{
      
      let text = newDialogsElement.current.value;
      alert(text)

  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.senderBlok}>
          <textarea ref={newDialogsElement} rows="1"></textarea>
          <button onClick={addDialogsElement}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
