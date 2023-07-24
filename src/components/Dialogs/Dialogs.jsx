import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { messages } from '../../Redux/messages';
import React from "react";


const newMessageElement = React.createRef();

const newMessage = () => {
    const text = newMessageElement.current.value
    alert(text);
}
function Dialogs({ dialogs }) {
  const dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

  const messagesElements = messages.map((m) => <Message message={m.message} />);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
          <textarea ref={newMessageElement}> </textarea>
          <div className={s.button}>
          <button onClick={ newMessage }> Send message </button>
          </div>
      </div>
    </div>



  );
}

export default Dialogs;
