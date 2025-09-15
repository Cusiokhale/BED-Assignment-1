interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {
    const profitOrLoss = currentValue - initialInvestment;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary;

    if (percentageChange > 20) {
        performanceSummary = `The portfolio has [Gained significantly]`;
    } else if (percentageChange > 10 && percentageChange <= 20) {
        performanceSummary = `The portfolio has [Gained moderately]`;
    } else if (percentageChange > 0.1 && percentageChange <= 10) {
        performanceSummary = `The portfolio has [Gained slightly]`;
    } else if (percentageChange === 0) {
        performanceSummary = `No change`;
    } else if (percentageChange > -10 && percentageChange <= -0.1) {
        performanceSummary = `The portfolio has [Lost slightly]`;
    } else if (percentageChange > -20 && percentageChange <= -10) {
        performanceSummary = `The portfolio has [Lost moderately]`;
    } else if (percentageChange < -20) {
        performanceSummary = `The portfolio has [Lost significantly]`;
    } else {
        performanceSummary = `No data`;
    }


    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}