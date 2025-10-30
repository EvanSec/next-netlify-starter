import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Whoops!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container">
        <div className="main-frame">
          <div className="scan-line"></div>
          <div className="grid-overlay"></div>
          <div className="terminal-glitch">
            <p className="data-stream">// Hellawww from the dark side~</p>
            <div className="status-line">
              <span>STATUS: </span>
              <span className="blink">DOMAIN_HAS_BEEN_SEIZED</span>
              <span>|| No3stra</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          background: #0a0a12;
          min-height: 100vh;
          font-family: 'Courier New', monospace;
          overflow: hidden;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .main-frame {
          padding: 2rem;
          border: 4px solid #00ffff;
          box-shadow: 0 0 20px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.1);
          position: relative;
          background: #000;
          overflow: hidden;
          width: 100%;
          max-width: 800px;
        }

        .terminal-glitch {
          position: relative;
          padding: 2rem;
          background: #000;
          border: 2px solid #ff00ff;
          box-shadow: 0 0 15px #ff00ff, inset 0 0 15px rgba(255, 0, 255, 0.1);
        }

        .data-stream {
          color: #ff00ff;
          font-size: 1.2rem;
          animation: flicker 3s infinite;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #00ffff;
          animation: scan 4s linear infinite;
          box-shadow: 0 0 10px #00ffff;
          z-index: 10;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }

        .status-line {
          color: #ffff00;
          font-size: 1rem;
          margin-top: 1.5rem;
          border-top: 1px solid #ffff00;
          padding-top: 1rem;
        }

        .blink {
          animation: blink 1s step-end infinite;
          color: cyan;
        }

        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Pixelated effect */
        .data-stream, .status-line {
          image-rendering: pixelated;
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
          .data-stream {
            font-size: 1rem;
          }
          
          .main-frame, .terminal-glitch {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
