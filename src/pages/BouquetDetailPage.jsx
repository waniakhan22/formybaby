import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import './bouquetDetail.css';

const bouquetDetails = {
  'love-letter': {
    title: 'Love Letter',
    text: 'A soft message to say all the things my heart keeps whispering.',
    color: '#d93f70',
  },
  'our-memories': {
    title: 'Our Memories',
    text: 'Every bloom here carries a little piece of the moments we have shared.',
    color: '#ff8b73',
  },
  'why-i-love-you': {
    title: 'Why I Love You',
    text: 'Because your kindness, laughter, and love make every day feel brighter.',
    color: '#b576ff',
  },
};

const youtubeVideoUrl = 'https://www.youtube.com/embed/GxldQ9eX2wo?si=yk782QRZd5wsvC1G';

const loveReasons = [
  {
    title: 'Your smile',
    message: 'Your smile softens my whole world. It makes even the hardest days feel lighter, and I never get tired of seeing it.',
  },
  {
    title: 'Your voice',
    message: 'Your voice feels like home to me. It comforts me, makes me laugh, and somehow makes every moment more beautiful.',
  },
  {
    title: 'The way you care',
    message: 'The way you care is one of the most beautiful things about you. You notice the little things and make me feel seen.',
  },
  {
    title: 'How you make me feel safe',
    message: 'With you, I feel calm, protected, and at peace. You make my heart feel safe in a way I never knew I needed.',
  },
  {
    title: 'Your stupid jokes',
    message: 'Your silly jokes are ridiculous, and I love them. You make me laugh in the best way and somehow turn ordinary moments into memories.',
  },
  {
    title: 'Simply... YOU',
    message: 'Most of all, I love you because you are you. My favorite person, my favorite place, and the sweetest part of my life.',
  },
];

function BouquetDetailPage() {
  const { bouquet } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const details = bouquetDetails[bouquet] || bouquetDetails['love-letter'];
  const isLoveLetter = location.pathname === '/love-letter' || bouquet === 'love-letter';
  const isMemoryPage = location.pathname === '/our-memories' || bouquet === 'our-memories';
  const reasonSectionRef = useRef(null);
  const [selectedReason, setSelectedReason] = useState('Your smile');
  const [showReasons, setShowReasons] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const openReasons = () => {
    setShowReasons(true);
    setTimeout(() => {
      reasonSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  const activeReason = loveReasons.find((item) => item.title === selectedReason) || loveReasons[0];

  if (isMemoryPage) {
    return (
      <main className="detail-page memory-page" style={{ '--detail-color': details.color }}>
        <button type="button" className="detail-back" onClick={() => navigate('/next')}>
          ← Back
        </button>

        <button type="button" className="memory-next" onClick={() => navigate('/love-letter')} aria-label="Next bouquet">
          &gt;
        </button>

        <div className="memory-scene">
          <span className="paper-star star-one">✦</span>
          <span className="paper-star star-two">✦</span>
          <span className="paper-star star-three">✦</span>
          <span className="paper-star star-four">✦</span>
          <span className="paper-star star-five">✦</span>

          <div className="memory-player-wrap">
            <p className="memory-label">our little soundtrack</p>
            <h2>Until I Found You</h2>
            <p className="memory-subtitle">Stephen Sanchez ft. Em Beihold</p>

            <div className="music-embed-frame">
              <iframe
                src={youtubeVideoUrl}
                title="Until I Found You"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="bunny-sticker" aria-label="Pink bunny sticker">
            <span>🐰</span>
          </div>
        </div>
      </main>
    );
  }

  if (!isLoveLetter) {
    return (
      <main className="detail-page" style={{ '--detail-color': details.color }}>
        <button type="button" className="detail-back" onClick={() => navigate('/next')}>
          ← Back
        </button>
        <div className="detail-card">
          <span className="detail-badge">Bouquet</span>
          <h1>{details.title}</h1>
          <p>{details.text}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page love-letter-page" style={{ '--detail-color': details.color }}>
      <button type="button" className="detail-back" onClick={() => navigate('/next')}>
        ← Back
      </button>

      <div className="scrapbook-shell">
        <section className="scrapbook-hero">
          <div className="hero-copy">
            <span className="detail-badge">for my favorite person</span>
            <h1>My favorite little boy</h1>
            <p>
              Don’t feel sad if you miss home or feel alone there. I’m just one call away, baby. Enjoy your journey and take care of yourself 🤍
            </p>
          </div>

          <button type="button" className="photo-trigger" onClick={openReasons} aria-label="Open love scrapbook">
            <img src={`${import.meta.env.BASE_URL}irtaza.jpeg`} alt="Irtaza" />
          </button>
        </section>

        <section ref={reasonSectionRef} className={`reason-section ${showReasons ? 'is-visible' : ''}`}>
          <div className="section-heading">
            <span className="mini-tag">little things</span>
            <h2>Reasons why I love you ♡</h2>
          </div>

          <div className="reason-grid">
            {loveReasons.map((reason) => (
              <button
                key={reason.title}
                type="button"
                className={`reason-card ${selectedReason === reason.title ? 'selected' : ''}`}
                onClick={() => setSelectedReason(reason.title)}
              >
                <span>{reason.title}</span>
              </button>
            ))}
          </div>

          <div className="reason-reveal">
            <p>{activeReason.message}</p>
          </div>
        </section>

        <section className="home-section">
          <h3>You're my home.</h3>
          <p>
            and no matter where life takes us,
            <br />
            my heart will always find its way back to you. ♡
          </p>

          <button type="button" className="secondary-button" onClick={() => setShowLetter(true)}>
            One more thing ♡
          </button>
        </section>
      </div>

      {showLetter && (
        <div className="letter-overlay" onClick={() => setShowLetter(false)}>
          <div className="letter-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-letter" onClick={() => setShowLetter(false)}>
              ×
            </button>
            <span className="modal-tag">for you</span>
            <h4>My love,</h4>
            <p>
              Go explore, have fun… but don’t forget to come back to me 🥺🤍
            </p>
            <p className="signature">Always yours, ♡</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default BouquetDetailPage;
