<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ env("APP_NAME") }}</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;600;700;900&family=Roboto:wght@100;300;400;700;900&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('app/css/app.css') }}" rel="stylesheet">


    <!-- Scripts -->
    <script src="{{ mix('app/js/app.js') }}" defer></script>
    <style>
        :root {
            
        }
       

    </style>

<script>
    var MYAPP = {};
    window.app_settings = @json($settings);    
</script>

</head>

<body>
    <noscript>To run this application, JavaScript is required to be enabled.</noscript>
    <div id="root">
    </div>


</body>



</html>
