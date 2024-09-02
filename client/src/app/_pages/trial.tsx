"use client";
import React from "react";
import { useState } from "react";
import client from "../_client";
import { STOCK_PRICE_QUERY, HISTORICAL_DATA_QUERY, COMPANY_INFO_QUERY, USER_PORTFOLIO_QUERY } from "../_query";
type Props = {};

export default function Trial({}: Props) {
  const [stockPrice, setStockPrice] = useState({});
  const [historialData, sethistorialData] = useState({});
  const [companyInfo, setcompanyInfo] = useState({});
  const [userPortfolio, setuserPortfolio] = useState({});

  const fetchData = async () => {
    try {
      const stockPriceResult = await client.query({ query: STOCK_PRICE_QUERY });
      const historicalDataResult = await client.query({ query: HISTORICAL_DATA_QUERY });
      const companyInfoResult = await client.query({ query: COMPANY_INFO_QUERY });
      const userPortfolioResult = await client.query({ query: USER_PORTFOLIO_QUERY });
 
      console.log('Stock Price:', stockPriceResult.data.stockPrice);
      setStockPrice(stockPriceResult.data.stockPrice);
      console.log('Historical Data:', historicalDataResult.data.historicalData);
      sethistorialData(historicalDataResult.data.historicalData);
      console.log('Company Info:', companyInfoResult.data.companyInfo);
      setcompanyInfo(companyInfoResult.data.companyInfo);
      console.log('User Portfolio:', userPortfolioResult.data.userPortfolio);
      setuserPortfolio(userPortfolioResult.data.userPortfolio);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  fetchData();
  
  return (
    <div>
      <h1>Stock Data</h1>
      <h2>Stock Price (AAPL)</h2>
      <pre>{JSON.stringify(stockPrice)}</pre>
      <h2>Historical Data (TCS)</h2>
      <pre>{JSON.stringify(historialData)}</pre>
      <h2>Company Info (INFY)</h2>
      <pre>{JSON.stringify(companyInfo)}</pre>
      <h2>User Portfolio (ID: 123)</h2>
      <pre>{JSON.stringify(userPortfolio)}</pre>
    </div>
  );
  };
