import React, { useState, useRef, useEffect } from "react";
import Menu from '../../../component/Menu/Menu';
import style from "./Articulos.module.css";
import ReactPlayer from "react-player";

const Articulo = () => {
    return (
        <div>
            <Menu />
            <div style={{ width: '87%', margin: '0 auto', marginTop: '20%' }}>

                <img src="https://i.postimg.cc/bwZXphg9/image-3505.png" alt="" />
                <div style={{ fontFamily: 'Inter' }}>
                    <h1 style={{ fontFamily: 'Inter', fontSize: '1.7rem', fontWeight: '1000' }}>PERSECUCIÓN EN
                    AMERICA LATINA </h1>
                    <div style={{ width: '80%' }}><svg width="230" height="15" viewBox="0 0 230 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1357 5.18693C17.619 3.90449 15.9134 0.942825 14.1965 1.33497C9.96751 3.88875 5.99828 6.93698 1.80208 9.55234C-0.393565 9.24492 -0.433426 11.9228 0.879177 13.0011C1.75659 13.7228 2.21804 13.227 3.04059 12.7677L6.39595 12.5575C6.79034 13.4742 6.62668 14.2122 7.81595 14.2826C8.87672 14.3446 10.066 14.134 11.1422 14.1997C12.0595 13.8802 11.5835 13.0001 11.3542 12.3446L16.675 12.0186C19.6378 11.3691 18.9625 7.23838 18.1357 5.1874M1.44286 10.3264C1.50664 11.1191 1.68625 11.7654 2.15895 12.4219C1.07708 13.3251 0.043969 10.2223 1.44286 10.3264ZM12.9186 3.00029C12.792 4.57719 13.2253 6.03835 13.9682 7.42404L12.8459 7.71155C12.8061 7.71386 12.6223 7.49024 12.6148 7.46802L12.1055 5.97168L2.38733 10.1417L12.9191 3.00029H12.9186ZM7.56177 13.4969L7.22319 12.5446L10.5265 12.3571L10.8899 13.3983C9.79259 13.5126 8.6685 13.5052 7.56177 13.4969ZM14.1693 11.4089L12.9688 11.4769C12.9688 11.4769 12.9679 11.4765 12.9674 11.4755L11.923 11.533H11.9216C11.7448 11.5825 11.2356 11.6052 11.1099 11.5788L10.0974 11.6343L10.1194 11.6723L9.3452 11.676L4.68568 11.9344L4.39493 11.9506L3.0087 12.0288C2.51442 11.9658 2.46659 11.3955 2.32121 11.0181L11.6145 6.94393C12.1439 8.12452 12.6874 9.30604 13.4964 10.3283C13.8012 10.7135 14.1581 11.0403 14.4976 11.3899L14.1703 11.4084L14.1693 11.4089ZM17.7643 10.3963C16.3711 12.8515 13.7787 9.93661 13.1231 8.42546L15.0913 7.7722C14.2359 6.4541 13.5358 4.98785 13.6474 3.39012C13.805 1.13079 15.3764 2.17295 16.2599 3.35123C17.4009 4.87257 18.7824 8.60231 17.7643 10.3959" fill="black" />
                        <path d="M19.6221 9.83161L19.4922 10.3957L21.9738 10.3753C22.1007 10.3279 22.1388 9.79845 22.0169 9.74597L19.6221 9.83124V9.83161Z" fill="black" />
                        <path d="M19.4898 0.59081C19.5274 0.468725 19.0644 -0.0793696 18.8631 0.00974722L16.8931 1.38307L17.5335 1.9492L19.4898 0.59081Z" fill="black" />
                        <path d="M19.5851 8.4465L22.0911 7.91714L21.9831 7.14703L19.4922 7.56719L19.5851 8.4465Z" fill="black" />
                        <path d="M18.5585 3.89836L20.7913 2.78209L20.4304 1.94916L18.1924 3.07863L18.5585 3.89836Z" fill="black" />
                        <path d="M21.2015 4.54964L19.1182 5.24994L19.3604 5.97043L21.4437 5.27013L21.2015 4.54964Z" fill="black" />
                        <path d="M32.7585 12V3.27273H36.2017C36.8608 3.27273 37.4233 3.39062 37.8892 3.62642C38.358 3.85937 38.7145 4.19034 38.9588 4.61932C39.206 5.04545 39.3295 5.54687 39.3295 6.12358C39.3295 6.70312 39.2045 7.2017 38.9545 7.61932C38.7045 8.03409 38.3423 8.35227 37.8679 8.57386C37.3963 8.79545 36.8253 8.90625 36.1548 8.90625H33.8494V7.4233H35.8565C36.2088 7.4233 36.5014 7.375 36.7344 7.27841C36.9673 7.18182 37.1406 7.03693 37.2543 6.84375C37.3707 6.65057 37.429 6.41051 37.429 6.12358C37.429 5.83381 37.3707 5.58949 37.2543 5.39062C37.1406 5.19176 36.9659 5.04119 36.7301 4.93892C36.4972 4.83381 36.2031 4.78125 35.848 4.78125H34.6037V12H32.7585ZM37.4716 8.02841L39.6406 12H37.6037L35.4815 8.02841H37.4716ZM40.6335 12V3.27273H46.5142V4.79403H42.4787V6.87358H46.2116V8.39489H42.4787V10.4787H46.5312V12H40.6335ZM51.0749 12H47.9812V3.27273H51.1005C51.9783 3.27273 52.734 3.44744 53.3675 3.79688C54.0011 4.14347 54.4883 4.64205 54.8292 5.29261C55.1729 5.94318 55.3448 6.72159 55.3448 7.62784C55.3448 8.53693 55.1729 9.31818 54.8292 9.97159C54.4883 10.625 53.9982 11.1264 53.359 11.4759C52.7227 11.8253 51.9613 12 51.0749 12ZM49.8263 10.419H50.9982C51.5437 10.419 52.0025 10.3224 52.3746 10.1293C52.7496 9.93324 53.0309 9.63068 53.2184 9.22159C53.4087 8.80966 53.5039 8.27841 53.5039 7.62784C53.5039 6.98295 53.4087 6.45597 53.2184 6.04688C53.0309 5.63778 52.7511 5.33665 52.3789 5.14347C52.0067 4.95028 51.5479 4.85369 51.0025 4.85369H49.8263V10.419ZM57.7237 12H55.7464L58.7592 3.27273H61.1371L64.1456 12H62.1683L59.9822 5.26705H59.9141L57.7237 12ZM57.6001 8.5696H62.2706V10.0099H57.6001V8.5696ZM72.4862 6.32812H70.6197C70.5856 6.08665 70.516 5.87216 70.4109 5.68466C70.3058 5.49432 70.1708 5.33239 70.006 5.19886C69.8413 5.06534 69.6509 4.96307 69.435 4.89205C69.2219 4.82102 68.9904 4.78551 68.7404 4.78551C68.2887 4.78551 67.8952 4.89773 67.56 5.12216C67.2248 5.34375 66.9648 5.66761 66.7802 6.09375C66.5955 6.51705 66.5032 7.03125 66.5032 7.63636C66.5032 8.25852 66.5955 8.78125 66.7802 9.20455C66.9677 9.62784 67.229 9.94744 67.5643 10.1634C67.8995 10.3793 68.2873 10.4872 68.7276 10.4872C68.9748 10.4872 69.2035 10.4545 69.4137 10.3892C69.6268 10.3239 69.8157 10.2287 69.9805 10.1037C70.1452 9.97585 70.2816 9.82102 70.3896 9.6392C70.5004 9.45739 70.5771 9.25 70.6197 9.01705L72.4862 9.02557C72.4379 9.42614 72.3171 9.8125 72.1239 10.1847C71.9336 10.554 71.6765 10.8849 71.3526 11.1776C71.0316 11.4673 70.6481 11.6974 70.2021 11.8679C69.7589 12.0355 69.2575 12.1193 68.6978 12.1193C67.9194 12.1193 67.2234 11.9432 66.6097 11.5909C65.9989 11.2386 65.516 10.7287 65.1609 10.0611C64.8086 9.39347 64.6325 8.58523 64.6325 7.63636C64.6325 6.68466 64.8114 5.875 65.1694 5.20739C65.5273 4.53977 66.0131 4.03125 66.6268 3.68182C67.2404 3.32955 67.9308 3.15341 68.6978 3.15341C69.2035 3.15341 69.6722 3.22443 70.104 3.36648C70.5387 3.50852 70.9237 3.71591 71.2589 3.98864C71.5941 4.25852 71.8668 4.58949 72.0771 4.98153C72.2901 5.37358 72.4265 5.82244 72.4862 6.32812ZM81.5096 6.32812H79.6431C79.609 6.08665 79.5394 5.87216 79.4343 5.68466C79.3292 5.49432 79.1942 5.33239 79.0295 5.19886C78.8647 5.06534 78.6744 4.96307 78.4585 4.89205C78.2454 4.82102 78.0138 4.78551 77.7638 4.78551C77.3121 4.78551 76.9187 4.89773 76.5835 5.12216C76.2482 5.34375 75.9883 5.66761 75.8036 6.09375C75.619 6.51705 75.5266 7.03125 75.5266 7.63636C75.5266 8.25852 75.619 8.78125 75.8036 9.20455C75.9911 9.62784 76.2525 9.94744 76.5877 10.1634C76.9229 10.3793 77.3107 10.4872 77.7511 10.4872C77.9982 10.4872 78.2269 10.4545 78.4371 10.3892C78.6502 10.3239 78.8391 10.2287 79.0039 10.1037C79.1687 9.97585 79.305 9.82102 79.413 9.6392C79.5238 9.45739 79.6005 9.25 79.6431 9.01705L81.5096 9.02557C81.4613 9.42614 81.3406 9.8125 81.1474 10.1847C80.957 10.554 80.6999 10.8849 80.3761 11.1776C80.055 11.4673 79.6715 11.6974 79.2255 11.8679C78.7823 12.0355 78.2809 12.1193 77.7212 12.1193C76.9428 12.1193 76.2468 11.9432 75.6332 11.5909C75.0224 11.2386 74.5394 10.7287 74.1843 10.0611C73.832 9.39347 73.6559 8.58523 73.6559 7.63636C73.6559 6.68466 73.8349 5.875 74.1928 5.20739C74.5508 4.53977 75.0366 4.03125 75.6502 3.68182C76.2638 3.32955 76.9542 3.15341 77.7212 3.15341C78.2269 3.15341 78.6957 3.22443 79.1275 3.36648C79.5621 3.50852 79.9471 3.71591 80.2823 3.98864C80.6175 4.25852 80.8903 4.58949 81.1005 4.98153C81.3136 5.37358 81.4499 5.82244 81.5096 6.32812ZM84.6779 3.27273V12H82.8327V3.27273H84.6779ZM94.2159 7.63636C94.2159 8.58807 94.0355 9.39773 93.6747 10.0653C93.3168 10.733 92.8281 11.2429 92.2088 11.5952C91.5923 11.9446 90.8991 12.1193 90.1293 12.1193C89.3537 12.1193 88.6577 11.9432 88.0412 11.5909C87.4247 11.2386 86.9375 10.7287 86.5795 10.0611C86.2216 9.39347 86.0426 8.58523 86.0426 7.63636C86.0426 6.68466 86.2216 5.875 86.5795 5.20739C86.9375 4.53977 87.4247 4.03125 88.0412 3.68182C88.6577 3.32955 89.3537 3.15341 90.1293 3.15341C90.8991 3.15341 91.5923 3.32955 92.2088 3.68182C92.8281 4.03125 93.3168 4.53977 93.6747 5.20739C94.0355 5.875 94.2159 6.68466 94.2159 7.63636ZM92.3452 7.63636C92.3452 7.01989 92.2528 6.5 92.0682 6.0767C91.8864 5.65341 91.6293 5.33239 91.2969 5.11364C90.9645 4.89489 90.5753 4.78551 90.1293 4.78551C89.6832 4.78551 89.294 4.89489 88.9616 5.11364C88.6293 5.33239 88.3707 5.65341 88.1861 6.0767C88.0043 6.5 87.9134 7.01989 87.9134 7.63636C87.9134 8.25284 88.0043 8.77273 88.1861 9.19602C88.3707 9.61932 88.6293 9.94034 88.9616 10.1591C89.294 10.3778 89.6832 10.4872 90.1293 10.4872C90.5753 10.4872 90.9645 10.3778 91.2969 10.1591C91.6293 9.94034 91.8864 9.61932 92.0682 9.19602C92.2528 8.77273 92.3452 8.25284 92.3452 7.63636ZM89.4773 2.42898L90.3807 0.490057H92.0597L90.7599 2.42898H89.4773ZM102.882 3.27273V12H101.289L97.4918 6.5071H97.4279V12H95.5827V3.27273H97.2021L100.969 8.76136H101.046V3.27273H102.882ZM110.989 12.1108C110.707 12.1108 110.466 12.0114 110.264 11.8125C110.065 11.6108 109.966 11.3693 109.966 11.0881C109.966 10.8097 110.065 10.571 110.264 10.3722C110.466 10.1733 110.707 10.0739 110.989 10.0739C111.261 10.0739 111.5 10.1733 111.705 10.3722C111.909 10.571 112.011 10.8097 112.011 11.0881C112.011 11.2756 111.963 11.4474 111.866 11.6037C111.773 11.7571 111.649 11.8807 111.496 11.9744C111.342 12.0653 111.173 12.1108 110.989 12.1108ZM118.629 12V10.6705L121.736 7.79403C122 7.53835 122.222 7.30824 122.401 7.10369C122.582 6.89915 122.72 6.69886 122.814 6.50284C122.908 6.30398 122.955 6.08949 122.955 5.85938C122.955 5.60369 122.896 5.38352 122.78 5.19886C122.663 5.01136 122.504 4.8679 122.303 4.76847C122.101 4.66619 121.872 4.61506 121.616 4.61506C121.349 4.61506 121.116 4.66903 120.918 4.77699C120.719 4.88494 120.565 5.03977 120.457 5.24148C120.349 5.44318 120.295 5.68324 120.295 5.96165H118.544C118.544 5.39062 118.673 4.89489 118.932 4.47443C119.19 4.05398 119.553 3.72869 120.018 3.49858C120.484 3.26847 121.021 3.15341 121.629 3.15341C122.254 3.15341 122.798 3.2642 123.261 3.4858C123.727 3.70455 124.089 4.00852 124.348 4.39773C124.607 4.78693 124.736 5.23295 124.736 5.7358C124.736 6.06534 124.67 6.39062 124.54 6.71165C124.412 7.03267 124.183 7.3892 123.854 7.78125C123.524 8.17045 123.06 8.63778 122.46 9.18324L121.186 10.4318V10.4915H124.851V12H118.629ZM129.414 12.1193C128.777 12.1193 128.211 12.0099 127.713 11.7912C127.219 11.5696 126.828 11.2656 126.542 10.8793C126.257 10.4901 126.111 10.0412 126.103 9.53267H127.961C127.972 9.74574 128.042 9.93324 128.169 10.0952C128.3 10.2543 128.473 10.3778 128.689 10.4659C128.905 10.554 129.148 10.598 129.418 10.598C129.699 10.598 129.948 10.5483 130.164 10.4489C130.38 10.3494 130.549 10.2116 130.671 10.0355C130.793 9.85937 130.854 9.65625 130.854 9.42614C130.854 9.19318 130.789 8.98722 130.658 8.80824C130.53 8.62642 130.346 8.48437 130.104 8.3821C129.865 8.27983 129.581 8.22869 129.252 8.22869H128.438V6.87358H129.252C129.53 6.87358 129.776 6.82528 129.989 6.72869C130.205 6.6321 130.373 6.49858 130.492 6.32812C130.611 6.15483 130.671 5.95312 130.671 5.72301C130.671 5.50426 130.618 5.3125 130.513 5.14773C130.411 4.98011 130.266 4.84943 130.078 4.75568C129.894 4.66193 129.678 4.61506 129.431 4.61506C129.181 4.61506 128.952 4.66051 128.745 4.75142C128.537 4.83949 128.371 4.96591 128.246 5.13068C128.121 5.29545 128.054 5.48864 128.046 5.71023H126.277C126.286 5.20739 126.429 4.7642 126.708 4.38068C126.986 3.99716 127.361 3.69744 127.833 3.48153C128.307 3.26278 128.843 3.15341 129.439 3.15341C130.042 3.15341 130.569 3.26278 131.02 3.48153C131.472 3.70028 131.823 3.99574 132.073 4.3679C132.326 4.73722 132.451 5.15199 132.448 5.61222C132.451 6.10085 132.299 6.50852 131.992 6.83523C131.688 7.16193 131.292 7.36932 130.803 7.45739V7.52557C131.445 7.60795 131.934 7.83097 132.269 8.1946C132.607 8.5554 132.775 9.0071 132.772 9.54972C132.775 10.0469 132.631 10.4886 132.341 10.875C132.054 11.2614 131.658 11.5653 131.152 11.7869C130.647 12.0085 130.067 12.1193 129.414 12.1193ZM140.02 12H136.926V3.27273H140.046C140.924 3.27273 141.679 3.44744 142.313 3.79688C142.946 4.14347 143.434 4.64205 143.775 5.29261C144.118 5.94318 144.29 6.72159 144.29 7.62784C144.29 8.53693 144.118 9.31818 143.775 9.97159C143.434 10.625 142.944 11.1264 142.304 11.4759C141.668 11.8253 140.907 12 140.02 12ZM138.772 10.419H139.944C140.489 10.419 140.948 10.3224 141.32 10.1293C141.695 9.93324 141.976 9.63068 142.164 9.22159C142.354 8.80966 142.449 8.27841 142.449 7.62784C142.449 6.98295 142.354 6.45597 142.164 6.04688C141.976 5.63778 141.696 5.33665 141.324 5.14347C140.952 4.95028 140.493 4.85369 139.948 4.85369H138.772V10.419ZM145.657 12V3.27273H151.538V4.79403H147.502V6.87358H151.235V8.39489H147.502V10.4787H151.555V12H145.657ZM155.782 12V3.27273H161.663V4.79403H157.627V6.87358H161.36V8.39489H157.627V10.4787H161.68V12H155.782ZM170.429 3.27273V12H168.836L165.039 6.5071H164.975V12H163.13V3.27273H164.749L168.516 8.76136H168.593V3.27273H170.429ZM171.954 12V3.27273H177.835V4.79403H173.799V6.87358H177.532V8.39489H173.799V10.4787H177.852V12H171.954ZM179.301 12V3.27273H182.745C183.404 3.27273 183.966 3.39062 184.432 3.62642C184.901 3.85937 185.257 4.19034 185.502 4.61932C185.749 5.04545 185.873 5.54687 185.873 6.12358C185.873 6.70312 185.748 7.2017 185.498 7.61932C185.248 8.03409 184.885 8.35227 184.411 8.57386C183.939 8.79545 183.368 8.90625 182.698 8.90625H180.392V7.4233H182.4C182.752 7.4233 183.044 7.375 183.277 7.27841C183.51 7.18182 183.684 7.03693 183.797 6.84375C183.914 6.65057 183.972 6.41051 183.972 6.12358C183.972 5.83381 183.914 5.58949 183.797 5.39062C183.684 5.19176 183.509 5.04119 183.273 4.93892C183.04 4.83381 182.746 4.78125 182.391 4.78125H181.147V12H179.301ZM184.015 8.02841L186.184 12H184.147L182.025 8.02841H184.015ZM195.196 7.63636C195.196 8.58807 195.016 9.39773 194.655 10.0653C194.297 10.733 193.809 11.2429 193.189 11.5952C192.573 11.9446 191.88 12.1193 191.11 12.1193C190.334 12.1193 189.638 11.9432 189.022 11.5909C188.405 11.2386 187.918 10.7287 187.56 10.0611C187.202 9.39347 187.023 8.58523 187.023 7.63636C187.023 6.68466 187.202 5.875 187.56 5.20739C187.918 4.53977 188.405 4.03125 189.022 3.68182C189.638 3.32955 190.334 3.15341 191.11 3.15341C191.88 3.15341 192.573 3.32955 193.189 3.68182C193.809 4.03125 194.297 4.53977 194.655 5.20739C195.016 5.875 195.196 6.68466 195.196 7.63636ZM193.326 7.63636C193.326 7.01989 193.233 6.5 193.049 6.0767C192.867 5.65341 192.61 5.33239 192.277 5.11364C191.945 4.89489 191.556 4.78551 191.11 4.78551C190.664 4.78551 190.275 4.89489 189.942 5.11364C189.61 5.33239 189.351 5.65341 189.167 6.0767C188.985 6.5 188.894 7.01989 188.894 7.63636C188.894 8.25284 188.985 8.77273 189.167 9.19602C189.351 9.61932 189.61 9.94034 189.942 10.1591C190.275 10.3778 190.664 10.4872 191.11 10.4872C191.556 10.4872 191.945 10.3778 192.277 10.1591C192.61 9.94034 192.867 9.61932 193.049 9.19602C193.233 8.77273 193.326 8.25284 193.326 7.63636ZM197.951 10.8068L197.904 11.2756C197.868 11.6506 197.797 12.0241 197.691 12.3963C197.589 12.7713 197.481 13.1108 197.368 13.4148C197.257 13.7188 197.167 13.9574 197.099 14.1307H195.923C195.966 13.9631 196.024 13.7287 196.098 13.4276C196.172 13.1293 196.241 12.794 196.306 12.4219C196.372 12.0497 196.413 11.6705 196.43 11.2841L196.451 10.8068H197.951ZM199.594 12V10.6705L202.701 7.79403C202.965 7.53835 203.186 7.30824 203.365 7.10369C203.547 6.89915 203.685 6.69886 203.779 6.50284C203.873 6.30398 203.919 6.08949 203.919 5.85938C203.919 5.60369 203.861 5.38352 203.745 5.19886C203.628 5.01136 203.469 4.8679 203.267 4.76847C203.066 4.66619 202.837 4.61506 202.581 4.61506C202.314 4.61506 202.081 4.66903 201.882 4.77699C201.684 4.88494 201.53 5.03977 201.422 5.24148C201.314 5.44318 201.26 5.68324 201.26 5.96165H199.509C199.509 5.39062 199.638 4.89489 199.897 4.47443C200.155 4.05398 200.517 3.72869 200.983 3.49858C201.449 3.26847 201.986 3.15341 202.594 3.15341C203.219 3.15341 203.763 3.2642 204.226 3.4858C204.692 3.70455 205.054 4.00852 205.313 4.39773C205.571 4.78693 205.701 5.23295 205.701 5.7358C205.701 6.06534 205.635 6.39062 205.505 6.71165C205.377 7.03267 205.148 7.3892 204.819 7.78125C204.489 8.17045 204.025 8.63778 203.425 9.18324L202.151 10.4318V10.4915H205.816V12H199.594ZM210.575 12.1918C209.842 12.1889 209.211 12.0085 208.683 11.6506C208.157 11.2926 207.752 10.7741 207.468 10.0952C207.187 9.41619 207.048 8.59943 207.05 7.64489C207.05 6.69318 207.191 5.8821 207.472 5.21165C207.756 4.54119 208.161 4.03125 208.687 3.68182C209.215 3.32955 209.844 3.15341 210.575 3.15341C211.305 3.15341 211.933 3.32955 212.458 3.68182C212.987 4.03409 213.393 4.54545 213.677 5.21591C213.961 5.88352 214.102 6.69318 214.099 7.64489C214.099 8.60227 213.957 9.42045 213.673 10.0994C213.391 10.7784 212.988 11.2969 212.462 11.6548C211.937 12.0128 211.308 12.1918 210.575 12.1918ZM210.575 10.6619C211.075 10.6619 211.474 10.4105 211.772 9.90767C212.07 9.40483 212.218 8.65057 212.215 7.64489C212.215 6.98295 212.147 6.43182 212.011 5.99148C211.877 5.55114 211.687 5.22017 211.44 4.99858C211.195 4.77699 210.907 4.66619 210.575 4.66619C210.077 4.66619 209.68 4.91477 209.381 5.41193C209.083 5.90909 208.933 6.65341 208.93 7.64489C208.93 8.31534 208.996 8.875 209.13 9.32386C209.266 9.76989 209.458 10.1051 209.705 10.3295C209.952 10.5511 210.242 10.6619 210.575 10.6619ZM215.414 12V10.6705L218.521 7.79403C218.785 7.53835 219.007 7.30824 219.186 7.10369C219.368 6.89915 219.505 6.69886 219.599 6.50284C219.693 6.30398 219.74 6.08949 219.74 5.85938C219.74 5.60369 219.681 5.38352 219.565 5.19886C219.449 5.01136 219.289 4.8679 219.088 4.76847C218.886 4.66619 218.657 4.61506 218.402 4.61506C218.135 4.61506 217.902 4.66903 217.703 4.77699C217.504 4.88494 217.35 5.03977 217.243 5.24148C217.135 5.44318 217.081 5.68324 217.081 5.96165H215.329C215.329 5.39062 215.458 4.89489 215.717 4.47443C215.975 4.05398 216.338 3.72869 216.804 3.49858C217.27 3.26847 217.806 3.15341 218.414 3.15341C219.039 3.15341 219.583 3.2642 220.047 3.4858C220.512 3.70455 220.875 4.00852 221.133 4.39773C221.392 4.78693 221.521 5.23295 221.521 5.7358C221.521 6.06534 221.456 6.39062 221.325 6.71165C221.197 7.03267 220.968 7.3892 220.639 7.78125C220.309 8.17045 219.845 8.63778 219.245 9.18324L217.971 10.4318V10.4915H221.636V12H215.414ZM226.161 12.1193C225.558 12.1193 225.021 12.0085 224.55 11.7869C224.081 11.5653 223.709 11.2599 223.433 10.8707C223.158 10.4815 223.014 10.0355 223.003 9.53267H224.793C224.813 9.87074 224.955 10.1449 225.219 10.3551C225.483 10.5653 225.797 10.6705 226.161 10.6705C226.45 10.6705 226.706 10.6065 226.928 10.4787C227.152 10.348 227.327 10.1676 227.452 9.9375C227.58 9.70455 227.643 9.4375 227.643 9.13636C227.643 8.82955 227.578 8.55966 227.447 8.3267C227.32 8.09375 227.142 7.91193 226.915 7.78125C226.688 7.65057 226.428 7.58381 226.135 7.58097C225.879 7.58097 225.631 7.63352 225.389 7.73864C225.151 7.84375 224.964 7.98722 224.831 8.16903L223.19 7.875L223.604 3.27273H228.939V4.78125H225.125L224.899 6.96733H224.95C225.104 6.75142 225.335 6.57244 225.645 6.4304C225.955 6.28835 226.301 6.21733 226.685 6.21733C227.21 6.21733 227.679 6.34091 228.091 6.58807C228.503 6.83523 228.828 7.17472 229.067 7.60653C229.305 8.03551 229.423 8.52983 229.42 9.08949C229.423 9.67756 229.287 10.2003 229.011 10.6577C228.739 11.1122 228.357 11.4702 227.865 11.7315C227.376 11.9901 226.808 12.1193 226.161 12.1193Z" fill="#B1B1B1" />
                    </svg></div>

                    <h2 className={style.generalText}>
                        <p>Es la mitad de la noche. En las calles hay silencio. Ya todos se fueron a dormir a sus casas. Las calles parecen desiertas. Todos sabemos que la noche suele ser el momento más peligroso para salir. Sin embargo, si prestas atención a esa esquina, hay una sombra que se mueve en la oscuridad. Lleva algo debajo de sus ropas. Sus ojos miran atentos a su alrededor antes de salir de su escondite y moverse hacia la puerta de una casa donde todos parecen dormidos. Una mano cautelosa sale debajo de la ropa y da un toque rítmico en la puerta. Y así tan rápido como se abre para dejar pasar a esta persona, se cierra detrás de ella. El anfitrión y el invitado no hablan. El dueño de casa corre una alfombra que muestra una puerta hacia un sótano. Ambos bajan en silencio y allí, alumbrados por la luz de unas tenues velas, algunas decenas de ojos los reciben. Reconocen a un amigo. Le sonríen en silencio, y en el medio de la sala está lo más preciado que tienen. Tal vez no es nueva, ya ha pasado por las manos de decenas de personas que quieren por lo menos poder leer un fragmento. Y sin embargo, en ese sótano oscuro y silencioso, esa <span style={{ fontWeight: '1000' }}>Biblia,</span> ese libro prohibido en su país, es su mayor secreto, pero también su más grande tesoro. <span style={{ fontWeight: '1000' }}>Cada visita a su iglesia clandestina puede ser su último día en la tierra.</span></p>

                        <p>Escenas así suceden alrededor del mundo porque, al día de hoy,<span style={{ fontWeight: '1000', color: 'white', backgroundColor: '#E98900' }}> más de 360 millones de cristianos en todo el mundo sufren altos niveles de persecución y discriminación por su fe.</span> Corea del Norte, Somalia y Libia lideran la lista de países con mayor persecución a cristianos según la investigación de Puertas Abiertas, pero también países de América Latina, como Colombia, donde grupos guerrilleros y bandas armadas siguen controlando y luchando por gran parte del territorio nacional; o Cuba, donde la Iglesia es constantemente perseguida por el régimen comunista; y México, donde bandas de delincuencia organizada financiadas por poderosos cárteles de la droga amenazan y asesinan a quienes prediquen contra la delincuencia.

                            <span style={{ fontWeight: '1000' }}>Los que son perseguidos están dispuestos a darlo todo por Jesús.</span> Y nosotros, <span style={{ fontWeight: '1000', color: 'white', backgroundColor: '#008066' }}>¿qué estamos haciendo con la libertad que nos ha sido dada?</span></p>
                    </h2>

                    <div className={style.linkContainer}>
                        <a href="./articulo7">
                            <h2 className={style.greyLeftText}>ARTÍCULO ANTERIOR</h2>
                            <h2 className={style.secondLeftText}>REFUGIADOS EN AMERICA LATINA</h2>
                        </a>
                        <a href="./articulo9">
                            <h2 className={style.greyRightText}>ARTÍCULO SIGUIENTE</h2>
                            <h2 className={style.secondRightText}>SEPARADOS ETERNAMENTE</h2>
                        </a>
                    </div>

                </div>
            </div>
            <div style={{ width: '100%' }}>
                <img src="/Footer.png" alt="" />
            </div>
        </div>
    );
};

export default Articulo;
