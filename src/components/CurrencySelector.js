import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const CurrencySelector = () => {
  const { dispatch, currency } = useContext(AppContext);

  const currencies = [
    { symbol: "£", name: "Pound" },
    { symbol: "$", name: "Dollar" },
    { symbol: "€", name: "Euro" },
    { symbol: "₹", name: "Rupee" },
    { symbol: "﷼", name: "Saudi Riyal" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    dispatch({ type: "CHG_CURRENCY", payload: newCurrency });
  };

  return (
    <div className="alert alert-secondary">
      <select className="form-control" value={selectedCurrency} onChange={handleCurrencyChange}>
        {currencies.map((item) => (
          <option key={item.name} value={item.symbol}>
            {item.symbol} - {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
