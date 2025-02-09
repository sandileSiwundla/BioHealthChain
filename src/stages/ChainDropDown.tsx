import React, { useState } from 'react';
import './ChainDropDown.css';  

const Chain = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const cryptoChains = [
    { code: 'LISK', currency: 'Lisk' },
    { code: 'BTC', currency: 'Bitcoin' },
    { code: 'ETH', currency: 'Ethereum' },
    { code: 'ADA', currency: 'Cardano' },
    { code: 'SOL', currency: 'Solana' },
    { code: 'BNB', currency: 'Binance Coin' },
    { code: 'XRP', currency: 'Ripple' },
    { code: 'DOT', currency: 'Polkadot' },
    { code: 'MATIC', currency: 'Polygon' },
    { code: 'AVAX', currency: 'Avalanche' },
    { code: 'LTC', currency: 'Litecoin' },
    { code: 'DOGE', currency: 'Dogecoin' },
    { code: 'TRX', currency: 'Tron' },
    { code: 'XLM', currency: 'Stellar' },
    { code: 'ATOM', currency: 'Cosmos' },
    { code: 'FIL', currency: 'Filecoin' },
    { code: 'ICP', currency: 'Internet Computer' },
    { code: 'EOS', currency: 'EOS' },
    { code: 'MKR', currency: 'Maker' },
    { code: 'ZRX', currency: '0x' }
  ];

  const handleSelect = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <select
        id="currency-dropdown"
        name="currency"
        value={selectedCurrency}
        onChange={handleSelect}
      >
        {cryptoChains.map((chain) => (
          <option key={chain.code} value={chain.code}>
            {chain.code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Chain;
