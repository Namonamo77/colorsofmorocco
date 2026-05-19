import './style.css'
import './assets/styles/fonts.css'
import gsap from 'gsap'
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(DrawSVGPlugin,GSDevTools,Observer,ScrollTrigger,SplitText);




