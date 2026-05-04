import { useState, useEffect } from "react";
import './timeline.css'
import { Reveal } from "@/components/Reveal";

const events = [
    { year: "1850", text: "da" },
    { year: "1866", text: "ceba" },
    { year: "1870", text: 'nu stiu' },
    { year: "1883", text: 'face ceva' },
    { year: "1889", text: "se intampla ceva" },
];

export default function EminescuTimeline() {

    return (
        <div className="timeline-wrapper">
            <div className="timeline-container">
                <div className="timeline-title-block">
                    <h1 className="timeline-title">ceva timeline</h1>
                    <div className="timeline-underline" />
                </div>

                <div className="timeline">
                    {events.map((ev, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <div

                                className={`timeline-row visible`}
                            >
                                <div className="timeline-dot-col">
                                    <div className="timeline-dot" />
                                    {i < events.length - 1 && <div className="timeline-line" />}
                                </div>
                                <div className="timeline-year">{ev.year}</div>
                                <div className="timeline-text">{ev.text}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
