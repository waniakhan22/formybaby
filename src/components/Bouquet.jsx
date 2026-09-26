function Bouquet({ bouquet, selected, onSelect, index }) {
  const rotation = index === 0 ? '-5deg' : index === 1 ? '2deg' : '6deg';

  return (
    <button
      type="button"
      className={`bouquet-piece ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(bouquet)}
      style={{
        transform: `rotate(${rotation}) translateY(${selected ? '-6px' : '0px'})`,
      }}
      aria-label={bouquet.name}
    >
      <span className="sparkle sparkle-1">✦</span>
      <span className="sparkle sparkle-2">❤</span>
      <img src={bouquet.image} alt={bouquet.name} className="bouquet-image" />
    </button>
  );
}

export default Bouquet;
