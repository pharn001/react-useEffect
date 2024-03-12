import { useEffect } from 'react'
import './prop.css';

function Popup(props) {
    useEffect(() => {
        console.log("popup is starting");
        return () => {
            console.log("popup is end");
        }
    }, []);

  return <div className='notho' onClick={props.onPopupClose}/>  
}
export default Popup;
