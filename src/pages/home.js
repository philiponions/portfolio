import Navbar from "../components/Navbar";
import TypeWriter from "../components/TypeWriter";
// pages/_app.js
import { Poppins } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { motion } from "framer-motion"
import AnimatedTitle from "../components/AnimatedTitle";
import Section from "../components/Section";
import Project from "@/components/Project";
import Menu from "@/components/Menu";
// import mysql from '../images/mysql.svg' // relative path to image 

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const raleway = Raleway({
    weight: '400',
    subsets: ['latin'],
  })
const raleway2 = Raleway({
    weight: '700',
    subsets: ['latin'],
})

export default function Home() {
  return (         
      <div>        
        <div className={poppins.className}>      
          <div class="flex flex-col-reverse md:flex-row items-center justify-center p-16 gap-32 md:gap-0">
            <div class="lg:w-1/2 lg:center-left text-center md:text-left mt-20">
              <AnimatedTitle text={"Hey There!"}/>     
              <motion.span className="inline-block" initial={{ opacity: 0, y: "0.25em" }} animate={{ opacity: 1, y: "0em", transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }}>    
                <h3 class="text-3xl">I'm Huey Gonzales, </h3>
              </motion.span>  
              <br/>
              <motion.span className="inline-block" initial={{ opacity: 0, y: "0.25em" }} animate={{ opacity: 1, y: "0em", transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }}>    
                <h3 class="text-3xl"> and I'm a</h3>
              </motion.span>  
              <motion.span className="inline-block" initial={{ opacity: 0, y: "0.25em" }} animate={{ opacity: 1, y: "0em", transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }}>    
                <h3 class="text-3xl font-extrabold">Software Developer</h3> 
              </motion.span>                                 
            </div>
            <div class="md:ml-32 ml-0 mt-20">
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}><img class="transform scale-125 rounded-full" height="302" width="361" src="../images/profile.jpg"/></motion.div>              
            </div>                      
           </div>
        </div>
        <div className={raleway2.className}>
           <div class="p-2 md:p-16" id="section-2">
                          
                <Section>                    
                    <h3 class="text-3xl font-extrabold text-center lg:text-left">About</h3>  
                </Section>
                <div>
                    <Section>
                        <div class="shadow-lg p-8 md:text-left text-center">
                            <h1 class="text-2xl font-bold">
                            Hi there. It's Huey 😃
                            </h1>
                            <div>
                                <p className={raleway.className}>
                                    I’m a <b>Software Developer</b> and a student currently studying at the <b>University of Alberta. </b> 
                                    I am currently in my third year of studies. I have experience making full-stack web/mobile applications.
                                </p>
                            </div>
                        </div>
                    </Section>                    
                    <Section>
                        <div class="shadow-lg p-8 md:text-left text-center">
                            <h1 class="text-2xl font-bold">
                            Programming Languages
                            </h1>
                            <div class="">
                                <p className={raleway.className}>
                                I'm quite proficient in the following:
                                </p>                                                        
                                <div class="flex gap-2 my-4 flex-wrap justify-center md:justify-start">
                                    <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"/>
                                    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
                                    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
                                    <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/>
                                    <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
                                    <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"/>
                                </div>                            
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div class="shadow-lg p-8 my-10 md:text-left text-center">
                            <h1 class="text-2xl font-bold">
                            Tech Stacks
                            </h1>
                            <div>
                                <p className={raleway.className}>I’ve used a handful of tools, libraries and frameworks personally and professionally.</p>
                                <center class="my-8">
                                    <p className={raleway.className}>
                                    Some of which include:
                                    </p>
                                </center>
                                <center>
                                    <div class="flex grid lg:grid-cols-4 sm:grid-cols-2 items-center gap-4">
                                        <div><img width="90" src="../images/mysql.svg"/><p>MySql</p></div>
                                        <div><img width="90" src="../images/react.svg"/><p>React/React Native</p></div>
                                        <div><img width="100" src="../images/node.svg"/><p>Node.js</p></div>
                                        <div><img width="230" src="../images/express.svg"/><p>Express.js</p></div>
                                        <div><img width="80" src="../images/firebase.svg"/><p>Google Firebase</p></div>
                                        <div><img width="200" src="../images/mongodb.svg"/><p>MongoDB</p></div>
                                        <div><img width="90" src="../images/android.svg"/><p>Android Studio</p></div>
                                        <div><img width="100" src="../images/unity.svg"/><p>Unity</p></div>
                                    </div>                                    
                                </center>
                            </div>
                        </div>
                    </Section>
                    <Section>                        
                        <div class="shadow-lg pt-8 px-8 my-10">
                            <h1 class="text-2xl font-bold text-center lg:text-left">
                            Work Experience
                            </h1>
                            <div className={raleway.className}> 
                                <Section>                            
                                    <div class="flex md:flex-row flex-col justify-between p-0 md:p-16 w-full items-center">
                                        <a href="https://projecthumancity.com/" target="_blank"><img src="../images/phclogo.png"></img></a>
                                        <div class="w-full ml-0 md:ml-32">
                                            <h1 class="text-1.5xl font-black md:text-left text-center">Software Developer Intern</h1>
                                            <div class="flex md:justify-between justify-center lg:flex-row flex-col md:items-start items-center">
                                                <h2 class="text-xl font-black">Project: Human City</h2>
                                                <h2 class="text-xl font-black italic">Jan 2023-Apr 2023</h2>
                                            </div>
                                            <ul class="list-disc my-10 grid gap-3">
                                                <li>I worked with a team of 3 to build an automated content moderation system integrated in multiple online platforms by Project: Human City</li>
                                                <li>My role was to construct a REST API which was part of the system that creates new report documents to the database.</li>
                                                <li>I built the API wth Node.js and Express and integrated it with a Python FastAPI that my teammates made which detects explicit content in audios/videos/images with pre-trained models and profanity libraries.</li>
                                            </ul>
                                        </div>
                                    </div>                            
                                </Section>                                                     
                            </div>
                            <div className={raleway.className}>
                                <Section>
                                    <div class="flex md:flex-row flex-col justify-between p-0 md:p-16 w-full items-center">
                                        <a target="_blank" href="https://thepowdermill.ca/"><img src="../images/pmlogo.png"></img></a>
                                        <div class="w-full ml-0 md:ml-32">
                                            <h1 class="text-1.5xl font-black md:text-left text-center">Software Developer Intern</h1>
                                            <div class="flex md:justify-between justify-center lg:flex-row flex-col md:items-start items-center">
                                                <h2 class="text-xl font-black">The Powdermill</h2>
                                                <h2 class="text-xl font-black italic">May 2022-Aug 2022</h2>
                                            </div>
                                            <ul class="list-disc my-10 grid gap-3">
                                                <li>I worked as a solo developer for an industrial service company</li>
                                                <li>My role was to optimize their business workflow by developing a full stack web application with MySQL, React, Node and Express</li>
                                                <li>I built various systems/features such as order tracking, daily and monthly inspections, inventory and etc..</li>
                                            </ul>
                                        </div>
                                    </div>                            
                                </Section>                                                      
                            </div>
                        </div>
                    </Section>                   
                </div>     
           </div>
           <div class="px-2 md:px-16">
                    <Section>
                        <div id="section-3"/>
                        <h3 class="text-3xl font-extrabold text-center lg:text-left">Projects</h3>  
                        <div class="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4"> 
                            <a target="_blank" href="https://github.com/philiponions/FormuLister-Mobile-App"><Project src="../images/formulister.png" tech="React Native, Flask, MongoDB, Node.js, Express, Docker" name="FormuLister" desc="A mobile app that allows you to conveniently reuse math formulas you use everyday."></Project></a>       
                            <a target="_blank" href="https://who-is-teaching.netlify.app/"><Project src="../images/whoisteaching.png" tech="Node.js, Express, React, Material UI" name="Who-is-Teaching?" desc="A website that allows you to view ratings of the professors who are currently teaching at uAlberta"/></a>             
                            <a target="_blank" href="https://www.youtube.com/watch?v=wD61rurNSts"><Project src="../images/qradventure.png" tech="Android Studio, Java, XML, Firebase, Figma" name="QRAdventure" desc="An android game that gamifies the collection of scanning QR Codes!"/></a>       
                            <a target="_blank" href="https://gameslib.onrender.com/swagger/index.html"><Project src="../images/gameslib.png" tech="C#, ASP.NET Core, SQLite, Docker" name="GamesLibrary" desc="A REST API made in .NET Core which connects to a database filled with over 1000+ games"/></a>       
                            <a target="_blank" href="https://github.com/philiponions/MyFriends"><Project src="../images/myfriends.png" tech="React Native" name="MyFriends" desc="A mobile application that lets you store details about your friends (like their birthdays!)"/></a>
                            <a target="_blank" href="https://portfolio-eosin-ten.vercel.app/"><Project src="../images/portfolio.png" tech="Next.js, Tailwind CSS" name="This Portfolio" desc="The portfolio you're looking at right NOW. Made in Next.js with tailwind css.."/></a>                                          
                        </div>    
                    <center id="section-4" class="m-5"> Contact Page coming soon! :)</center>
                    </Section>
            </div>
        </div>    
                 
      </div>
  )
}
