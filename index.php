<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css"> 
    
    <title>Treasure Hunt</title>
</head>
<body>
<div class="global-container">
    <div class="spacer-top-bottom"></div>
    <div class="spacer-top-bottom"></div>
    <div class="title-box">
        Treasure Hunt
    </div>
    <div class="identity-box">
        Identity, Maths Club of IISER Kolkata
        <div class="border-art">
            <img id="border-img" src="img/border.png" alt="">
        </div>
    </div>
    <div class="textblock">
        Welcome to the online Mathematics Treasure Hunt!
        You can participate individually, or in a group of up to 3 members.
    </div>
    <div class="textblock">
        The winning individual/team will receive a prize of <b>Rs. 512</b>!
    </div>
    <div class="textblock">
        The contest will open on <b>22 December, 2021</b> at <b>10:00 am</b>.
        Once it does, press <i>start</i> to begin solving.
        Typing in the correct answer to each question will lead you to the next one.
        Remember to keep track of your answers.
        The fastest to reach the end and submit their answers wins!
    </div>
    <div class="button-box">
        <?php
                if (time() < 1640147400) {
                        echo '<a class="button" id="registerButton" href="https://docs.google.com/forms/d/e/1FAIpQLSeMKy1Ytr3wZgnvOelqi1SKRgG7dKdFvf6eL9bLQxFRL9T7GQ/viewform?usp=sf_link">Register</a>';
                        echo '<a class="button disabled" id="startButton" href="#">Start</a>';
                } else {
                        echo '<a class="button disabled" id="registerButton" href="#">Register</a>';
                        echo '<a class="button" id="startButton" href="./64a3e813963b3cd23f932b57199b106ad0bfaa932137925193ed6ce1254fbe6b/">Start</a>';
                }
        ?>
    </div>
    <div class="textblock">
        The contest will officially close at 10:00 pm on the same day. Expect a
        combination of puzzles, riddles, and problems; but beware! If you are
        not careful, you might take a false turn and lose valuable time!
    </div>
    <div class="textblock">Happy hunting!</div>
    <div class="textblock">
        <i>This event has been organized by Identity, the Maths Club of IISER
        Kolkata as part of our National Mathematics Day celebrations. The date
        22 December, 2021 marks the 134th birth anniversary of the great Indian
        mathematician Srinivasa Ramanujan.</i>
    </div>
    <div class="spacer-top-bottom"></div>
    <div class="menu-links">
        <a id="home" class="current" href="./">Home</a>
        <a id="contact" href="./contact/">Contact</a>
        <a id="credits" href="./credits/">Credits</a>
        <a id="identity" href="https://www.iiserkol.ac.in/~maths.club/">Identity</a>
    </div>
    <div class="spacer-top-bottom"></div>
</div>
</body>
</html>
