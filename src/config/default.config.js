import 'dotenv/config';
import path from 'path';
export default {
    secret: process.env.JWT_SECRET,
    server:{
        host: process.env.APP_HOST,
        port: process.env.APP_PORT
    },
    log: process.env.APP_LOGGING ?? false,
    path: {
        disabled:'/:url(api|config|lib|views|default)'
    },
    oAuth: {
        local: {
            enabled: true
        },
        facebook: {
            enabled: process.env.OAUTH_FACEBOOK_ENABLED ?? false,
            clientID: process.env.OAUTH_FACEBOOK_CLIENT_ID ?? '',
            clientSecret: process.env.OAUTH_FACEBOOK_CLIENT_SECRET ?? '',
            callbackURL: process.env.OAUTH_FACEBOOK_CALLBACK_URL ?? '/auth/facebook/callback'
        },
        twitter: {
            enabled: process.env.OAUTH_TWITTER_ENABLED ?? false,
            clientID: process.env.OAUTH_TWITTER_CLIENT_ID ?? '',
            clientSecret: process.env.OAUTH_TWITTER_CLIENT_SECRET ?? '',
            callbackURL: process.env.OAUTH_TWITTER_CALLBACK_URL ?? '/auth/twitter/callback'
        },
        google: {
            enabled: process.env.OAUTH_GOOGLE_ENABLED ?? false,
            clientID: process.env.OAUTH_GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET ?? '',
            callbackURL: process.env.OAUTH_GOOGLE_CALLBACK_URL ?? '/auth/google/callback'
        },
        github: {
            enabled: process.env.OAUTH_GITHUB_ENABLED ?? false,
            clientID: process.env.OAUTH_GITHUB_CLIENT_ID ?? '',
            clientSecret: process.env.OAUTH_GITHUB_CLIENT_SECRET ?? '',
            callbackURL: process.env.OAUTH_GITHUB_CALLBACK_URL ?? '/auth/github/callback'
        },
    },
    // globals
    mode: process.env.NODE_ENV || 'development', // mode
    name : process.env.APP_NAME,
    root: path.normalize(path.resolve(__dirname,'..','..')),
    base: path.normalize(path.resolve(__dirname,'..')),
    client: path.normalize(path.resolve(__dirname,'..','..','clients'))
}