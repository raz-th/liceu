"use client";
import { Reveal } from "./Reveal";
import "./timeline.css";

const events2 = [
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

export default function EminescuTimeline({ events, title }) {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        <div className="timeline-title-block">
          {title && (<><h1 className="timeline-title">Scurtă istorie a liceului</h1><div className="timeline-underline" /></>)}

        </div>
        <div className="timeline">
          {events.map((ev, i) => (
            <Reveal key={i}>
              <div  className="timeline-row visible">
                <div className="timeline-dot-col">
                  <div className="timeline-dot" />
                  {i < events.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{ev.year}</div>
                  <div className="timeline-text">{ev.text}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}