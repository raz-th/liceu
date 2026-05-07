"use client";
import React, { useEffect, useRef } from "react";
import "./mainPage.css";
import { Reveal } from "@/components/Reveal";


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

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const y = window.scrollY;

    //         // imaginea lui Eminescu — se misca mai repede în sus
    //         // if (heroImgRef.current) {
    //         //     heroImgRef.current.style.transform = `translateY(${y * 0.35}px)`;
    //         // }

    //         // fake img (spacer) — același ritm
    //         if (fakeImgRef.current) {
    //             fakeImgRef.current.style.transform = `translateY(${y * 0.35}px)`;
    //         }

    //         // SVG-ul wave — se misca usor în sus
    //         // if (svgRef.current) {
    //         //     svgRef.current.style.transform = `translateY(${y * 0.15}px)`;
    //         // }

    //         // citatul — se misca mai lent decât imaginea
    //         if (textRef.current) {
    //             textRef.current.style.transform = `translateY(${y * 0.5}px)`;
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll, { passive: true });
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div className="App">
            <div className="hero">
                <div className="hero_blob"/>
                {/* <div className="hero_blob" style={{left: 10, bottom: '-5rem', top: 'unset'}}/> */}
                <div className="hero_content_liceu" ref={textRef}>
                    <h2>Mai mult decât o școală,</h2>
                    <h1>
                        <span className="first">O traditie</span>

                        <span className="last">de excelență</span>
                    </h1>
                    <p className="citat">
                        Liceul „Mihai Eminescu" este locul unde educația se împletește cu valorile, iar fiecare elev isi descopera drumul.
                    </p>
                </div>

                <img className="heroimg" ref={heroImgRef} src="/assets/heroimglic.png" style={{ willChange: "transform" }} />
                {/* <img ref={fakeImgRef} className="heroimg fake" style={{ opacity: 0, willChange: "transform" }} src="/assets/heroimg.png" /> */}
                <img className="njimg" src="/assets/nj.png" />
                <img className="coltarimg" src="/assets/coltar.png" />
                <img className="coltarimg2" src="/assets/coltar.png" />
                <div className="poezie_perspective">
                    <p>
                        Iar te-ai cufundat în stele<br />
                        Și în nori și-n ceruri nalte?<br />
                        De nu m-ai uita încalte,<br />
                        Sufletul vieții mele.<br />
                        <br />
                        În zadar râuri în soare<br />
                        Grămădești-n a ta gândire<br />
                        Și câmpiile asire<br />
                        Și întunecata mare;<br />
                        <br />
                        Piramidele-nvechite<br />
                        Urcă-n cer vârful lor mare -<br />
                        Nu căta în depărtare<br />
                        Fericirea ta, iubite!<br />
                        <br />
                        Astfel zise mititica,<br />
                        Dulce netezindu-mi părul.<br />
                        Ah! ea spuse adevărul;<br />
                        Eu am râs, n-am zis nimica.<br />
                    </p>
                </div>
            </div>

            <div className="continuare">
                
            </div>



            {/* <div className="continuare">
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
                            <Reveal key={i} delay={100*i+300}><div  className="card">
                                <img src={v.img} />
                                <p>{v.label}</p>
                            </div></Reveal>))
                    }
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div> */}

        </div>
    );
}