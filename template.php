<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />

    <link rel="stylesheet" type="text/css" media="all" href="/niko3/css/all.css" />
    <link rel="stylesheet" type="text/css" media="all" href="/niko3/shared/shared.css" />
    <!-- <link rel="stylesheet" type="text/css" media="all" href="/niko3/css/responsive.css" />  -->

    <title>Adam Project</title>
</head>

<body class="<?php echo $body_class; ?>">
    <div class="header" id="header">
        <a class="logo" id="logo" href="index.php">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#231F20" width="38" height="32" viewBox="0 0 38 32">
                <path xmlns="http://www.w3.org/2000/svg" fill="#231F20" d="m1.41 0 14.7 8.21L30.808 0H1.41ZM15.215 32V9.995L0 1.505 15.215 32ZM17.003 32V9.995l15.215-8.49L17.003 32ZM38.007 9.308"/>
            </svg>
            <!-- <img src="/niko3/images/template/logo_secretlab_solo.svg" alt="LOGO" /></a> -->
        <div class="primary-nav">
            <ul>
                <li>
                    <a href="about-us.php">About Us</a>
                </li>
                <li>
                    <a href="coming-soon.php">Coming Soon</a>
                </li>
                <li>
                    <a href="portfolio.php">Portfolio</a>
                </li>
                <li>
                    <a href="contact-us.php">Contact Us</a>
                </li>
                 <li>
                    <a href="calendar.php">Calendar</a>
                </li>
            </ul>

            <a href="#" class="nav-toggle" id="nav-toggle">
                <span class="hamburger-1"></span>
                <span class="hamburger-2"></span>
                <span class="hamburger-3"></span>
            </a>
        </div> <!-- /.primary-nav -->
    </div> <!-- /.header -->

    <div class="page-banner-wrap">
        <div class="page-banner">
            <div class="wrapper">
                <h1><?php echo $html_header; ?></h1>
            </div> <!-- /.wrapper -->
        </div> <!-- /.page-banner -->
    </div> <!-- /.page-banner-wrap -->


    <div class="main-area">
        <div class="main-area-wrap">
            <?php echo $html_content; ?>
        </div> <!-- /.main-area-wrap -->
    </div> <!-- /.main-area -->

    <div class="footer">
        <div class="wrapper">
            <div class="footer-left">
                <div class="logo"><span>D</span>igital<span>G</span>allery</div>
            </div>

            <div class="footer-right">
                <div class="footer-nav">
                    <ul>
                        <li>
                            <a href="about-us.php">About Us</a>
                        </li>
                        <li>
                            <a href="coming-soon.php">Coming Soon</a>
                        </li>
                        <li>
                            <a href="portfolio.php">Portfolio</a>
                        </li>
                        <li>
                            <a href="contact-us.php">Contact Us</a>
                        </li>
                        <li>
                            <a href="calendar.php">Calendar</a>
                        </li>
                    </ul>
                </div> <!-- /.footer-nav -->

                <div class="social-media-icons">
                    <ul>
                        <li>
                            <a href="www.facebook.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M642.3-66.4H626.2a3.949,3.949,0,0,0-3.95,3.95v16.1a3.95,3.95,0,0,0,3.95,3.95h16.1a3.95,3.95,0,0,0,3.95-3.95v-16.1A3.949,3.949,0,0,0,642.3-66.4Zm.065,7.051H640.1c-1.31,0-1.4.489-1.4,1.4L638.7-55.5h3.616l-.543,3.736H638.7v9.352h-3.754v-9.352h-3.19V-55.5h3.19v-2.309c0-2.853,1.185-5.044,4.549-5.044h2.875Z" transform="translate(-622.251 66.404)" fill="#000"/></svg></a>
                        </li>
                        <li>
                            <a href="www.instagram.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M774.2-60.81a1.44,1.44,0,0,1-1.44,1.44,1.44,1.44,0,0,1-1.44-1.44,1.44,1.44,0,0,1,1.44-1.44A1.44,1.44,0,0,1,774.2-60.81ZM766.357-50.4a4,4,0,0,1-4-4,4,4,0,0,1,4-4,4,4,0,0,1,4,4A4,4,0,0,1,766.357-50.4Zm0-10.162a6.162,6.162,0,0,0-6.163,6.162,6.162,6.162,0,0,0,6.163,6.162,6.162,6.162,0,0,0,6.162-6.162A6.162,6.162,0,0,0,766.357-60.566Zm0-3.676c3.2,0,3.583.012,4.849.07a6.639,6.639,0,0,1,2.228.413,3.725,3.725,0,0,1,1.38.9,3.709,3.709,0,0,1,.9,1.38,6.633,6.633,0,0,1,.414,2.228c.057,1.266.07,1.645.07,4.849s-.013,3.584-.07,4.849a6.627,6.627,0,0,1-.414,2.228,3.709,3.709,0,0,1-.9,1.38,3.725,3.725,0,0,1-1.38.9,6.639,6.639,0,0,1-2.228.413c-1.266.058-1.645.07-4.849.07s-3.584-.012-4.85-.07a6.639,6.639,0,0,1-2.228-.413,3.724,3.724,0,0,1-1.38-.9,3.713,3.713,0,0,1-.9-1.38,6.625,6.625,0,0,1-.414-2.228c-.057-1.265-.07-1.645-.07-4.849s.013-3.583.07-4.849A6.631,6.631,0,0,1,757-61.481a3.709,3.709,0,0,1,.9-1.38,3.724,3.724,0,0,1,1.38-.9,6.639,6.639,0,0,1,2.228-.413C762.773-64.23,763.152-64.242,766.357-64.242Zm0-2.162c-3.259,0-3.668.014-4.948.072a8.792,8.792,0,0,0-2.913.558,5.873,5.873,0,0,0-2.125,1.384,5.873,5.873,0,0,0-1.384,2.125,8.8,8.8,0,0,0-.558,2.913c-.059,1.28-.072,1.689-.072,4.948s.013,3.668.072,4.947a8.786,8.786,0,0,0,.558,2.913,5.877,5.877,0,0,0,1.384,2.126,5.886,5.886,0,0,0,2.125,1.384,8.849,8.849,0,0,0,2.913.558c1.28.058,1.689.072,4.948.072s3.667-.014,4.947-.072a8.843,8.843,0,0,0,2.913-.558,5.886,5.886,0,0,0,2.125-1.384,5.879,5.879,0,0,0,1.385-2.126,8.814,8.814,0,0,0,.557-2.913c.059-1.279.073-1.688.073-4.947s-.014-3.668-.073-4.948a8.825,8.825,0,0,0-.557-2.913,5.876,5.876,0,0,0-1.385-2.125,5.886,5.886,0,0,0-2.125-1.384,8.791,8.791,0,0,0-2.913-.558C770.024-66.39,769.616-66.4,766.357-66.4Z" transform="translate(-754.357 66.404)" fill="#000"/></svg></a>
                        </li>
                        <li>
                            <a href="www.linkedin.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M642.3-66.4H626.2a3.949,3.949,0,0,0-3.95,3.95v16.1a3.95,3.95,0,0,0,3.95,3.95h16.1a3.95,3.95,0,0,0,3.95-3.95v-16.1A3.949,3.949,0,0,0,642.3-66.4Zm.065,7.051H640.1c-1.31,0-1.4.489-1.4,1.4L638.7-55.5h3.616l-.543,3.736H638.7v9.352h-3.754v-9.352h-3.19V-55.5h3.19v-2.309c0-2.853,1.185-5.044,4.549-5.044h2.875Z" transform="translate(-622.251 66.404)" fill="#000"/></svg></a>
                        </li>
                        <li>
                            <a href="www.twitter.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M686.336-66.4h-16.1a3.95,3.95,0,0,0-3.95,3.95v16.1a3.951,3.951,0,0,0,3.95,3.95h16.1a3.95,3.95,0,0,0,3.95-3.95v-16.1A3.949,3.949,0,0,0,686.336-66.4Zm-2.325,9.062c.006.127.008.254.008.382a8.347,8.347,0,0,1-8.4,8.4,8.358,8.358,0,0,1-4.529-1.328,6.324,6.324,0,0,0,.705.041,5.925,5.925,0,0,0,3.669-1.266,2.955,2.955,0,0,1-2.758-2.051,2.986,2.986,0,0,0,.556.053,2.975,2.975,0,0,0,.778-.1,2.954,2.954,0,0,1-2.37-2.9v-.036a2.951,2.951,0,0,0,1.338.369,2.948,2.948,0,0,1-1.314-2.457,2.94,2.94,0,0,1,.4-1.485,8.375,8.375,0,0,0,6.088,3.087,2.855,2.855,0,0,1-.078-.672,2.955,2.955,0,0,1,2.954-2.954,2.953,2.953,0,0,1,2.157.932,5.912,5.912,0,0,0,1.875-.717,2.951,2.951,0,0,1-1.3,1.635,5.924,5.924,0,0,0,1.69-.462l.005-.006,0,0-.007,0A5.971,5.971,0,0,1,684.011-57.342Z" transform="translate(-666.286 66.404)" fill="#000"/></svg></a>
                        </li>
                    </ul>
                </div> <!-- /.social-media-icons -->
            </div> <!-- /.footer-right -->
        </div> <!-- /.wrapper -->
    </div> <!-- /.footer -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script type="text/javascript" src="/niko3/shared/jquery/jquery.waitforimages.js"></script>
    <script type="text/javascript" src="/niko3//shared/jquery//jquery.cycle.all.js"></script>
    <script type="text/javascript" src="/niko3/shared/shared.js"></script>
    <script type="text/javascript" src="/niko3/js/main.js"></script>
</body>
</html>