import './ThemeChoice.css'

export default function ThemeChoice({pseudo, onSelect }) {
  return (
    <div className="screen content">
      <h1 className="selection-title">{pseudo}, par quoi souhaites-tu commencer?</h1>
      
      <div className="categories-list">
        
        {/* Catégorie Histoire */}
        <div className="category-item" onClick={() => onSelect('histoire')}>
          <img src="/assets/mascotte-reading.gif" alt="Histoire" className="category-img" />
          <p className="category-name">Histoire</p>
        </div>

        {/* Catégorie Science */}
        <div className="category-item" onClick={() => onSelect('science')}>
          <img src="/assets/mascotte-science.gif" alt="Science" className="category-img" />
          <p className="category-name">Science</p>
        </div>

        {/* Catégorie Culture */}
        <div className="category-item" onClick={() => onSelect('culture')}>
          <img src="/assets/mascotte-culture.gif" alt="Culture" className="category-img" />
          <p className="category-name">Culture</p>
        </div>

      </div>
    </div>
  );
}