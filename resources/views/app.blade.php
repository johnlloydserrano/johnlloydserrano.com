<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>John Lloyd Serrano</title>
        <meta name="description" content="John Lloyd Serrano is a dedicated web developer with a foundation built on professional growth and hands-on experience. He contributes to collaborative projects, helping deliver practical and reliable solutions that support both team goals and client needs.">
        <meta name="author" content="John Lloyd Serrano">

        <meta property="og:title" content="John Lloyd Serrano">
        <meta property="og:description" content="John Lloyd Serrano is a dedicated web developer with a foundation built on professional growth and hands-on experience. He contributes to collaborative projects, helping deliver practical and reliable solutions that support both team goals and client needs.">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:type" content="website">
        <meta property="og:image" content="https://cloudfront.johnlloydserrano.com/public/images/static/serrano-meta.png">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="John Lloyd Serrano">
        <meta name="twitter:description" content="John Lloyd Serrano is a dedicated web developer with a foundation built on professional growth and hands-on experience. He contributes to collaborative projects, helping deliver practical and reliable solutions that support both team goals and client needs.">
        <meta name="twitter:image" content="https://cloudfront.johnlloydserrano.com/public/images/static/serrano-meta.png">

        <link rel="icon" href="https://cloudfront.johnlloydserrano.com/public/images/static/serrano.png" type="image/x-icon">
        
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WQX4319GHS"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WQX4319GHS');
        </script>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
