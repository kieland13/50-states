//this tells vue where to send all the request to the API and server

module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}