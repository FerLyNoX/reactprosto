import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { dialogs } from '../../Data/dialogs';
import { messages } from '../../Data/messages';

function Dialogs(props) {
  /*    const dialogs = [
            {id: 1, name: 'Danya'},
            {id: 2, name: 'Taya'},
            {id: 3, name: 'Bogdan'},
            {id: 4, name: 'Ilya'}
        ]

        const messages = [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your React?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Yo!'}
        ] */

  const dialogsElements = dialogs
    .map((d) => <DialogItem name={d.name} id={d.id} />);

  const messagesElements = messages
    .map((m) => <Message message={m.message} />);
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
