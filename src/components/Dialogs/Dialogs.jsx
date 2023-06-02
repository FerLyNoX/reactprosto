import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { messages } from '../../Data/messages';

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
      </div>
    </div>

  );
}

export default Dialogs;
