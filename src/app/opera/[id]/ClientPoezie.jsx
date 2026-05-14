'use client';
import React, { useEffect } from 'react';
import './poezie.css';
import { useTheme } from '@/context/NavContext';
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';
import { FaLongArrowAltLeft } from 'react-icons/fa';


const ClientPoezie = ({poezie}) => {
    const { isWhiteMode } = useTheme();
    useEffect(() => {
        isWhiteMode(true);
    }, []);



    return (
        <div className="poeziePage">
            <div className="poezie_hero">
                <Link href="/opere" className="poezie_back">
                    <FaLongArrowAltLeft /> Înapoi la opere
                </Link>
                <span className="poezie_breadcrumb">Poezii</span>
            </div>

            <div className="poezie_layout">
                {/* Sidebar stânga — metadate */}
                <aside className="poezie_sidebar">
                    <div className="poezie_cover_wrap">
                        <img
                            src={poezie.imagine}
                            alt={poezie.titlu}
                            className="poezie_cover"
                        />
                        <div className="poezie_cover_overlay" />
                    </div>

                    <div className="poezie_meta">
                        <div className="poezie_meta_row">
                            <span className="poezie_meta_label">Autor</span>
                            <span className="poezie_meta_value">{poezie.autor}</span>
                        </div>
                        <div className="poezie_meta_row">
                            <span className="poezie_meta_label">An publicare</span>
                            <span className="poezie_meta_value">{poezie.an}</span>
                        </div>
                        <div className="poezie_meta_row">
                            <span className="poezie_meta_label">Publicat în</span>
                            <span className="poezie_meta_value">{poezie.publicatie}</span>
                        </div>
                        <div className="poezie_meta_row">
                            <span className="poezie_meta_label">Teme</span>
                            <div className="poezie_teme">
                                {poezie.teme.map((tema) => (
                                    <span key={tema} className="poezie_tema_tag">
                                        {tema}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Conținut principal — poezia */}
                <main className="poezie_content">
                    <div className="poezie_titlu_wrap">
                        <p className="poezie_gen">Poezie · {poezie.an}</p>
                        <h1 className="poezie_titlu">{poezie.titlu}</h1>
                        <div className="poezie_divider" />
                        <p className="poezie_autor_sub">de {poezie.autor}</p>
                    </div>

                    <div className="poezie_text">
                        {poezie.strofe.map((strofa, i) => (
                            <div key={i} className="poezie_strofa">
                                {strofa.map((vers, j) => (
                                    <p
                                        key={j}
                                        className={`poezie_vers`}
                                    >
                                        {vers}
                                    </p>
                                ))}
                            </div>
                        ))}

                        {/* <div className="poezie_continuare">
                            <span>· · ·</span>
                            <p>( poem integral — 98 de strofe )</p>
                        </div> */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ClientPoezie;