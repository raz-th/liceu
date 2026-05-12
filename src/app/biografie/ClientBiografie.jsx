"use client";
import React, { useEffect, useRef, useState } from "react";
import "./bio.css";
import BackSvg, { SeparatorSvg, SeparatorSvg2 } from "@/components/svg";
import { Reveal } from "@/components/Reveal";
import { FakeNavbar } from "@/components/NavBar";
// import { poezii } from "./poezii";


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




export default function ClientBiografie() {
    const heroImgRef = useRef(null);
    const fakeImgRef = useRef(null);
    const svgRef = useRef(null);
    const textRef = useRef(null);
    // const [poem, setPoem] = useState("");

    // useEffect(() => {
    //     const rand = Math.floor(Math.random() * poezii.length);
    //     setPoem(poezii[rand]);
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            if (window.innerWidth > 1000) {
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
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <FakeNavbar />
            <div className="hero_bio">
                <div className="hero_bio_content" ref={textRef}>
                    <div className="chapter-label">
                        <span className="chapter-era">Capitolul I — Poetul</span>
                        <div className="chapter-line"></div>
                    </div>
                    <div className="mobilTitleCont">
                        <h1 className="titluDeSectiune">
                            Omul care a dat limbii române
                            <br /> <em>sentimentul eternității</em>
                        </h1>
                        <img className="eminescuImageMobil" ref={heroImgRef} src="/assets/heroimgeminescu_431.png" style={{ willChange: "transform" }} />
                    </div>
                    {/* <img ref={fakeImgRef} className="fake" style={{ opacity: 0, willChange: "transform" }} src="/assets/heroimgeminescu.png" /> */}

                    <p className="chapter-intro">
                        15 ianuarie 1850. În Botoșani, într-o Românie care încă își căuta identitatea culturală, se naște copilul care avea să schimbe definitiv literatura română. Numele lui: Mihai Eminescu.
                    </p>
                    <p className="dropcap">
                        A fost mai mult decât un poet. A fost jurnalist, filozof, spirit critic și poate primul mare intelectual modern al culturii românești. A scris despre iubire, timp, natură și singurătate într-un fel care continuă să pară actual chiar și după mai bine de un secol.
                    </p>
                    <p>
                        Există scriitori care aparțin unei epoci. Eminescu aparține unei limbi întregi.
                    </p>
                    <p>
                        Încă din adolescență, era atras de lectură și de marile întrebări ale existenței. Studiile de la Viena și Berlin l-au apropiat de filozofie, istorie și gândirea europeană modernă, influențe care aveau să se simtă mai târziu în fiecare vers.
                    </p>
                </div>

                <img className="eminescuImage" ref={heroImgRef} src="/assets/heroimgeminescu.png" style={{ willChange: "transform" }} />

            </div>

            <div className="svg" ref={svgRef} style={{ willChange: "transform" }}>
                <BackSvg />
            </div>

            <div className="continuare_bio">
                <div className="cont1">
                    <div className="cont1_content">
                        <div>
                            <Reveal><h2>Despre geniul poetic</h2></Reveal>
                            <Reveal delay={100}><div className="separator" /></Reveal>
                            <Reveal delay={200}><p className="desc">
                                Poemele sale nu descriu doar lumi imaginare. Ele vorbesc despre fragilitatea omului, despre dorința de absolut și despre lupta dintre ideal și realitate. „Luceafărul”, considerat capodopera literaturii române, nu este doar o poveste despre iubire imposibilă. Este o reflecție asupra condiției geniului și a distanței dintre omul obișnuit și cel condamnat să vadă mai mult.
                            </p></Reveal>
                            <Reveal delay={200}><p className="desc">
                                În puțin peste trei decenii de viață, Eminescu a reușit să definească un mod de a simți românește. De aceea, numele său nu aparține doar manualelor sau statuilor. Aparține fiecărei generații care îl redescoperă.
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

                </div>
                <div className="svg2" ref={svgRef} style={{ willChange: "transform" }}>
                    <BackSvg />
                </div>
                <div className="cont2">
                    <div className="chapter-label">
                        <span className="chapter-era">CAPITOLUL II — Moștenirea</span>
                        <div className="chapter-line"></div>
                    </div>
                    <h1 className="titluDeSectiune">
                        Un nume care a devenit simbol
                    </h1>
                    {/* <div style={{height: "2rem"}}/> */}
                    <p className="dropcap">
                        Astăzi, numele lui Mihai Eminescu este purtat de instituții, biblioteci și școli din întreaga țară. Nu doar ca omagiu adus unui poet, ci ca simbol al exigenței intelectuale și al culturii autentice.
                    </p>
                    <p>
                        Un liceu care îi poartă numele nu moștenește doar o tradiție literară. Moștenește o responsabilitate: aceea de a cultiva curiozitatea, sensibilitatea și gândirea critică într-o lume din ce în ce mai grăbită.
                    </p>
                    <p>
                        Pentru generații întregi de elevi, Eminescu nu rămâne doar autorul unor poezii învățate pentru examen. Devine primul contact cu ideea că literatura poate spune adevăruri pe care realitatea nu reușește întotdeauna să le explice.
                    </p>

                    <div className="chapter-label">
                        <span className="chapter-era">CAPITOLUL III — Dincolo de timp</span>
                        <div className="chapter-line"></div>
                    </div>
                    <h1 className="titluDeSectiune">
                        De ce încă îl citim?
                    </h1>
                    {/* <div style={{height: "2rem"}}/> */}
                    <p className="dropcap">
                        Pentru că există autori care îmbătrânesc odată cu epoca lor. Și există autori care reușesc să vorbească fiecărei generații altfel, dar Mihai Eminescu rămâne prezent nu prin obligație școlară, nici prin simplul statut de „poet național”, ci prin felul în care versurile sale continuă să atingă teme universale: iubirea, trecerea timpului, singurătatea, visul, condiția omului și dorința de infinit.
                    </p>
                    <p>
                        Fiecare generație îl descoperă diferit. Pentru unii, Eminescu înseamnă nostalgia primei iubiri. Pentru alții, înseamnă melancolie, refugiu sau întrebări fără răspuns. Există cititori care îl găsesc în adolescență și îl redescoperă mai târziu, observând că aceleași versuri capătă alt sens odată cu trecerea anilor.
                    </p>
                    <p>
                        Poezia lui nu oferă răspunsuri simple. Nu încearcă să impresioneze prin optimism artificial și nici să transforme realitatea într-o poveste ușoară. Din contră, Eminescu vorbește despre neliniște, despre fragilitatea timpului și despre distanța dintre ceea ce omul visează și ceea ce poate atinge cu adevărat.
                    </p>
                </div>
            </div>

        </div>
    );
}