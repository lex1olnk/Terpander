module.exports = {
    resolve: {
        fallback: { 
            "timers": require.resolve('timers-browserify'), 
            "crypto": require.resolve("crypto-browserify")
        }
    },
};
