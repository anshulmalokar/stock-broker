import { gql } from "@apollo/client";

export const STOCK_PRICE_QUERY = gql`
 query {
   stockPrice(symbol: "AAPL") {
     symbol
     price
     timestamp
   }
 }
`;

export const HISTORICAL_DATA_QUERY = gql`
 query {
   historicalData(symbol: "TCS", startDate: "2022-01-01", endDate: "2022-01-02") {
     date
     open
     high
     low
     close
     volume
   }
 }
`;

export const COMPANY_INFO_QUERY = gql`
 query {
   companyInfo(symbol: "INFY") {
     name
     sector
     CEO
     headquarters
     description
   }
 }
`;

export const USER_PORTFOLIO_QUERY = gql`
 query {
   userPortfolio(userId: "123") {
     holdings {
       symbol
       quantity
       averagePrice
     }
     cashBalance
     totalValue
   }
 }
`;

