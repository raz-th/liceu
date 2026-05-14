'use client';

import React, { useEffect, useRef, useState } from 'react';
import './opere.css'
import { useTheme } from '@/context/NavContext';
import { BsFeather, BsStars } from 'react-icons/bs';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { MdArrowRightAlt } from 'react-icons/md';
import { FaBook, FaClock, FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import BackSvg from '@/components/svg';
import { Reveal } from '@/components/Reveal';
import { GiBrain } from 'react-icons/gi';

const TABS = [
    {
        id: 'poezii',
        label: 'Poezii',
        icon: <BsFeather />,
        ceE: "poezia",
        contentSecundar: [
            {
                id: 'floare-albastra',
                titlu: 'Floare albastră',
                citat: '„- «Iar te-ai cufundat în stele"',
                imagine: '/assets/opere/floare_albastra.jpg',
            },
            {
                id: 'sara-pe-deal',
                titlu: 'Sara pe deal',
                citat: '„Sara pe deal buciumul sună cu jale..."',
                imagine: '/assets/opere/sara_pe_deal.jpg',
            },
            {
                id: 'ce-ti-doresc-eu-tie-dulce-romanie',
                titlu: 'Ce-ți doresc eu ție, dulce Românie',
                citat: '„Ce-ți doresc eu ție, dulce Românie..."',
                imagine: '/assets/opere/ce-ti-doresc-eu-tie-dulce-romanie.jpg',
            },
            {
                id: 'ce-te-legeni',
                titlu: 'Ce te legeni?...',
                citat: '„- Ce te legeni, codrule,..."',
                imagine: '/assets/opere/ce-te-legeni.jpg',
            },
        ]
    },
    {
        id: 'proze',
        label: 'Proze',
        ceE: "proza",
        icon: <PiBookOpenTextLight />,
        contentSecundar: [
            {
                id: 'sarmanul-dionis',
                titlu: 'Sarmanul Dionis',
                citat: '',
                imagine: '/assets/opere/sarmanul-dionis.jpg',
            },
            {
                id: 'la-aniversara',
                titlu: 'La aniversara',
                citat: '',
                imagine: '/assets/opere/la-aniversara.jpg',
            },
            {
                id: 'fat-frumos-din-lacrima',
                titlu: 'Fat-Frumos din lacrima',
                citat: '"',
                imagine: '/assets/opere/fat-frumos-din-lacrima.jpg',
            },
            {
                id: 'cezara',
                titlu: 'Cezara',
                citat: '',
                imagine: '/assets/opere/cezara.jpg',
            },
        ]
    },
    // {
    //     id: 'drame',
    //     label: 'drame',
    //     icon: <LuDrama />,
    //     ceE: "drama",
    //     contentSecundar: [
    //         {
    //             id: 'floare+albastra',
    //             titlu: 'Floare albastră',
    //             citat: '„- «Iar te-ai cufundat în stele"',
    //             imagine: '/assets/opere/floare_albastra.jpg',
    //         },
    //         {
    //             id: 'sara-pe-deal',
    //             titlu: 'Sara pe deal',
    //             citat: '„Sara pe deal buciumul sună cu jale..."',
    //             imagine: '/assets/opere/sara_pe_deal.jpg',
    //         },
    //         {
    //             id: 'ce-ti-doresc-eu-tie-dulce-romanie',
    //             titlu: 'Ce-ți doresc eu ție, dulce Românie',
    //             citat: '„Ce-ți doresc eu ție, dulce Românie..."',
    //             imagine: '/assets/opere/ce-ti-doresc-eu-tie-dulce-romanie.jpg',
    //         },
    //         {
    //             id: 'ce-te-legeni',
    //             titlu: 'Ce te legeni?...',
    //             citat: '„- Ce te legeni, codrule,..."',
    //             imagine: '/assets/opere/ce-te-legeni.jpg',
    //         },
    //     ]
    // },
];

const teme = [
    { label: 'Tema Cosmică ', icon: <BsStars size={13} color="#c9a060" /> },
    { label: 'Tema Timpului', icon: <FaClock size={13} color="#c9a060" /> },
    { label: 'Tema Naturii și Iubirii', icon: <FaHeart size={13} color="#c9a060" /> },
    { label: 'Tema Istoriei', icon: <FaBook size={13} color="#c9a060" /> },
    { label: 'Tema Geniului', icon: <GiBrain size={13} color="#c9a060" /> },
];


const ClientOpere = () => {
    const { isWhiteMode } = useTheme();
    const [activeTab, setActiveTab] = useState(0);
    const [width, setWidth] = useState(0)
    const textRef = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            if (textRef.current) {
                textRef.current.style.transform = `translateY(${y * 0.5}px)`;
            }
            if (textRef2.current) {
                textRef2.current.style.transform = `translateY(${y * 0.5}px)`;
            }
            if (textRef3.current) {
                textRef3.current.style.transform = `translateY(${y * 0.5}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    useEffect(() => { isWhiteMode(true) }, []);

    return (
        <div className='opere_page'>
            <div className='opere_page_hero'>
                <Reveal>
                    <div className="chapter-label" ref={textRef}>
                        <span className="chapter-era">Universul literar eminescian</span>
                        <div className="chapter-line"></div>
                    </div>
                </Reveal>
                <Reveal delay={100} >
                    <h1 className="titluDeSectiune" ref={textRef2}>
                        Cuvinte care
                        <br /> <em>au rămas</em>
                    </h1>
                </Reveal>
                <Reveal delay={200}>
                    <div className='chap' ref={textRef3}>
                        <p className="chapter-intro">
                            De la primele versuri publicate la 16 ani până la marile poeme de
                            maturitate, opera lui Eminescu este o călătorie prin toate marile
                            teme ale existenței umane.
                        </p>
                    </div>
                </Reveal>



            </div>
            <div className="svgOpere" style={{ willChange: "transform" }}>
                <BackSvg />
            </div>
            <div className='opere_continut_container'>
                <Reveal>
                    <div className="opere_tabs">
                        {TABS.map((tab, i) => (
                            <button
                                key={tab.id}
                                className={`opere_tab${activeTab === i ? ' active' : ''}`}
                                onClick={() => setActiveTab(i)}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </Reveal>
                <div className="opere_continut">
                    {/* ─── PRIMARY ─── */}
                    <Reveal>
                        <div className="opere_continut_primar">
                            <img src='/assets/opere/luceafarul.jpg' alt='Luceafărul' />
                            <div className="opere_continut_primar_content">
                                <h1>Luceafărul</h1>
                                <p className="citat">„A fost odată ca-n povești..."</p>
                                <Link href='/opera/luceafarul' className="citeste_link">
                                    Citește poezia <MdArrowRightAlt />
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    {/* ─── SECONDARY ─── */}
                    <div className="opere_continut_secundar">
                        {TABS[activeTab].contentSecundar.map((poezie, i) => (
                            <Reveal key={poezie.id} delay={width > 600 ? i * 100 + 100 : 0}>
                                <div className="operaCard" >
                                    <img src={poezie.imagine} alt={poezie.titlu} />
                                    <div className="operaCardContinut">
                                        <h2>{poezie.titlu}</h2>
                                        <p className="citat">{poezie.citat}</p>
                                        {TABS[activeTab].ceE === 'poezia' && (<Link href={`/opera/${poezie.id}`} className="citeste_link">
                                            Citește {TABS[activeTab].ceE} <MdArrowRightAlt />
                                        </Link>)}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* ─── TEME ─── */}
                    <Reveal delay={width > 600 ? 600 : 0}>
                        <div className="opere_continut_trei">
                            <p className="teme_title">Temele eminesciene</p>
                            {teme.map((tema) => (
                                <div className="tema_item" key={tema.label}>
                                    <div className="tema_icon">{tema.icon}</div>
                                    <span className="tema_label">{tema.label}</span>
                                </div>
                            ))}

                        </div>
                    </Reveal>

                </div>
            </div>
        </div>
    );
};

export default ClientOpere;