import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
    const currentYear = new Date().getFullYear();
    const [retirementYear, setRetirementYear] = useState(currentYear);
    const [showOptional, setShowOptional] = useState(false);

    return (
        <>
            <h1>FI/RE Hub</h1>
      <section>
        <p>Welcome to FI/RE Hub! This tool will aggregate retirement calculator information from several online tools and show you both
          individual results and aggregate results. The purpose of FI/RE Hub is to give you a singular website to use for all of your retirement
          calculations.
        </p>
      </section>
      <h1>Inputs</h1>
      <p>Please input at least the required information below and hit the "Submit" button. Behind the scenes FI/RE Hub will gather and aggreate all of the data
        (please be patient!)
      </p>
      <form>
        <h2>Required Inputs</h2>
        <section id="required-inputs">
          <label for="port-value">Current Portfolio Value: </label>
          <input type="number" id="port-value" name="port-value" required /><br/>
          <label for="annual-spending">Annual Spending: </label>
          <input type="number" id="annual-spending" name="annual-spending" min={0} required /><br/>
          <label for="full-years">Full Years: </label>
          <input type="number" id="full-years" name="full-years" min={0} required /><br/>
          <label for="retirement-year">Retirement Year: </label>
          <input type="number" id="retirement-year" name="retirement-year" min={currentYear} value={retirementYear} onChange={e => setRetirementYear(e.target.value)} required /><br/>
        </section>
        <h2>
          <span className="optional-inputs-toggle" onClick={() => setShowOptional(!showOptional)}>
            Optional Inputs {showOptional ? '-' : '+'}
          </span>
        </h2>
        {showOptional && (
          <section id="optional-inputs">
            <h3>Not Retired?</h3>
              <label for="annual-contribution">Contributions per Year: </label>
              <input type="number" id="annual-contribution" name="annual-contribution" placeholder={0}/><br/>
          </section>
        )}
        <button type="submit">Submit</button>
      </form>
        </>
    );
}

export default HomePage;