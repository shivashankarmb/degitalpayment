import React from 'react';
import './Invest.css';

const InvestList = [
  {
    name: 'Public Provident Fund (PPF)',
    tenure: '15 years',
    interest: '7.1% p.a.',
    benefits: 'Tax-free interest, Section 80C benefit, long-term secure saving.',
    link: 'https://www.nsiindia.gov.in/(S(ihtagzakaw2jdh55qf4sfgqy))/InternalPage.aspx?Id_Pk=55'
  },
  {
    name: 'Sukanya Samriddhi Yojana',
    tenure: '21 years or until girl’s marriage at 18',
    interest: '8.2% p.a.',
    benefits: 'Ideal for girl child’s future, tax-saving, secure.',
    link: 'https://www.nsiindia.gov.in/(S(yzelpq45djkc3u45lmwhhc55))/InternalPage.aspx?Id_Pk=62'
  },
  {
    name: 'National Savings Certificate (NSC)',
    tenure: '5 years',
    interest: '7.7% p.a.',
    benefits: 'Fixed income, tax benefit under 80C.',
    link: 'https://www.india.gov.in/spotlight/national-savings-certificates-nsc'
  },
  {
    name: 'Senior Citizens Saving Scheme (SCSS)',
    tenure: '5 years (extendable by 3 years)',
    interest: '8.2% p.a.',
    benefits: 'High return, senior-friendly, Section 80C benefit.',
    link: 'https://www.nsiindia.gov.in/(S(yzelpq45djkc3u45lmwhhc55))/InternalPage.aspx?Id_Pk=62'
  },
  {
    name: 'Kisan Vikas Patra (KVP)',
    tenure: '115 months',
    interest: 'Doubles investment in ~9 years 7 months',
    benefits: 'Fixed income, safe for rural investors.',
    link: 'https://www.india.gov.in/spotlight/kisan-vikas-patra-kvp'
  },
  {
    name: 'Post Office Monthly Income Scheme (POMIS)',
    tenure: '5 years',
    interest: '7.4% p.a.',
    benefits: 'Monthly income, stable for retirees.',
    link: 'https://www.indiapost.gov.in/Financial/pages/content/post-office-saving-schemes.aspx'
  }
];

const Invest = () => {
  const handleApply = (link) => {
    // Navigate to the respective URL
    window.location.href = link; // This will navigate to the external website
  };

  return (
    <div className="scheme-container">
      <h2>Government & Postal Investment Schemes</h2>
      <div className="scheme-grid">
        {InvestList.map((scheme, index) => (
          <div className="scheme-card" key={index}>
            <h3>{scheme.name}</h3>
            <p><strong>Tenure:</strong> {scheme.tenure}</p>
            <p><strong>Interest:</strong> {scheme.interest}</p>
            <p><strong>Benefits:</strong> {scheme.benefits}</p>
            <button
              className="apply-btn"
              onClick={() => handleApply(scheme.link)} // Pass the link to the function
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invest;
