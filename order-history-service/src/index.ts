import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import {
  mockCompanyInfo,
  mockHistoricalData,
  mockStockPrices,
  mockUserPortfolios,
} from "./mockData";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;

const schema = buildSchema(
  `
        type StockPrice{
            symbol: String!,
            price: Float!,
            timestamp: String!
        }

        type HistoricalData {
            date: String!
            open: Float!
            high: Float!
            low: Float!
            close: Float!
            volume: Int!
        }

        type CompanyInfo {
            name: String!
            sector: String!
            CEO: String!
            headquarters: String!
            description: String!
         }

         type Holding {
            symbol: String!
            quantity: Int!
            averagePrice: Float!
         }

         type UserPortfolio {
            holdings: [Holding!]!
            cashBalance: Float!
            totalValue: Float!
         }

         type Query {
            stockPrice(symbol: String!): StockPrice
            historicalData(symbol: String!, startDate: String!, endDate: String!): [HistoricalData!]!
            companyInfo(symbol: String!): CompanyInfo
            userPortfolio(userId: String!): UserPortfolio
        }

    `
);


// Resolver function in GRAPH-QL

const root = {
    stockPrice: (data: any) => {
        // @ts-ignore
        return mockStockPrices[data.symbol];
    },
    historicalData: (symbol: any, startDate: any,endDate: any) => {
        // @ts-ignore
        return mockHistoricalData[symbol.symbol]
    },
    companyInfo: (symbol: any) => {
        // @ts-ignore
        return mockCompanyInfo[symbol.symbol];
    },
    userPortfolio: (userId: any) => {
        // @ts-ignore
        return mockUserPortfolios[userId.userId];
    }
}

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
   }));
app.listen(PORT,() => {
    console.log(`The Services has been started at ${PORT}`);
})
