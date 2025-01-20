// import React, { useEffect, useState } from 'react';
// import style from './InstagramPost.module.css'
// import axios from 'axios';

// const InstagramPosts = ({ accessToken, userId }) => {
//     /*
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchInstagramPosts = async () => {
//             try {
//                 const response = await axios.get(`https://graph.instagram.com/${userId}/media`, {
//                     params: {
//                         fields: 'id,media_type,media_url,thumbnail_url,permalink',
//                         access_token: accessToken,
//                         limit: 3,
//                     },
//                 });
//                 setPosts(response.data.data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchInstagramPosts();
//     }, [accessToken, userId]);

//     if (loading) return <div>Cargando...</div>;
//     if (error) return <div>Error: {error}</div>;
//     */

//     return (
//         <div className="instagram-posts-container">
//             <h2>Últimos Posts de Instagram</h2>
//             <div className="instagram-posts-grid">
//                 <InstagramEmbed /*key={post.id} url={post.permalink} */ />
//             </div>
//         </div>
//     );
// };

// const InstagramEmbed = () => {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = "https://www.instagram.com/embed.js";
//         script.async = true;
//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, ["https://www.instagram.com/p/DFBtUlCRSre/"]); // Asegúrate de que el script se cargue cuando cambie la URL

//     return (
//         <div className={style.InstagramPost}>
//             <a href="https://www.instagram.com/p/DFBtUlCRSre/" target="_blank" rel="noopener noreferrer">
//                 <blockquote
//                     className="instagram-media"
//                     data-instgrm-captioned
//                     data-instgrm-permalink="https://www.instagram.com/p/DFBtUlCRSre/"
//                     data-instgrm-version="15"
//                     style={{
//                         background: '#FFF',
//                         border: '0',
//                         borderRadius: '3px',
//                         boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
//                         margin: '1px',
//                         maxWidth: '540px',
//                         minWidth: '326px',
//                         padding: '0',
//                         width: '99.375%',
//                         width: '-webkit-calc(100% - 2px)',
//                         width: 'calc(100% - 2px)'
//                     }}>
//                 </blockquote>
//             </a>
//             <a href="https://www.instagram.com/p/DFBtUlCRSre/" target="_blank" rel="noopener noreferrer">
//                 <blockquote
//                     className="instagram-media"
//                     data-instgrm-captioned
//                     data-instgrm-permalink="https://www.instagram.com/p/DFBtUlCRSre/"
//                     data-instgrm-version="15"
//                     style={{
//                         background: '#FFF',
//                         border: '0',
//                         borderRadius: '3px',
//                         boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
//                         margin: '1px',
//                         maxWidth: '540px',
//                         minWidth: '326px',
//                         padding: '0',
//                         width: '99.375%',
//                         width: '-webkit-calc(100% - 2px)',
//                         width: 'calc(100% - 2px)'
//                     }}>
//                 </blockquote>
//             </a>
//             <a href="https://www.instagram.com/p/DFBtUlCRSre/" target="_blank" rel="noopener noreferrer">
//                 <blockquote
//                     className="instagram-media"
//                     data-instgrm-captioned
//                     data-instgrm-permalink="https://www.instagram.com/p/DFBtUlCRSre/"
//                     data-instgrm-version="15"
//                     style={{
//                         background: '#FFF',
//                         border: '0',
//                         borderRadius: '3px',
//                         boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
//                         margin: '1px',
//                         maxWidth: '540px',
//                         minWidth: '326px',
//                         padding: '0',
//                         width: '99.375%',
//                         width: '-webkit-calc(100% - 2px)',
//                         width: 'calc(100% - 2px)'
//                     }}>
//                 </blockquote>
//             </a>
//         </div>
//     );
// };

// const InstagramCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const posts = [
//         {
//             url: "https://www.instagram.com/p/DFBtUlCRSre/",
//         },
//         {
//             url: "https://www.instagram.com/p/DFBZMocyR0F/",
//         },
//         {
//             url: "https://www.instagram.com/p/DE-SD9mRPJv/",
//         }
//     ];

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? posts.length - 1 : prevIndex - 1
//         );
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === posts.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     useEffect(() => {
//         // Si ya existe el script de Instagram, lo eliminamos para cargarlo nuevamente
//         const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
//         if (existingScript) {
//             existingScript.remove();
//         }

//         // Crear el script de Instagram para procesar el nuevo contenido
//         const script = document.createElement('script');
//         script.src = '//www.instagram.com/embed.js';
//         script.async = true;
//         document.body.appendChild(script);

//         // Reprocesar los elementos de Instagram después de cargar el script
//         script.onload = () => {
//             if (window.instgrm) {
//                 window.instgrm.Embeds.process();  // Procesar todas las publicaciones de Instagram visibles
//             }
//         };
//     }, []); // Solo cargar el script una vez cuando el componente se monta

//     return (
//         <div className={style.CarouselContainer}>
//             <div className={style.InstagramPosts}>
//                 {posts.map((post, index) => (
//                     <div
//                         key={index}
//                         id={`post-${index}`}
//                         className={style.InstagramPost}
//                         style={{
//                             display: currentIndex === index ? 'block' : 'none',  // Mostrar solo el post activo
//                         }}
//                     >
//                         <a href={post.url} target="_blank" rel="noopener noreferrer">
//                             <blockquote
//                                 className="instagram-media"
//                                 data-instgrm-captioned
//                                 data-instgrm-permalink={post.url}
//                                 data-instgrm-version="15"
//                                 style={{
//                                     background: '#FFF',
//                                     border: '0',
//                                     borderRadius: '3px',
//                                     boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
//                                     margin: '1px',
//                                     maxWidth: '540px',
//                                     minWidth: '326px',
//                                     padding: '0',
//                                     width: '99.375%',
//                                     width: '-webkit-calc(100% - 2px)',
//                                     width: 'calc(100% - 2px)'
//                                 }}
//                             />
//                         </a>
//                     </div>
//                 ))}
//             </div>

//             <div className={style.Buttons}>
//                 {/* Los botones cambian el índice al hacer clic */}
//                 <button onClick={handlePrev}>{"\u25C0"}</button>
//                 <button onClick={handleNext}>{"\u25B6"}</button>
//             </div>
//         </div>
//     );
// };

// export default InstagramCarousel;