const dev = process.env.NODE_ENV;

export const server = dev
    ? 'http://localhost:3000'
    : 'https://www.tietieus.com';
