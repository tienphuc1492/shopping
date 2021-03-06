export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 5000;
export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/shoppingdb';
export const SESS_NAME = process.env.SESS_NAME || 'sid';
export const SESS_LIFETIME = process.env.SESS_LIFETIME || 120;
export const APP_KEY = process.env.APP_KEY || '91ec39b3a0b5998615e4fe949565f5c30bdc60f0';
export const TOKEN_EXPIRE = process.env.TOKEN_EXPIRE || 120;
export const ADMIN_PAGE_LIMIT = process.env.ADMIN_PAGE_LIMIT || 30;
export const PAGE_LIMIT = process.env.PAGE_LIMIT || 50;