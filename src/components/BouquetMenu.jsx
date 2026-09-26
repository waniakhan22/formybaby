import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bouquet from './Bouquet';
import Decorations from './Decorations';

const bouquet1 = `${import.meta.env.BASE_URL}image/flower1.png`;
const bouquet2 = `${import.meta.env.BASE_URL}image/flower2.png`;

const bouquets = [
  {
    id: 1,
    name: 'Love Letter',
    image: bouquet1,
    route: '/love-letter',
    accent: '#d93f70',
  },
  {
    id: 2,
    name: 'Our Memories',
    image: bouquet2,
    route: '/our-memories',
    accent: '#ff9a8b',
  },
];

function BouquetMenu() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedBouquet = useMemo(
    () => bouquets[activeIndex] ?? bouquets[0],
    [activeIndex]
  );

  const handleSelect = (bouquet) => {
    const targetIndex = bouquets.findIndex((item) => item.id === bouquet.id);
    setActiveIndex(targetIndex >= 0 ? targetIndex : 0);
    navigate(bouquet.route);
  };

  const showNext = () => {
    navigate('/final-page');
  };

  return (
    <div className="bouquet-menu-page">
      <Decorations />

      <div className="bouquet-header">
        <span className="header-badge">Bouquets</span>
        <h1>Choose a bouquet</h1>
      </div>

      <div className="bouquet-row" aria-label="Bouquet menu">
        {bouquets.map((bouquet, index) => (
          <Bouquet
            key={bouquet.id}
            bouquet={bouquet}
            selected={index === activeIndex}
            onSelect={handleSelect}
            index={index}
          />
        ))}
      </div>

      <button type="button" className="next-arrow" onClick={showNext} aria-label="Next bouquet">
        &gt;
      </button>

      <div className="bouquet-caption">
        <span>{selectedBouquet.name}</span>
      </div>

      <button type="button" className="bottom-next-button" onClick={showNext}>
        Next
      </button>
    </div>
  );
}

export default BouquetMenu;
