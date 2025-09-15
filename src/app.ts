import express, { Express } from "express";
import { Asset, findLargestHolding } from "./portfolio/findLargestHolding";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";
import { calculateAssetAllocation } from "./portfolio/calculateAssetAllocation";

const app: Express = express();

const assets: Asset[] = [
    { name: 'House', value: 300000 },
    { name: 'Stocks', value: 150000 },
    { name: 'Bonds', value: 50000 },
    { name: 'Artwork', value: 10000 },
];

app.get("/", (req, res) => {
    res.send("Hello, Emmanuel!");
});

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.get("/api/v1/performance", (req, res) => {

    const performanceResults = calculatePortfolioPerformance(10000, 12000);

    res.json(performanceResults);
});

app.get("/api/v1/largest-holding", (req, res) => {

    const largeatHolding = findLargestHolding(assets);

    res.json(largeatHolding);
});

app.get("/api/v1/allocation", (req, res) => {

    const allocation = calculateAssetAllocation(assets);

    res.json(allocation);
});

export default app;