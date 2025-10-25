import { config } from 'dotenv'

config()

export const env = {
  PORT: process.env.PORT || '3000',
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_VERSION: process.env.API_VERSION || 'v1',
} as const

export const isDevelopment = env.NODE_ENV === 'development'
export const isProduction = env.NODE_ENV === 'production'
