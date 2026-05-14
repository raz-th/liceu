'use client';
import "./mainPage.css";
import { Reveal } from "@/components/Reveal";
import EminescuTimeline from "@/components/Timeline";
import { FakeNavbar } from "@/components/NavBar";
import { useTheme } from "@/context/NavContext";
import { useEffect, useState } from "react";

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
  },
];

const events1 = [
  {
    year: "1 sept. 1926",
    text: "Deschiderea liceului cu 160 de elevi, în localul școlii primare nr. 31, Floreasca. Director: Victor Papacostea.",
  },
  {
    year: "28 nov. 1926",
    text: 'Regele Ferdinand I semnează decretul regal prin care liceului i se acordă numele „Mihai Eminescu".',
  },
  {
    year: "1927–1930",
    text: "Sub C. Niculescu-Slavea, efectivul de elevi se dublează. Prin efort comunitar, se strâng fonduri pentru o clădire proprie.",
  },
  {
    year: "1958",
    text: "Liceul, inițial exclusiv de băieți, se extinde și integrează noi spații, absorbind instituții vecine din zona Antim.",
  },
  {
    year: "2000",
    text: "Ministerul Educației acordă titlul de Colegiu Național — recunoașterea oficială a unui prestigiu construit în decenii.",
  },
];

const events2 = [
  {
    year: "2026",
    text: "Centenarul fondării — o oportunitate de a reconecta generații de absolvenți și de a scrie următorul capitol al istoriei instituționale. ",
  },
  {
    year: "Educație hibridă",
    text: "Integrarea tehnologiei fără a pierde esența relației profesor–elev. Platformele digitale ca instrumente, nu ca înlocuitori. ",
  },
  {
    year: "Arhivă vie",
    text: " Digitalizarea documentelor istorice, a fotografiilor și a mărturiilor absolvenților — o memorie instituțională accesibilă tuturor. ",
  },
  {
    year: "Comunitate",
    text: "Rețeaua de alumni — oameni care au fost formați de această instituție și care, la rândul lor, pot contribui la formarea generațiilor viitoare. ",
  },
];

export default function ClientPage() {
  const { isWhiteMode } = useTheme();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => { isWhiteMode(false) }, []);
  // const heroImgRef = useRef(null);
  // const fakeImgRef = useRef(null);
  // const svgRef = useRef(null);
  // const textRef = useRef(null);

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
      <div style={{ backgroundColor: "#fcfbf7" }}>
        <FakeNavbar />
        <div className="hero">
          <div className="hero_blob" />
          {/* <div className="hero_blob" style={{left: 10, bottom: '-5rem', top: 'unset'}}/> */}
          <div className="hero_content_liceu">
            <Reveal>
              <h2>Mai mult decât o școală,</h2>
            </Reveal>
            <h1>
              <Reveal delay={100}>
                <span className="first">O traditie</span>
              </Reveal>

              <Reveal delay={200}>
                <span className="last">de excelență</span>
              </Reveal>
            </h1>
            <Reveal delay={300}>
              <p className="citat">
                Liceul „Mihai Eminescu" este locul unde educația se împletește cu
                valorile, iar fiecare elev isi descopera drumul.
              </p>
            </Reveal>
          </div>

          <img
            className="heroimg"
            // ref={heroImgRef}
            src={width<700?"/assets/heroimglic_431.png":"/assets/heroimglic.png"}
            style={{ willChange: "transform" }}
          />
          {/* <img ref={fakeImgRef} className="heroimg fake" style={{ opacity: 0, willChange: "transform" }} src="/assets/heroimg.png" /> */}
          <img className="njimg" src="/assets/nj.png" />
          <img className="coltarimg" src="/assets/coltar.png" />
          <img className="coltarimg2" src="/assets/coltar.png" />
          <div className="poezie_perspective">
            <p>
              Iar te-ai cufundat în stele
              <br />
              Și în nori și-n ceruri nalte?
              <br />
              De nu m-ai uita încalte,
              <br />
              Sufletul vieții mele.
              <br />
              <br />
              În zadar râuri în soare
              <br />
              Grămădești-n a ta gândire
              <br />
              Și câmpiile asire
              <br />
              Și întunecata mare;
              <br />
              <br />
              Piramidele-nvechite
              <br />
              Urcă-n cer vârful lor mare -<br />
              Nu căta în depărtare
              <br />
              Fericirea ta, iubite!
              <br />
              <br />
              Astfel zise mititica,
              <br />
              Dulce netezindu-mi părul.
              <br />
              Ah! ea spuse adevărul;
              <br />
              Eu am râs, n-am zis nimica.
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="continuare">

        {/* <EminescuTimeline/> */}
        <section>
          <div className="continuareContent">
            <Reveal>
              <div className="chapter-label">
                <span className="chapter-era">Capitolul I — Trecut</span>
                <div className="chapter-line"></div>
              </div>
            </Reveal>
            <Reveal>
              <h1 className="titluDeSectiune">
                Un liceu care încearcă
                <br /> <em>să transforme ambiția în tradiție</em>
              </h1>
            </Reveal>

            <Reveal>
              <p className="chapter-intro">
                1 septembrie 1926. Floreasca, un cartier de la marginea Bucureștiului
                interbelic. Primul sunet al clopotului și istoria începe.
              </p>
            </Reveal>

            <Reveal>
              <p className="dropcap">
                Era o zi de început de septembrie, caldă și prafuită, când 160 de
                elevi au urcat pentru prima oară scările unui liceu nou, găzduit
                provizoriu în localul școlii primare nr. 31 din Floreasca. Nu era
                nicio clădire grandioasă, nicio fanfară. Era o idee: că și copiii
                din cartierele muncitorești ale Capitalei merită o educație
                adevărată.
              </p>
            </Reveal>

            <Reveal>
              <p>
                Ideea a fost pusă în practică de Victor Papacostea, primul director
                al liceului, un intelectual cu viziune care a înțeles că o școală
                valoroasă nu se construiește din cărămidă, ci din oameni. A reușit
                să adune în jurul său un corp profesoral remarcabil, o echipă care
                ar fi făcut invidie oricărui liceu cu tradiție din centrul orașului.
              </p>
            </Reveal>

            <Reveal>
              <p>
                La 28 noiembrie 1926, regele Ferdinand I a semnat actul constitutiv
                prin care liceului i s-a acordat oficial numele Mihai Eminescu, o
                alegere profund simbolică. Ce alt nume ar fi putut purta o școală
                menită să nască iubitori de limbă română, de cultură și de frumos?
              </p>
            </Reveal>

            <Reveal>
              <p>
                Creșterea a fost rapidă. Sub al doilea director, C.
                Niculescu-Slavea (1927-1930), efectivul de elevi s-a dublat.
                Comunitatea s-a mobilizat: liste de subscripție în cartier, taxe
                suplimentare colectate cu răbdare, bani adunați leu cu leu pentru a
                construi ceva durabil. Rezultatul a fost o clădire proprie pe Calea
                Dorobanților, un sediu cu identitate.
              </p>
            </Reveal>

            <Reveal>
              <div
                className="pullquote"
                role="figure"
                aria-label="Citat emblematic"
              >
                „Un liceu nu e o clădire. E o promisiune făcută generațiilor care nu
                s-au născut încă."
                <cite>spiritul școlilor interbelice românești</cite>
              </div>
            </Reveal>

            <EminescuTimeline events={events1} title={null} />

            <Reveal>
              <p>
                Provocările prezentului sunt reale: digitalizarea educației,
                concurența cu liceele de top din centrul orașului, presiunea
                examenelor și întrebarea pe care fiecare generație și-o pune: de
                ce mai contează o instituție cu tradiție, când informația e la un
                click distanță?
              </p>
            </Reveal>

            <Reveal>
              <p>
                Răspunsul vine din ceea ce o școală oferă dincolo de cunoștințe: un
                mod de a gândi, un ritm, o exigență interiorizată. Acestea nu se
                găsesc pe YouTube. Se construiesc în timp, în sălile de clasă, în
                discuțiile cu profesori care știu mai mult decât ești dispus să
                asculți.
              </p>
            </Reveal>
            <Reveal>
              <div className="oldPhotoContainer">
                <img src="/assets/liceu1998.jpg" />
                <p>Fațada liceului „Mihai Eminescu", 1998</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="doi">
          <img className="coltarimg" src="/assets/coltar.png" />
          <img className="coltarimg2" src="/assets/coltar.png" />
          <div className="continuareContent">
            <Reveal>
              <div className="chapter-label">
                <span className="chapter-era">Capitolul II — Prezent</span>
                <div className="chapter-line"></div>
              </div>
            </Reveal>
            <Reveal>
              <h1 className="titluDeSectiune">
                Aproape o sută de ani
                <br /> <em>și liceul nu și-a pierdut suflul</em>
              </h1>
            </Reveal>

            <Reveal>
              <p className="chapter-intro">
                Strada George Georgescu nr. 2, Sector 4. Același spirit, alte
                generații, alte provocări, dar aceeași promisiune.
              </p>
            </Reveal>

            <Reveal>
              <p className="dropcap">
                Astăzi, Colegiul National „Mihai Eminescu" este o instituție cu
                aproximativ 1.400 de elevi, situată în Sectorul 4 al Capitalei. O
                școală de ciclu complet, primar, gimnazial și liceal, care oferă
                unui adolescent posibilitatea de a-și face întreg parcursul formativ
                într-un singur loc, înconjurat de aceeași comunitate și aceeași
                cultură instituțională.
              </p>
            </Reveal>

            <Reveal>
              <p>
                În anul 2000, după decenii de performanță acumulată, Ministerul
                Educației a acordat titlul de Colegiu National, o distincție care
                nu se obține ușor și nu se păstrează fără efort. Astăzi, colegiul
                rămâne unul dintre liceele reprezentative ale Capitalei, cu un corp
                profesoral experimentat și rezultate solide la examene naționale și
                olimpiade.
              </p>
            </Reveal>

            <Reveal>
              <p>
                Ce înseamnă să fii „eminescian" în 2025? Înseamnă să înveți în
                curtea unei instituții care a format generații întregi înaintea ta.
                Înseamnă să simți, în fiecare zi, greutatea unui nume pe care
                trebuie să îl porți cu demnitate. E o presiune, dar și un
                privilegiu.
              </p>
            </Reveal>

            <Reveal>
              <div
                className="pullquote"
                role="figure"
                aria-label="Citat emblematic"
              >
                „Liceul nostru are menirea de a desăvârși personalitatea
                adolescentului, un parcurs continuu, sincronizat cu ritmul
                accelerat al schimbărilor din societate."
                <cite>din prezentarea oficială a colegiului</cite>
              </div>
            </Reveal>

            <Reveal>
              <p>
                Provocările prezentului sunt reale: digitalizarea educației,
                concurența cu liceele de top din centrul orașului, presiunea
                examenelor și întrebarea pe care fiecare generație și-o pune: de
                ce mai contează o instituție cu tradiție, când informația e la un
                click distanță?
              </p>
            </Reveal>

            <Reveal>
              <p>
                Răspunsul vine din ceea ce o școală oferă dincolo de cunoștințe: un
                mod de a gândi, un ritm, o exigență interiorizată. Acestea nu se
                găsesc pe YouTube. Se construiesc în timp, în sălile de clasă, în
                discuțiile cu profesori care știu mai mult decât ești dispus să
                asculți.
              </p>
            </Reveal>
          </div>
        </section>

        <section>
          <div className="continuareContent">
            <Reveal>
              <div className="chapter-label">
                <span className="chapter-era">Capitolul III — Viitor</span>
                <div className="chapter-line"></div>
              </div>
            </Reveal>
            <Reveal>
              <h1 className="titluDeSectiune">
                Centenarul se apropie.
                <br /> <em>Ce urmează?</em>
              </h1>
            </Reveal>

            <Reveal>
              <p className="chapter-intro">
                Anul 2026 va marca o sută de ani de la primul clopoțel. Dar un
                centenar nu este un punct final, ci un nou punct de plecare.
              </p>
            </Reveal>

            <Reveal>
              <p className="dropcap">
                Există ceva profund simbolic în a împlini o sută de ani purtând
                numele lui Mihai Eminescu, poetul care a definit limba română
                modernă, care a scris despre timp, despre memorie și despre lucrurile
                care dăinuie dincolo de oameni. Un colegiu care atinge centenarul nu
                celebrează doar trecutul, ci celebrează și capacitatea de a
                continua.
              </p>
            </Reveal>

            <Reveal>
              <p>
                Viitorul Colegiului National „Mihai Eminescu" stă în mâinile celor
                care îl vor trăi: elevii de astăzi, profesorii de mâine și o
                comunitate care înțelege că o instituție de educație este poate cel
                mai important proiect pe care o societate îl poate susține cu timp,
                atenție și resurse.
              </p>
            </Reveal>

            <Reveal>
              <p>
                Educația se schimbă. Inteligența artificială redefinește ce
                înseamnă să știi ceva. Economia cere competențe noi în fiecare
                deceniu. Dar ceea ce rămâne constant, curiozitatea, rigoarea și
                capacitatea de a gândi critic, sunt exact lucrurile pe care o
                școală ca aceasta le-a predat dintotdeauna.
              </p>
            </Reveal>

            <EminescuTimeline events={events2} title={null} />

            <Reveal>
              <p>
                Într-o lume în care totul se mișcă rapid și nimic nu pare să dureze,
                o instituție care împlinește un secol transmite un mesaj simplu și
                puternic: unele lucruri merită să reziste.
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </div >
  );
}
