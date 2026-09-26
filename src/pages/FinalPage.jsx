import { useNavigate } from 'react-router-dom';
import './finalPage.css';

function FinalPage() {
  const navigate = useNavigate();

  return (
    <main className="final-page">
      <button type="button" className="detail-back" onClick={() => navigate('/next')}>
        ← Back
      </button>

      <div className="final-card">
        <img src="/last.jpeg" alt="Final love image" className="final-image" />
        <p className="final-message">safe journeyyyyy bachaaaa</p>
      </div>
    </main>
  );
}

export default FinalPage;
