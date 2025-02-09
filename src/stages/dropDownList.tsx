import React, { useState } from 'react';
import './DropDownList.css';  // Import the external CSS file

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const africanCountries = [
    { code: 'DZD', currency: 'Algerian Dinar', flag: '🇩🇿' },
    { code: 'AOA', currency: 'Angolan Kwanza', flag: '🇦🇴' },
    { code: 'BIF', currency: 'Burundian Franc', flag: '🇧🇮' },
    { code: 'BWP', currency: 'Botswana Pula', flag: '🇧🇼' },
    { code: 'BFA', currency: 'Burkina Faso CFA Franc', flag: '🇧🇫' },
    { code: 'BDT', currency: 'Burundian Franc', flag: '🇧🇮' },
    { code: 'CMR', currency: 'Cameroonian Franc', flag: '🇨🇲' },
    { code: 'CPV', currency: 'Cape Verdean Escudo', flag: '🇨🇻' },
    { code: 'CAF', currency: 'Central African CFA Franc', flag: '🇨🇫' },
    { code: 'TCD', currency: 'Chadian Franc', flag: '🇹🇩' },
    { code: 'COM', currency: 'Comorian Franc', flag: '🇰🇲' },
    { code: 'COG', currency: 'Congolese CFA Franc', flag: '🇨🇬' },
    { code: 'CIV', currency: 'Ivorian Franc', flag: '🇨🇮' },
    { code: 'COD', currency: 'Congolese Franc', flag: '🇨🇩' },
    { code: 'DJI', currency: 'Djiboutian Franc', flag: '🇩🇯' },
    { code: 'EGP', currency: 'Egyptian Pound', flag: '🇪🇬' },
    { code: 'GNQ', currency: 'Equatorial Guinean CFA Franc', flag: '🇬🇶' },
    { code: 'ERI', currency: 'Eritrean Nakfa', flag: '🇪🇷' },
    { code: 'SWZ', currency: 'Swazi Lilangeni', flag: '🇸🇿' },
    { code: 'ETH', currency: 'Ethiopian Birr', flag: '🇪🇹' },
    { code: 'GAB', currency: 'Gabonese CFA Franc', flag: '🇬🇦' },
    { code: 'GMB', currency: 'Gambian Dalasi', flag: '🇬🇲' },
    { code: 'GHA', currency: 'Ghanaian Cedi', flag: '🇬🇭' },
    { code: 'GIN', currency: 'Guinean Franc', flag: '🇬🇳' },
    { code: 'GNB', currency: 'Guinea-Bissau CFA Franc', flag: '🇬🇼' },
    { code: 'KEN', currency: 'Kenyan Shilling', flag: '🇰🇪' },
    { code: 'LSO', currency: 'Lesotho Loti', flag: '🇱🇸' },
    { code: 'LBR', currency: 'Liberian Dollar', flag: '🇱🇸' },
    { code: 'LBY', currency: 'Libyan Dinar', flag: '🇱🇾' },
    { code: 'MDG', currency: 'Malagasy Ariary', flag: '🇲🇬' },
    { code: 'MWI', currency: 'Malawian Kwacha', flag: '🇲🇼' },
    { code: 'MLI', currency: 'Malian CFA Franc', flag: '🇲🇱' },
    { code: 'MRT', currency: 'Mauritanian Ouguiya', flag: '🇲🇷' },
    { code: 'MUS', currency: 'Mauritian Rupee', flag: '🇲🇺' },
    { code: 'MYT', currency: 'Mayotte Franc', flag: '🇾🇹' },
    { code: 'MAR', currency: 'Moroccan Dirham', flag: '🇲🇦' },
    { code: 'MOZ', currency: 'Mozambican Metical', flag: '🇲🇿' },
    { code: 'NAM', currency: 'Namibian Dollar', flag: '🇳🇦' },
    { code: 'NER', currency: 'Nigerian Naira', flag: '🇳🇪' },
    { code: 'NGA', currency: 'Nigerian Naira', flag: '🇳🇬' },
    { code: 'REU', currency: 'Réunion Franc', flag: '🇷🇪' },
    { code: 'RWA', currency: 'Rwandan Franc', flag: '🇷🇼' },
    { code: 'SHN', currency: 'Saint Helena Pound', flag: '🇸🇭' },
    { code: 'STP', currency: 'São Tomé and Príncipe Dobra', flag: '🇸🇹' },
    { code: 'SEN', currency: 'Senegalese CFA Franc', flag: '🇸🇳' },
    { code: 'SYC', currency: 'Seychellois Rupee', flag: '🇸🇨' },
    { code: 'SLE', currency: 'Sierra Leonean Leone', flag: '🇸🇱' },
    { code: 'SOM', currency: 'Somali Shilling', flag: '🇸🇴' },
    { code: 'ZAR', currency: 'South African Rand', flag: '🇿🇦' },
    { code: 'SSD', currency: 'South Sudanese Pound', flag: '🇸🇸' },
    { code: 'SDG', currency: 'Sudanese Pound', flag: '🇸🇩' },
    { code: 'TAN', currency: 'Tanzanian Shilling', flag: '🇹🇿' },
    { code: 'TGO', currency: 'Togolese CFA Franc', flag: '🇹🇬' },
    { code: 'TUN', currency: 'Tunisian Dinar', flag: '🇹🇳' },
    { code: 'UGA', currency: 'Ugandan Shilling', flag: '🇺🇬' },
    { code: 'ZMB', currency: 'Zambian Kwacha', flag: '🇿🇲' },
    { code: 'ZWE', currency: 'Zimbabwean Dollar', flag: '🇿🇼' }
];



  const handleSelect = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <select
        id="country-dropdown"
        name="country"
        value={selectedCurrency}
        onChange={handleSelect}
      >
        {africanCountries.map((country) => (
          <option key={country.code} value={country.currency}>
            {country.flag} {country.code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
