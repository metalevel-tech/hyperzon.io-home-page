<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/public/images/interface/favicon.ico" sizes="32x32" />
    <link rel="icon" type="image/svg+xml" href="/public/images/interface/hyperzon-logo.svg" sizes="any" />
    <link rel="apple-touch-icon" href="/public/images/interface/hyperzon-logo_x192.png" />
    <link rel="manifest" href="/manifest.json" />

    <meta name="background-color" content="#003e8f" />
    <meta name="theme-color" content="#c0fd45" />
    <meta name="msapplication-navbutton-color" content="#003e8f" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#c0fd45" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> -->


    <title>Hyperzon | Full Service Amazon Marketing Agency</title>

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Hyperzon | Full Service Amazon Marketing Agency" />
    <meta property="og:description" content="A team of professionals and creators with 10+ years of industry experience and in-depth knowledge of the e-commerce universe. Our company helps brand owners grow their businesses on Amazon and achieve sustainability across different marketplaces. We assist our customers through every step of the process by providing Full Amazon Support Services, Brand Identity, as well as Photo & Video Content." />
    <meta property="og:url" content="" />
    <meta property="og:image" content="/public/images/share.jpg" />

    <meta name="Hyperzon" content="Full Service Amazon Marketing Agency" />
    <meta name="description" content="A team of professionals and creators with 10+ years of industry experience and in-depth knowledge of the e-commerce universe. Our company helps brand owners grow their businesses on Amazon and achieve sustainability across different marketplaces. We assist our customers through every step of the process by providing Full Amazon Support Services, Brand Identity, as well as Photo & Video Content." />

    <?php
    // Req::resource("GoogleTagManager-head");
    ResourceLoader::hook("head");
    ?>

</head>

<body class="<?php global $ROUTE;  echo $ROUTE ?>">
    <div id="app">
        <?php
        // Req::resource("GoogleTagManager-body");
        ResourceLoader::hook("body-top");

        Req::element("MenuMain");
        ?>
        <div id="body-scrollable-content">

            <?php
            Req::element("Hero");
            ResourceLoader::hook("hero-after");
            ?>
            <div id="body-content">

