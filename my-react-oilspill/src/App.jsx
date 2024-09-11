import React, { useState } from 'react';
import './index.css';
import ship1 from './assets/image1.jpg';
import ship2 from './assets/image2.jpg';
import ship3 from './assets/image3.jpg';
import ship4 from './assets/image4.jpg';
import ship5 from './assets/image5.jpg';

function ShipTrackingSystem() {
  const [shipName, setShipName] = useState('');
  const [imoNumber, setImoNumber] = useState('');
  const [shipInfo, setShipInfo] = useState({
    imo: '',
    name: '',
    length: '',
    width: '',
    timestamp: '',
    speed: '',
    draft: '',
    cog: '',
    heading: '',
    type: '',
    coordinates: '',
  });
  const [satelliteImage, setSatelliteImage] = useState(null);
  const [anomalyDetected, setAnomalyDetected] = useState(null);
  const [oilSpillDetected, setOilSpillDetected] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  const images = [ship1, ship2, ship3, ship4, ship5];
  const shipNames = [
    'HMS Victory', 'USS Enterprise', 'RMS Titanic', 'SS United States',
    'MS Oasis of the Seas', 'MV Britannia', 'HMS Beagle', 'USS Missouri',
    'RMS Lusitania', 'MV Harmony of the Seas', 'HMS Bounty', 'USS Constitution',
    'RMS Queen Mary', 'MS Queen Elizabeth', 'SS Great Britain', 
    'MV Adventure of the Seas', 'HMS Warspite', 'USS Indianapolis',
    'RMS Carpathia', 'MS Navigator of the Seas'
  ];

  const generateRandomShipDetails = () => {
    return {
      imo: imoNumber || `IMO${Math.floor(Math.random() * 9000000) + 1000000}`, // Allow alphanumeric IMO
      name: shipName || shipNames[Math.floor(Math.random() * shipNames.length)],
      length: `${Math.floor(Math.random() * 100) + 200} meters`,
      width: `${Math.floor(Math.random() * 20) + 30} meters`,
      timestamp: new Date().toLocaleString(),
      speed: `${Math.floor(Math.random() * 30) + 1} knots`,
      draft: `${Math.floor(Math.random() * 15) + 5} meters`,
      cog: `${Math.floor(Math.random() * 360)}°`,
      heading: ['North', 'South', 'East', 'West'][Math.floor(Math.random() * 4)],
      type: ['Cargo', 'Tanker', 'Ferry'][Math.floor(Math.random() * 3)],
      coordinates: `${(Math.random() * 180 - 90).toFixed(2)}° N, ${(Math.random() * 360 - 180).toFixed(2)}° W`,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if IMO number is alphabetic only
    if (imoNumber && /^[A-Za-z]+$/.test(imoNumber)) {
      setAlertMessage('Please check the IMO Number. It should contain numbers as well.');
      return;
    }

    // Check if ship name is numeric only
    if (shipName && /^\d+$/.test(shipName)) {
      setAlertMessage('Please check the Ship Name. It should contain letters as well.');
      return;
    }

    // Check if both ship name and IMO number are empty
    if (!shipName && !imoNumber) {
      setAlertMessage('Please enter a Ship Name or IMO Number before submitting.');
      return;
    }

    setAlertMessage('');
    const newShipInfo = generateRandomShipDetails();
    setShipInfo(newShipInfo);

    const randomImage = images[Math.floor(Math.random() * images.length)];
    setSatelliteImage(randomImage);

    const anomalyStatus = Math.random() > 0.5 ? 'YES' : 'NO';
    setAnomalyDetected(anomalyStatus);
    setOilSpillDetected('NO');
  };

  const closeAlert = () => {
    setAlertMessage('');
  };

  return (
    <div className="ship-tracking-system">
      <h1>Ship Tracking System</h1>
      
      {alertMessage && (
        <div className="custom-alert">
          <p>{alertMessage}</p>
          <button className="close-alert-btn" onClick={closeAlert}>Close</button>
        </div>
      )}
      
      <div className="top-section">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <label>
              Ship Name:
              <input
                type="text"
                value={shipName}
                onChange={(e) => setShipName(e.target.value)}
                placeholder="Enter Ship Name"
              />
            </label>
            <div className="or-divider">or</div>
            <label>
              IMO Number:
              <input
                type="text"
                value={imoNumber}
                onChange={(e) => setImoNumber(e.target.value)}
                placeholder="Enter IMO Number"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="ship-info-section">
          <h2>Vessel Info</h2>
          <p><strong>IMO:</strong> {shipInfo.imo}</p>
          <p><strong>Name:</strong> {shipInfo.name}</p>
          <p><strong>Length:</strong> {shipInfo.length}</p>
          <p><strong>Width:</strong> {shipInfo.width}</p>
          <h2>Vessel Position</h2>
          <p><strong>Timestamp:</strong> {shipInfo.timestamp}</p>
          <p><strong>Speed:</strong> {shipInfo.speed}</p>
          <p><strong>Draft:</strong> {shipInfo.draft}</p>
          <p><strong>COG:</strong> {shipInfo.cog}</p>
          <p><strong>Heading:</strong> {shipInfo.heading}</p>
          <h2>Geometry</h2>
          <p><strong>Type:</strong> {shipInfo.type}</p>
          <p><strong>Coordinates:</strong> {shipInfo.coordinates}</p>
        </div>
      </div>

      <div className="detection-section">
        <div className={`anomaly-detected ${anomalyDetected === 'YES' ? 'red' : 'green'}`}>
          <p>ANOMALY DETECTED: {anomalyDetected}</p>
        </div>
        <div className="oil-spill-detected green">
          <p>OIL SPILL DETECTED: {oilSpillDetected}</p>
        </div>
      </div>

      {satelliteImage && (
        <div className="satellite-image">
          <h1 style={{ textDecoration: 'none' }}>Satellite Image of the Ship</h1>
          <img src={satelliteImage} alt="Satellite view of the ship" />
        </div>
      )}
    </div>
  );
}

export default ShipTrackingSystem;
