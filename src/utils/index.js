let production = 'production'
let local = 'local'

let mode = production;

let local_api = "http://localhost:5000"
let production_api = "https://backend-cxqu.onrender.com"

let app_url = "", api_url = ""

if (mode === production) {
    app_url = "https://my-shop-one-sand.vercel.app"
    api_url = production_api
} else {
    app_url = "http://localhost:3001"
    api_url = local_api
}

export { app_url, api_url }