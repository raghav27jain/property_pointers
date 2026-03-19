import React, { useState } from 'react';

const EmiCalculatorPage = () => {
  const [amount, setAmount] = useState(8000000); // 80,00,000
  const [years, setYears] = useState(30);
  const [rate, setRate] = useState(7.1);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;

  let emi = 0;
  if (amount > 0 && rate > 0 && years > 0 && Number.isFinite(monthlyRate)) {
    const pow = Math.pow(1 + monthlyRate, months);
    emi = (amount * monthlyRate * pow) / (pow - 1);
  }

  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  const safeEmi = Number.isFinite(emi) ? emi : 0;
  const safeInterest = Number.isFinite(totalInterest) ? totalInterest : 0;

  const handleRecalculate = () => {
    console.log('Recalculate clicked', { amount, years, rate });
  };

  return (
    <main className="mb-section">
      <h1 className="mb-emi-title">Home Loan EMI Calculator</h1>
      <p className="mb-emi-sub">
        Home Loan EMI Calculator provides an instant estimate of your EMI by
        using your loan amount, interest rate and loan tenure.
      </p>

      <div className="mb-emi-main-card">
        {/* left panel: form */}
        <div className="mb-emi-form">
          <h2 className="mb-emi-logo">propertyLoans</h2>

          <label className="mb-emi-label">
            Loan Amount
            <input
              type="number"
              className="mb-emi-input"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </label>

          <label className="mb-emi-label">
            Loan Tenure (years)
            <select
              className="mb-emi-input"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            >
              {[5, 10, 15, 20, 25, 30].map((y) => (
                <option key={y} value={y}>
                  {y} yrs
                </option>
              ))}
            </select>
          </label>

          <label className="mb-emi-label">
            Interest Rate % (p.a.)
            <input
              type="number"
              step="0.1"
              className="mb-emi-input"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </label>

          <button
            className="mb-btn-primary mb-emi-button"
            type="button"
            onClick={handleRecalculate}
          >
            Recalculate Your EMI
          </button>
        </div>

        {/* right panel: summary */}
        <div className="mb-emi-summary">
          <h2 className="mb-emi-summary-title">
            You are Eligible for EMI Amount{' '}
            <span className="mb-emi-amount">
              ₹{Math.round(safeEmi).toLocaleString('en-IN')}
            </span>
          </h2>

          <div className="mb-emi-split">
            <div className="mb-emi-chip">
              <span className="mb-emi-dot mb-emi-dot-principal" />
              <div>
                <div className="mb-emi-chip-label">Principal Amount</div>
                <div className="mb-emi-chip-value">
                  ₹{amount.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div className="mb-emi-chip">
              <span className="mb-emi-dot mb-emi-dot-interest" />
              <div>
                <div className="mb-emi-chip-label">Interest Amount</div>
                <div className="mb-emi-chip-value">
                  ₹{Math.round(safeInterest).toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>

          <p className="mb-emi-note">
            This is an indicative EMI based on the values entered. Actual
            eligibility may vary as per bank policies.
          </p>
        </div>
      </div>
    </main>
  );
};

export default EmiCalculatorPage;
