import './ThemeChoice.css'

export default function ThemeChoice({ onSelect }) {
  return (
    /*HTML ici*/
    <div className="">
      <h2>Par quoi souhaites-tu commencer ?</h2>
      <button onClick={() => onSelect('histoire')}>📜 Histoire</button>
      <button onClick={() => onSelect('science')}>🧪 Science</button>
      <button onClick={() => onSelect('culture')}>🎨 Culture</button>
    </div>
  );
}