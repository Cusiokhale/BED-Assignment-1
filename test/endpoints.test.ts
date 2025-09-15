import request from 'supertest';
import app from '../src/app';

describe('Portfolio API', () => {
    test('GET /api/v1/performance returns PortfolioPerformance shape', async () => {
        const res = await request(app).get('/api/v1/performance');

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('initialInvestment');
        expect(res.body).toHaveProperty('currentValue');
        expect(res.body).toHaveProperty('profitOrLoss');
        expect(res.body).toHaveProperty('percentageChange');
        expect(res.body).toHaveProperty('performanceSummary');
    });

    test('GET /api/v1/largest-holding returns Asset shape', async () => {
        const res = await request(app).get('/api/v1/largest-holding');

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('value');

    });

    test('GET /api/v1/allocation returns array of Asset shape', async () => {
        const res = await request(app).get('/api/v1/allocation');

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);

        if (res.body.length > 0) {
            const first = res.body[0];
            expect(first).toHaveProperty('name');
            expect(first).toHaveProperty('allocation');
        }
    });
});
