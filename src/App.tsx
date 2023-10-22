import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [CAPS, setCAPS] = useState(false);

  useEffect(() => {
    // Define the event handler inside the useEffect so it has access to current state
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault();
      }
      if (e.key === 'Backspace') {
        if (text.length > 0){
          setText(prevText => prevText.slice(0,-1))
        }
        return;
      }
      if (e.key === 'Alt' || e.key === 'Tab' || e.key === 'Meta' || e.key === 'Control' || e.key === "CapsLock"){
        return;
      }
      if (e.key === "Shift") {
        setCAPS(()=>true);
        return;
      }
      if (e.key === "Enter") {
        setText(prevText => prevText + '\n');
        return;
      }
      setText(prevText => prevText + (CAPS ? e.key.toUpperCase() : e.key));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setCAPS(()=>false);
      }
    }

    // Attach the event listener
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // Empty dependency array ensures this useEffect runs only once

  return (
    <>
      <p>
        {text.length > 0 ? `words:${text.split(' ').filter(string=>string!='').length}\nletters:${text.replaceAll(' ', '').length}` : 'start typing morning pages'}
      </p>
      <p>{text}</p>
    </>
  )
}

export default App;
