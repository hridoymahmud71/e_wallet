const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss"); /* Add this line at the top */

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.setResourceRoot(process.env.MIX_ASSET_URL);


 mix.js("resources/app/js/app.js", "public/app/js/app.js")
 .sass("resources/app/css/app.scss", "public/app/css/app.css")
.react()

 .options({
     processCssUrls: false,
     postCss: [tailwindcss("./tailwind.config.js")],
 })
 .version();
