import './style.css'
import './assets/styles/fonts.css'
import gsap from 'gsap'
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(DrawSVGPlugin,GSDevTools,Observer,ScrollTrigger,SplitText);



const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelectorAll(".nav-links li")
const menuTopline = document.querySelector(".top-line")
const menuBottomline = document.querySelector(".bottom-line")
const menuDot = document.querySelector(".dot")

gsap.set([menuTopline, menuBottomline, menuDot], {transformOrigin: "center"})

const menuOpen = gsap.timeline(({paused:true}))
menuOpen.to(menuTopline, {rotation: 45, y: -30})
.to(menuBottomline, {rotation: -45, y: 30}, "<")
.to(menuDot, {x: -80, y: 30}, "<")
.from(nav, {y: -70, duration: 1, ease: "power2.inOut", opacity: 0, stagger: 0.05}, "-=80%")


menuToggle.addEventListener("click", () => {
    if(menuToggle.getAttribute("aria-expanded") === "false") {
        menuToggle.setAttribute("aria-expanded", "true")
        menuOpen.play()
    } else {
        menuToggle.setAttribute("aria-expanded", "false")
        menuOpen.reverse()
    }
})
