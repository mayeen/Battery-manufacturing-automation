import { useState } from 'react'
import './App.css'

function App() {
  const [inputs, setInputs] = useState({
    eta1: '',
    eta1000: '',
    SC: '',
    U: '',
    G: '',
    pump: ''
  })

  const [predictions, setPredictions] = useState(null)

  const handlePredict = () => {
    // Dummy data for now
    setPredictions({
      h_mean_pred: 45.2,
      h_mean_std: 2.1,
      super_elev_pred: 3.5,
      super_elev_std: 1.8
    })
  }

  return (
    <div className="app">
      <h1>IQ-EL Coating Predictor</h1>
      
      <div className="container">
        <div className="input-section">
          <h2>Input Parameters</h2>
          <input type="number" placeholder="Viscosity η₁ (Pa·s)" 
            value={inputs.eta1} 
            onChange={(e) => setInputs({...inputs, eta1: e.target.value})} />
          <input type="number" placeholder="Viscosity η₁₀₀₀ (Pa·s)" 
            value={inputs.eta1000} 
            onChange={(e) => setInputs({...inputs, eta1000: e.target.value})} />
          <input type="number" placeholder="Solid Content (mass %)" 
            value={inputs.SC} 
            onChange={(e) => setInputs({...inputs, SC: e.target.value})} />
          <input type="number" placeholder="Speed (m/min)" 
            value={inputs.U} 
            onChange={(e) => setInputs({...inputs, U: e.target.value})} />
          <input type="number" placeholder="Gap (µm)" 
            value={inputs.G} 
            onChange={(e) => setInputs({...inputs, G: e.target.value})} />
          <input type="number" placeholder="Pump Rate (U/min)" 
            value={inputs.pump} 
            onChange={(e) => setInputs({...inputs, pump: e.target.value})} />
          <button onClick={handlePredict}>Predict</button>
        </div>

        <div className="output-section">
          <h2>Predictions</h2>
          {predictions ? (
            <div className="results">
              <div className="result-item">
                <h3>Mean Thickness (h_mean)</h3>
                <p>{predictions.h_mean_pred} ± {predictions.h_mean_std} µm</p>
              </div>
              <div className="result-item">
                <h3>Edge Elevation (super_elev)</h3>
                <p>{predictions.super_elev_pred} ± {predictions.super_elev_std} µm</p>
              </div>
            </div>
          ) : (
            <p>Enter parameters and click Predict</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
