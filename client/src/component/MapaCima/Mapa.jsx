import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./Mapa.module.css";
import ReactPlayer from 'react-player'

const Hexagon = ({ isVisible }) => {
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <img
            src="/FeriaCimatica.svg"
            alt="Feria Cimatica"
            style={{
                width: '100%',
                height: '100%',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease',
                visibility: visible ? 'visible' : 'hidden',
            }}
        />
    );
};

const ComedorShape = ({ isVisible }) => {
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <img
            src="/Comedor.svg"
            alt="Comedor"
            style={{
                width: '100%',
                height: '100%',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease',
                visibility: visible ? 'visible' : 'hidden',
            }}
        />
    );
};


const HabitacionesShape = ({ isVisible }) => {
    const svgContainerRef = useRef(null);
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    useEffect(() => {
        if (visible && svgContainerRef.current) {
            fetch('/Habitaciones.svg')
                .then(response => response.text())
                .then(svgText => {
                    svgContainerRef.current.innerHTML = svgText;
                    const svgElement = svgContainerRef.current.querySelector('svg');
                    if (svgElement) {
                        const orangeElements = svgElement.querySelectorAll('.fill-rectangle');
                        orangeElements.forEach(element => {
                            element.style.opacity = '0.5';
                            element.style.pointerEvents = 'none';
                        });
                    }
                });
        }
    }, [visible]);

    return (
        <div
            ref={svgContainerRef}
            style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.5s ease',
                visibility: visible ? 'visible' : 'hidden',
                transform: 'rotate(90deg)'
            }}
        />
    );
};


const MapaCima = () => {
    const [info, setInfo] = useState(null);
    const [hoveredArea, setHoveredArea] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const lugares = {
        lugar2: { nombre: 'Auditorio Principal', video: 'https://vimeo.com/1048560209/e3a830ff42', coords: { x: '15.7%', y: '19%' }, area: { width: '17.3%', height: '63%' }, shape: null },
        lugar4: { nombre: 'Kiosco', video: undefined, coords: { x: '36%', y: '40.4%' }, area: { width: '4.623%', height: '4.25%' }, shape: null },
        lugar6: { nombre: 'Enfermeria', video: undefined, coords: { x: '12%', y: '48.7%' }, area: { width: '1.9%', height: '4%' }, shape: null },
        lugar8: { nombre: 'Feria Cimatica', video: 'https://vimeo.com/1048560123/997fe9a00f', coords: { x: '50.23%', y: '50.6%' }, area: { width: '8.77%', height: '16.6%' }, shape: <Hexagon isVisible={hoveredArea === 'lugar8'} /> },
        lugar9: { nombre: 'Salon amarillo', video: 'https://vimeo.com/1048560179/69edc21a8c', coords: { x: '49.4%', y: '31%' }, area: { width: '10.5%', height: '12.8%' }, shape: null },
        lugar10: { nombre: 'Comedor', video: 'https://vimeo.com/1048560179/69edc21a8c', coords: { x: '61.5%', y: '31.2%' }, area: { width: '11.8%', height: '13.2%' }, shape: <ComedorShape isVisible={hoveredArea === 'lugar10'} /> },
        lugar11: { nombre: 'Habitaciones', video: 'https://vimeo.com/1048560151/5ef34308b6', coords: { x: '70.1%', y: '61.2%' }, area: { width: '20.6%', height: '10%' }, shape: <HabitacionesShape isVisible={hoveredArea === 'lugar11'} /> },
    };

    const closeModal = () => {
        setModalOpen(false);
        setInfo(null);
    };

    return (
        <div>
            <div id="mapa" className={style.mapa}>
                <img src="https://i.postimg.cc/Twxy9SfB/CIMA.jpg" alt="Mapa" className={style.mapaImagen} />
                {Object.keys(lugares).map((lugar) => {
                    return (
                        <motion.div
                            key={lugar}
                            className={style.lugar}
                            style={{
                                position: 'absolute',
                                left: lugares[lugar].coords.x,
                                top: lugares[lugar].coords.y,
                                width: lugares[lugar].area.width,
                                height: lugares[lugar].area.height,
                            }}
                            onMouseEnter={() => setHoveredArea(lugar)}
                            onMouseLeave={() => setHoveredArea(null)}
                            onClick={() => {
                                setInfo(lugares[lugar]);
                                setModalOpen(true);
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            {lugares[lugar].shape ? (
                                <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
                                    {React.cloneElement(lugares[lugar].shape, { width: '100%', height: '100%' })}
                                </div>
                            ) : (
                                <div className={style.hoverArea} style={{ opacity: hoveredArea === lugar ? 1 : 0 }} />
                            )}
                        </motion.div>
                    );
                })}
            </div>
            <AnimatePresence>
                {modalOpen && info && (
                    <motion.div
                        className={style.modal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className={style.modalContent}
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            exit={{ y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className={style.modalClose} onClick={closeModal}>&times;</span>
                            <h2 className={style.titleModal}>{info.nombre}</h2>

                            <div className={style.videoModalContainer}>
                                {info.video ? (
                                    info.video.includes("vimeo") ? (
                                        // Si la URL es de Vimeo, usa un iframe
                                        <ReactPlayer
                                        className={style.videoModal}
                                        url={info.video}
                                        width="100%"
                                        height="40vh"
                                        playing
                                        />
                                    ) : (
                                        // Si es un video local, utiliza la etiqueta video
                                        <video controls controlsList="nodownload" className={style.videoModal}>
                                            <source src={info.video} type="video/mp4" />
                                            Tu navegador no soporta la etiqueta de video.
                                        </video>
                                    )
                                ) : (
                                    <p>No hay video disponible.</p>
                                )}
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MapaCima;