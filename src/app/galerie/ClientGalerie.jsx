'use client';
import React, { useState, useEffect } from 'react';
import './galerie.css';
import { useTheme } from '@/context/NavContext';



const poze = [
    { id: 1, src: '/assets/galerie/img1.jpeg', titlu: 'Liceu', an: '2025', inaltime: 'tall' },
    { id: 2, src: '/assets/galerie/img2.jpeg', titlu: 'Liceului', an: '2026', inaltime: 'normal' },
    { id: 3, src: '/assets/galerie/img3.jpeg', titlu: 'Liceu', an: '2024', inaltime: 'normal' },
    { id: 4, src: '/assets/galerie/img4.jpeg', titlu: 'Liceu', an: '1926', inaltime: 'tall' },
    { id: 5, src: '/assets/galerie/img5.jpeg', titlu: 'Fațada liceului', an: '2023', inaltime: 'wide' },
    { id: 6, src: '/assets/galerie/img6.jpeg', titlu: 'Liceu', an: '2024', inaltime: 'normal' },
    { id: 7, src: '/assets/galerie/img7.jpeg', titlu: 'Curte interioara', an: '2020', inaltime: 'normal' },
    { id: 8, src: '/assets/galerie/img8.jpeg', titlu: 'Curte interioara', an: '2026', inaltime: 'tall' },
    { id: 9, src: '/assets/galerie/img9.jpeg', titlu: 'Ziua școlii', an: '2023', inaltime: 'normal' },
    { id: 10, src: '/assets/galerie/img10.jpeg', titlu: 'Sală de festivitați', an: '2020', inaltime: 'wide' },
    { id: 11, src: '/assets/galerie/img11.jpeg', titlu: 'Fațada liceului', an: '2023', inaltime: 'normal' },
    { id: 12, src: '/assets/galerie/img12.jpeg', titlu: 'Absolvenții', an: '2024', inaltime: 'tall' },
];

const ClientGalerie = () => {
    const { isWhiteMode } = useTheme();
    const [pozaActiva, setPozaActiva] = useState(null);
    const [loaded, setLoaded] = useState(false);



    useEffect(() => {
        isWhiteMode(true);
        setTimeout(() => setLoaded(true), 50);
    }, []);


    const deschide = (poza) => setPozaActiva(poza);
    const inchide = () => setPozaActiva(null);

    return (
        <div className={`galeriePage ${loaded ? 'loaded' : ''}`}>

            {/* Header */}
            <div className="galerie_header">
                <div className="galerie_header_text">
                    <p className="galerie_supertitlu">Amintiri vizuale</p>
                    <h1 className="galerie_titlu">Galeria Liceului</h1>
                    <div className="galerie_titlu_line" />
                    <p className="galerie_subtitlu">Momente surprinse de-a lungul anilor</p>
                </div>
                <div className="galerie_count">
                    <span className="galerie_count_nr">{poze.length}</span>
                    <span className="galerie_count_label">fotografii</span>
                </div>
            </div>

            {/* Grid masonry */}
            <div className="galerie_masonry">
                {poze.map((poza, i) => (
                    <div
                        key={poza.id}
                        className={`galerie_item galerie_item_${poza.inaltime}`}
                        style={{ animationDelay: `${i * 0.06}s` }}
                        onClick={() => deschide(poza)}
                    >
                        <img
                            src={poza.src}
                            alt={poza.titlu}
                            className="galerie_img"
                            loading="lazy"
                        />
                        <div className="galerie_item_overlay">
                            <div className="galerie_item_info">
                                <h3 className="galerie_item_titlu">{poza.titlu}</h3>
                                <span className="galerie_item_an">{poza.an}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {pozaActiva && (
                <div className="galerie_lightbox" onClick={inchide}>
                    <button className="lightbox_close" onClick={inchide}>✕</button>
                    <div className="lightbox_content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={pozaActiva.src}
                            alt={pozaActiva.titlu}
                            className="lightbox_img"
                        />
                        <div className="lightbox_info">
                            <span className="lightbox_cat">{pozaActiva.categorie}</span>
                            <h2 className="lightbox_titlu">{pozaActiva.titlu}</h2>
                            <span className="lightbox_an">{pozaActiva.an}</span>
                        </div>
                    </div>
                    <div className="lightbox_nav">
                        <button
                            className="lightbox_nav_btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                const idx = poze.findIndex(p => p.id === pozaActiva.id);
                                if (idx > 0) setPozaActiva(poze[idx - 1]);
                            }}
                        >←</button>
                        <span className="lightbox_pozitie">
                            {poze.findIndex(p => p.id === pozaActiva.id) + 1} / {poze.length}
                        </span>
                        <button
                            className="lightbox_nav_btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                const idx = poze.findIndex(p => p.id === pozaActiva.id);
                                if (idx < poze.length - 1) setPozaActiva(poze[idx + 1]);
                            }}
                        >→</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClientGalerie;