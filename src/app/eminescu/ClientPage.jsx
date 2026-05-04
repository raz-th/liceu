"use client";
import React, { useEffect, useRef, useState } from "react";
import "./mainPage.css";
import BackSvg, { SeparatorSvg, SeparatorSvg2 } from "./svg";
import { Reveal } from "@/components/Reveal";
import EminescuTimeline from "./Timeline";
import { poezii } from "./poezii";


const cards = [
    {
        img: "/assets/poezie.png",
        label: "Poezii",
    },
    {
        img: "/assets/proza.png",
        label: "Proze",
    },
    {
        img: "/assets/dramaturgie.png",
        label: "Dramaturgie",
    },
    {
        img: "/assets/folclor.png",
        label: "Folclor",
    }
]




export default function ClientPage() {
    const heroImgRef = useRef(null);
    const fakeImgRef = useRef(null);
    const svgRef = useRef(null);
    const textRef = useRef(null);
    const [poem, setPoem] = useState("");

    useEffect(() => {
        const rand = Math.floor(Math.random() * poezii.length);
        setPoem(poezii[rand]);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            // imaginea lui Eminescu — se misca mai repede în sus
            // if (heroImgRef.current) {
            //     heroImgRef.current.style.transform = `translateY(${y * 0.35}px)`;
            // }

            // fake img (spacer) — același ritm
            if (fakeImgRef.current) {
                fakeImgRef.current.style.transform = `translateY(${y * 0.35}px)`;
            }

            // SVG-ul wave — se misca usor în sus
            // if (svgRef.current) {
            //     svgRef.current.style.transform = `translateY(${y * 0.15}px)`;
            // }

            // citatul — se misca mai lent decât imaginea
            if (textRef.current) {
                textRef.current.style.transform = `translateY(${y * 0.5}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <div className="hero">
                <div className="hero_content" ref={textRef}>
                    <h1 >
                        <span className="first">Mihai</span>
                        <br />
                        <span className="last">Eminescu</span>
                    </h1>
                    <p className="badge" >POETUL NAȚIONAL AL ROMÂNIEI</p>
                    <p className="citat" >
                        ,,Oamenii nu se deosebesc atât prin ceea ce zic, cât prin ceea ce fac."
                    </p>
                </div>

                <img ref={heroImgRef} src="/assets/heroimgeminescu.png" style={{ willChange: "transform" }} />
                <img ref={fakeImgRef} className="fake" style={{ opacity: 0, willChange: "transform" }} src="/assets/heroimgeminescu.png" />
            </div>

            <div className="svg" ref={svgRef} style={{ willChange: "transform" }}>
                <BackSvg />
            </div>

            <div className="continuare">
                <div className="cont1">
                    <div>
                        <Reveal><h2>Despre geniul poetic</h2></Reveal>
                        <Reveal delay={100}><div className="separator" /></Reveal>
                        <Reveal delay={200}><p className="desc">
                            Mihai Eminescu a fost poet, prozator, dramaturg și jurnalist, considerat cea mai importanta voce poetica din literatura română. Opera sa, produndă și originală, a lăsat o amprentă de neșters asupra culturii nationale
                        </p></Reveal>
                        <Reveal delay={300}><img className="lacimg" src="/assets/pozalac.png" /></Reveal>
                    </div>
                    <div className="cardsCont">
                        {
                            cards.map((v, i) => (
                                <Reveal key={i} delay={100 * i + 300}><div className="card">
                                    <img src={v.img} />
                                    <p>{v.label}</p>
                                </div></Reveal>))
                        }
                    </div>
                </div>
                <div className="cont2">
                    <div className="section">
                        <EminescuTimeline />
                        {/* <img src="/assets/ceasauriu.png"/> */}
                    </div>
                    {/* <div className="separator2" ref={svgRef} style={{ willChange: "transform" }}>
                        

                    </div> */}
                    <div className={"svgSep1 separator2"}>
                        <SeparatorSvg />
                    </div>

                    <div className={"svgSep2 separator2"}>
                        <SeparatorSvg2 />
                    </div>
                    <div className="section">
                        <h1>Poezia zilei</h1>
                        <div className="underline" />
                        <p>{poem.split("<br/>").map((l, i) => (<span key={i}>{l}<br /></span>))}</p>
                    </div>
                </div>
                {/* <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /> */}
            </div>

        </div>
    );
}