module.exports = {
    presets: [
        [
            require.resolve("@babel/preset-env"),
            {
                targets: {
                    node: "current",
                },
            },
        ],
    ],
    plugins: [
        require.resolve("babel-plugin-transform-export-extensions"),
        require.resolve("@babel/plugin-proposal-class-properties"),
        require.resolve("@babel/plugin-proposal-private-methods"),
        [
            require.resolve("babel-plugin-module-resolver"),
            {
                root: ["."],
                extensions: [".js"],
                alias: {
                    "@yid/config": "./src/config/index"
                },
            },
        ],
    ],
}