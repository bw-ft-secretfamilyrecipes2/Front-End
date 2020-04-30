import React from 'react'

export default function About(){
    return (
        <div class="container">

        <header>
            <h1>The Development Team</h1>
        </header>

        <section class="rside">
            <div class="ncard">
                <h2>Dawna Backmeier</h2>
                <a href="https://github.com/karanacesin"><img src={require("./pics/dawnabackmeier.jpg")} alt="Dawna with puppy"/></a>
                <p>User Interface/Web Design</p>
            </div>
        </section>

        <section class="lside">
            <div class="ncard">
                <h2>Aldair Balanzar</h2>
                <a href="https://github.com/aldairbalanzar"><img src={require("./pics/aldairbalanzar.png")} alt="Aldair Balanzar"/></a>
                <p>Backend Developer</p>
            </div>
        </section>

        <section class="rside">
            <div class="ncard">
                <h2>Angela Laien</h2>
                <a href="https://github.com/angela-laien"><img src={require("./pics/angela.png")} alt="Angela"/></a>
                <p>Backend Developer</p>
            </div>
        </section>

        <section class="lside">
            <div class="ncard">
                <h2>Kristian Correa</h2>
                <a href="https://github.com/KristianCorrea"><img src={require("./pics/kristian correa.jpg")} alt="Kristian Correa"/></a>
                <p>Frontend Developer</p>
            </div>
        </section>

        <section class="rside">
            <div class="ncard">
                <h2>Nathan Howland</h2>
                <a href="https://github.com/NateyLB"><img src={require("./pics/nathanhowland.png")} alt="Nathan Howland"/></a>
                <p>Frontend Developer</p>
            </div>
        </section>

        <section class="lside">
            <div class="ncard">
                <h2>Jay Leach</h2>
                <a href="https://github.com/leachcoding"><img src={require("./pics/jayleach.jpg")} alt="Jay in front of the ocean"/></a>
                <p>Project Lead</p>
            </div>
        </section>

    </div>
    )
}

