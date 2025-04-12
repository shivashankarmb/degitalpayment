import React, { useState } from 'react';
import './InsuranceApp.css';
const insurancePlans = [
  {
    name: 'Term Life Insurance',
    description: 'Provides coverage for a specific period. Ideal for those seeking high coverage at low premiums.',
    benefits: ['Low cost', 'Simple to understand', 'Tax benefits'],
    moreInfo: `Term life insurance offers pure protection with no maturity benefit. Best suited for individuals with dependents.`,
    providers: ['LIC Tech Term Plan', 'HDFC Click 2 Protect', 'Max Life Smart Secure Plus Plan']
  },
  {
    name: 'Whole Life Insurance',
    description: 'Offers coverage for the lifetime of the insured along with a savings component.',
    benefits: ['Lifelong protection', 'Cash value accumulation', 'Fixed premiums'],
    moreInfo: `Whole life insurance pays a death benefit and includes a savings component that builds cash value.`,
    providers: ['LIC Jeevan Umang', 'SBI Life Shubh Nivesh', 'HDFC Life Sanchay Plus']
  },
  {
    name: 'Endowment Plans',
    description: 'Combines insurance with savings. Offers a lump sum after a specific term or on death.',
    benefits: ['Maturity benefits', 'Death benefit', 'Encourages savings'],
    moreInfo: `Endowment plans are great for those who want insurance and guaranteed savings for future goals.`,
    providers: ['LIC New Endowment Plan', 'ICICI Pru Savings Suraksha', 'Bajaj Allianz Save Assure']
  },
  {
    name: 'Money Back Policy',
    description: 'Provides periodic returns during the policy term along with life cover.',
    benefits: ['Liquidity during policy term', 'Survival benefits', 'Bonus payouts'],
    moreInfo: `Money back policies pay survival benefits periodically, helping during key milestones.`,
    providers: ['LIC Money Back Plan', 'HDFC Life Super Income Plan', 'Max Life Monthly Income Advantage']
  },
  {
    name: 'ULIP (Unit Linked Insurance Plan)',
    description: 'Combines investment and insurance. Premiums are partly invested in the market.',
    benefits: ['Market-linked returns', 'Flexible investment options', 'Life cover'],
    moreInfo: `ULIPs are ideal for long-term wealth creation and provide dual benefits of insurance and investment.`,
    providers: ['HDFC Life Click 2 Wealth', 'ICICI Pru Signature', 'Tata AIA Fortune Pro']
  }
];

function InsuranceApp() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="insurance-container">
      <h1>Life Insurance Schemes</h1>
      <p className="intro">
        Learn about various types of life insurance plans and choose the one that fits your needs.
      </p>
      <div className="cards-wrapper">
        {insurancePlans.map((plan, index) => (
          <div
            key={index}
            className="insurance-card"
            onClick={() => setSelectedPlan(plan)}
          >
            <h2>{plan.name}</h2>
            <p>{plan.description}</p>
            <ul>
              {plan.benefits.map((benefit, i) => (
                <li key={i}>✓ {benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="insurance-modal">
          <div className="insurance-modal-content">
            <span className="close-btn" onClick={() => setSelectedPlan(null)}>
              &times;
            </span>
            <h2>{selectedPlan.name}</h2>
            <p><strong>Overview:</strong> {selectedPlan.moreInfo}</p>
            <p><strong>Top Insurance Providers:</strong></p>
            <ul>
              {selectedPlan.providers.map((provider, idx) => (
                <li key={idx}>🏢 {provider}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default InsuranceApp;
