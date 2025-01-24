import React, { useState, useRef, useEffect } from "react";
import Menu from '../../../component/Menu/Menu';
import style from "./Articulos.module.css";
import ReactPlayer from "react-player";

const Articulo = () => {
    return (
        <div>
            <Menu />
            <div style={{ width: '87%', margin: '0 auto', marginTop: '20%' }}>

                <img src="https://i.postimg.cc/pXHpLcb5/image-3507.png" alt="" />
                <div style={{ fontFamily: 'Inter' }}>
                    <h1 style={{ fontFamily: 'Inter', fontSize: '1.7rem', fontWeight: '1000' }}>“CUMPLE TU DESTINO”</h1>
                    <div style={{ width: '80%' }}><svg width="214" height="19" viewBox="0 0 214 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1357 6.18378C17.619 4.40763 15.9134 0.305821 14.1965 0.848925C9.96751 4.38583 5.99828 8.60755 1.80208 12.2297C-0.393565 11.804 -0.433426 15.5127 0.879177 17.0061C1.75659 18.0057 2.21804 17.319 3.04059 16.6829L6.39595 16.3918C6.79034 17.6614 6.62668 18.6835 7.81595 18.781C8.87672 18.8669 10.066 18.5751 11.1422 18.6662C12.0595 18.2238 11.5835 17.0048 11.3542 16.0969L16.675 15.6455C19.6378 14.7458 18.9625 9.02498 18.1357 6.18442M1.44286 13.3018C1.50664 14.3996 1.68625 15.2947 2.15895 16.2039C1.07708 17.4549 0.043969 13.1576 1.44286 13.3018ZM12.9186 3.15535C12.792 5.33931 13.2253 7.36296 13.9682 9.2821L12.8459 9.68029C12.8061 9.6835 12.6223 9.37379 12.6148 9.34302L12.1055 7.27063L2.38733 13.046L12.9191 3.15535H12.9186ZM7.56177 17.6928L7.22319 16.3739L10.5265 16.1142L10.8899 17.5563C9.79259 17.7146 8.6685 17.7044 7.56177 17.6928ZM14.1693 14.801L12.9688 14.8952C12.9688 14.8952 12.9679 14.8946 12.9674 14.8933L11.923 14.9728H11.9216C11.7448 15.0414 11.2356 15.0729 11.1099 15.0363L10.0974 15.1133L10.1194 15.1658L9.3452 15.171L4.68568 15.5288L4.39493 15.5512L3.0087 15.6596C2.51442 15.5724 2.46659 14.7824 2.32121 14.2598L11.6145 8.61717C12.1439 10.2522 12.6874 11.8886 13.4964 13.3044C13.8012 13.8379 14.1581 14.2906 14.4976 14.7747L14.1703 14.8003L14.1693 14.801ZM17.7643 13.3987C16.3711 16.799 13.7787 12.7619 13.1231 10.669L15.0913 9.76429C14.2359 7.93877 13.5358 5.90806 13.6474 3.69525C13.805 0.566152 15.3764 2.00951 16.2599 3.64139C17.4009 5.7484 18.7824 10.914 17.7643 13.398" fill="black" />
                        <path d="M19.6221 12.6163L19.4922 13.3962L21.9738 13.368C22.1007 13.3025 22.1388 12.5704 22.0169 12.4979L19.6221 12.6158V12.6163Z" fill="black" />
                        <path d="M32.7585 14V5.27273H36.2017C36.8608 5.27273 37.4233 5.39062 37.8892 5.62642C38.358 5.85937 38.7145 6.19034 38.9588 6.61932C39.206 7.04545 39.3295 7.54687 39.3295 8.12358C39.3295 8.70312 39.2045 9.2017 38.9545 9.61932C38.7045 10.0341 38.3423 10.3523 37.8679 10.5739C37.3963 10.7955 36.8253 10.9062 36.1548 10.9062H33.8494V9.4233H35.8565C36.2088 9.4233 36.5014 9.375 36.7344 9.27841C36.9673 9.18182 37.1406 9.03693 37.2543 8.84375C37.3707 8.65057 37.429 8.41051 37.429 8.12358C37.429 7.83381 37.3707 7.58949 37.2543 7.39062C37.1406 7.19176 36.9659 7.04119 36.7301 6.93892C36.4972 6.83381 36.2031 6.78125 35.848 6.78125H34.6037V14H32.7585ZM37.4716 10.0284L39.6406 14H37.6037L35.4815 10.0284H37.4716ZM40.6335 14V5.27273H46.5142V6.79403H42.4787V8.87358H46.2116V10.3949H42.4787V12.4787H46.5312V14H40.6335ZM51.0749 14H47.9812V5.27273H51.1005C51.9783 5.27273 52.734 5.44744 53.3675 5.79688C54.0011 6.14347 54.4883 6.64205 54.8292 7.29261C55.1729 7.94318 55.3448 8.72159 55.3448 9.62784C55.3448 10.5369 55.1729 11.3182 54.8292 11.9716C54.4883 12.625 53.9982 13.1264 53.359 13.4759C52.7227 13.8253 51.9613 14 51.0749 14ZM49.8263 12.419H50.9982C51.5437 12.419 52.0025 12.3224 52.3746 12.1293C52.7496 11.9332 53.0309 11.6307 53.2184 11.2216C53.4087 10.8097 53.5039 10.2784 53.5039 9.62784C53.5039 8.98295 53.4087 8.45597 53.2184 8.04688C53.0309 7.63778 52.7511 7.33665 52.3789 7.14347C52.0067 6.95028 51.5479 6.85369 51.0025 6.85369H49.8263V12.419ZM57.7237 14H55.7464L58.7592 5.27273H61.1371L64.1456 14H62.1683L59.9822 7.26705H59.9141L57.7237 14ZM57.6001 10.5696H62.2706V12.0099H57.6001V10.5696ZM72.4862 8.32812H70.6197C70.5856 8.08665 70.516 7.87216 70.4109 7.68466C70.3058 7.49432 70.1708 7.33239 70.006 7.19886C69.8413 7.06534 69.6509 6.96307 69.435 6.89205C69.2219 6.82102 68.9904 6.78551 68.7404 6.78551C68.2887 6.78551 67.8952 6.89773 67.56 7.12216C67.2248 7.34375 66.9648 7.66761 66.7802 8.09375C66.5955 8.51705 66.5032 9.03125 66.5032 9.63636C66.5032 10.2585 66.5955 10.7812 66.7802 11.2045C66.9677 11.6278 67.229 11.9474 67.5643 12.1634C67.8995 12.3793 68.2873 12.4872 68.7276 12.4872C68.9748 12.4872 69.2035 12.4545 69.4137 12.3892C69.6268 12.3239 69.8157 12.2287 69.9805 12.1037C70.1452 11.9759 70.2816 11.821 70.3896 11.6392C70.5004 11.4574 70.5771 11.25 70.6197 11.017L72.4862 11.0256C72.4379 11.4261 72.3171 11.8125 72.1239 12.1847C71.9336 12.554 71.6765 12.8849 71.3526 13.1776C71.0316 13.4673 70.6481 13.6974 70.2021 13.8679C69.7589 14.0355 69.2575 14.1193 68.6978 14.1193C67.9194 14.1193 67.2234 13.9432 66.6097 13.5909C65.9989 13.2386 65.516 12.7287 65.1609 12.0611C64.8086 11.3935 64.6325 10.5852 64.6325 9.63636C64.6325 8.68466 64.8114 7.875 65.1694 7.20739C65.5273 6.53977 66.0131 6.03125 66.6268 5.68182C67.2404 5.32955 67.9308 5.15341 68.6978 5.15341C69.2035 5.15341 69.6722 5.22443 70.104 5.36648C70.5387 5.50852 70.9237 5.71591 71.2589 5.98864C71.5941 6.25852 71.8668 6.58949 72.0771 6.98153C72.2901 7.37358 72.4265 7.82244 72.4862 8.32812ZM81.5096 8.32812H79.6431C79.609 8.08665 79.5394 7.87216 79.4343 7.68466C79.3292 7.49432 79.1942 7.33239 79.0295 7.19886C78.8647 7.06534 78.6744 6.96307 78.4585 6.89205C78.2454 6.82102 78.0138 6.78551 77.7638 6.78551C77.3121 6.78551 76.9187 6.89773 76.5835 7.12216C76.2482 7.34375 75.9883 7.66761 75.8036 8.09375C75.619 8.51705 75.5266 9.03125 75.5266 9.63636C75.5266 10.2585 75.619 10.7812 75.8036 11.2045C75.9911 11.6278 76.2525 11.9474 76.5877 12.1634C76.9229 12.3793 77.3107 12.4872 77.7511 12.4872C77.9982 12.4872 78.2269 12.4545 78.4371 12.3892C78.6502 12.3239 78.8391 12.2287 79.0039 12.1037C79.1687 11.9759 79.305 11.821 79.413 11.6392C79.5238 11.4574 79.6005 11.25 79.6431 11.017L81.5096 11.0256C81.4613 11.4261 81.3406 11.8125 81.1474 12.1847C80.957 12.554 80.6999 12.8849 80.3761 13.1776C80.055 13.4673 79.6715 13.6974 79.2255 13.8679C78.7823 14.0355 78.2809 14.1193 77.7212 14.1193C76.9428 14.1193 76.2468 13.9432 75.6332 13.5909C75.0224 13.2386 74.5394 12.7287 74.1843 12.0611C73.832 11.3935 73.6559 10.5852 73.6559 9.63636C73.6559 8.68466 73.8349 7.875 74.1928 7.20739C74.5508 6.53977 75.0366 6.03125 75.6502 5.68182C76.2638 5.32955 76.9542 5.15341 77.7212 5.15341C78.2269 5.15341 78.6957 5.22443 79.1275 5.36648C79.5621 5.50852 79.9471 5.71591 80.2823 5.98864C80.6175 6.25852 80.8903 6.58949 81.1005 6.98153C81.3136 7.37358 81.4499 7.82244 81.5096 8.32812ZM84.6779 5.27273V14H82.8327V5.27273H84.6779ZM94.2159 9.63636C94.2159 10.5881 94.0355 11.3977 93.6747 12.0653C93.3168 12.733 92.8281 13.2429 92.2088 13.5952C91.5923 13.9446 90.8991 14.1193 90.1293 14.1193C89.3537 14.1193 88.6577 13.9432 88.0412 13.5909C87.4247 13.2386 86.9375 12.7287 86.5795 12.0611C86.2216 11.3935 86.0426 10.5852 86.0426 9.63636C86.0426 8.68466 86.2216 7.875 86.5795 7.20739C86.9375 6.53977 87.4247 6.03125 88.0412 5.68182C88.6577 5.32955 89.3537 5.15341 90.1293 5.15341C90.8991 5.15341 91.5923 5.32955 92.2088 5.68182C92.8281 6.03125 93.3168 6.53977 93.6747 7.20739C94.0355 7.875 94.2159 8.68466 94.2159 9.63636ZM92.3452 9.63636C92.3452 9.01989 92.2528 8.5 92.0682 8.0767C91.8864 7.65341 91.6293 7.33239 91.2969 7.11364C90.9645 6.89489 90.5753 6.78551 90.1293 6.78551C89.6832 6.78551 89.294 6.89489 88.9616 7.11364C88.6293 7.33239 88.3707 7.65341 88.1861 8.0767C88.0043 8.5 87.9134 9.01989 87.9134 9.63636C87.9134 10.2528 88.0043 10.7727 88.1861 11.196C88.3707 11.6193 88.6293 11.9403 88.9616 12.1591C89.294 12.3778 89.6832 12.4872 90.1293 12.4872C90.5753 12.4872 90.9645 12.3778 91.2969 12.1591C91.6293 11.9403 91.8864 11.6193 92.0682 11.196C92.2528 10.7727 92.3452 10.2528 92.3452 9.63636ZM89.4773 4.42898L90.3807 2.49006H92.0597L90.7599 4.42898H89.4773ZM102.882 5.27273V14H101.289L97.4918 8.5071H97.4279V14H95.5827V5.27273H97.2021L100.969 10.7614H101.046V5.27273H102.882ZM110.989 14.1108C110.707 14.1108 110.466 14.0114 110.264 13.8125C110.065 13.6108 109.966 13.3693 109.966 13.0881C109.966 12.8097 110.065 12.571 110.264 12.3722C110.466 12.1733 110.707 12.0739 110.989 12.0739C111.261 12.0739 111.5 12.1733 111.705 12.3722C111.909 12.571 112.011 12.8097 112.011 13.0881C112.011 13.2756 111.963 13.4474 111.866 13.6037C111.773 13.7571 111.649 13.8807 111.496 13.9744C111.342 14.0653 111.173 14.1108 110.989 14.1108ZM118.68 14V5.27273H124.561V6.79403H120.526V8.87358H124.259V10.3949H120.526V12.4787H124.578V14H118.68ZM133.328 5.27273V14H131.734L127.937 8.5071H127.873V14H126.028V5.27273H127.647L131.414 10.7614H131.491V5.27273H133.328ZM134.852 14V5.27273H140.733V6.79403H136.697V8.87358H140.43V10.3949H136.697V12.4787H140.75V14H134.852ZM142.2 14V5.27273H145.643C146.302 5.27273 146.865 5.39062 147.331 5.62642C147.799 5.85937 148.156 6.19034 148.4 6.61932C148.647 7.04545 148.771 7.54687 148.771 8.12358C148.771 8.70312 148.646 9.2017 148.396 9.61932C148.146 10.0341 147.784 10.3523 147.309 10.5739C146.838 10.7955 146.267 10.9062 145.596 10.9062H143.291V9.4233H145.298C145.65 9.4233 145.943 9.375 146.176 9.27841C146.409 9.18182 146.582 9.03693 146.696 8.84375C146.812 8.65057 146.87 8.41051 146.87 8.12358C146.87 7.83381 146.812 7.58949 146.696 7.39062C146.582 7.19176 146.407 7.04119 146.172 6.93892C145.939 6.83381 145.645 6.78125 145.289 6.78125H144.045V14H142.2ZM146.913 10.0284L149.082 14H147.045L144.923 10.0284H146.913ZM158.095 9.63636C158.095 10.5881 157.914 11.3977 157.554 12.0653C157.196 12.733 156.707 13.2429 156.088 13.5952C155.471 13.9446 154.778 14.1193 154.008 14.1193C153.233 14.1193 152.537 13.9432 151.92 13.5909C151.304 13.2386 150.816 12.7287 150.458 12.0611C150.1 11.3935 149.922 10.5852 149.922 9.63636C149.922 8.68466 150.1 7.875 150.458 7.20739C150.816 6.53977 151.304 6.03125 151.92 5.68182C152.537 5.32955 153.233 5.15341 154.008 5.15341C154.778 5.15341 155.471 5.32955 156.088 5.68182C156.707 6.03125 157.196 6.53977 157.554 7.20739C157.914 7.875 158.095 8.68466 158.095 9.63636ZM156.224 9.63636C156.224 9.01989 156.132 8.5 155.947 8.0767C155.765 7.65341 155.508 7.33239 155.176 7.11364C154.843 6.89489 154.454 6.78551 154.008 6.78551C153.562 6.78551 153.173 6.89489 152.841 7.11364C152.508 7.33239 152.25 7.65341 152.065 8.0767C151.883 8.5 151.792 9.01989 151.792 9.63636C151.792 10.2528 151.883 10.7727 152.065 11.196C152.25 11.6193 152.508 11.9403 152.841 12.1591C153.173 12.3778 153.562 12.4872 154.008 12.4872C154.454 12.4872 154.843 12.3778 155.176 12.1591C155.508 11.9403 155.765 11.6193 155.947 11.196C156.132 10.7727 156.224 10.2528 156.224 9.63636ZM162.188 14V12.6705L165.294 9.79403C165.559 9.53835 165.78 9.30824 165.959 9.10369C166.141 8.89915 166.279 8.69886 166.373 8.50284C166.466 8.30398 166.513 8.08949 166.513 7.85938C166.513 7.60369 166.455 7.38352 166.338 7.19886C166.222 7.01136 166.063 6.8679 165.861 6.76847C165.659 6.66619 165.431 6.61506 165.175 6.61506C164.908 6.61506 164.675 6.66903 164.476 6.77699C164.277 6.88494 164.124 7.03977 164.016 7.24148C163.908 7.44318 163.854 7.68324 163.854 7.96165H162.103C162.103 7.39062 162.232 6.89489 162.49 6.47443C162.749 6.05398 163.111 5.72869 163.577 5.49858C164.043 5.26847 164.58 5.15341 165.188 5.15341C165.813 5.15341 166.357 5.2642 166.82 5.4858C167.286 5.70455 167.648 6.00852 167.907 6.39773C168.165 6.78693 168.294 7.23295 168.294 7.7358C168.294 8.06534 168.229 8.39062 168.098 8.71165C167.971 9.03267 167.742 9.3892 167.412 9.78125C167.083 10.1705 166.618 10.6378 166.019 11.1832L164.745 12.4318V12.4915H168.409V14H162.188ZM169.427 12.4659V11.0128L173.07 5.27273H174.323V7.28409H173.582L171.285 10.919V10.9872H176.462V12.4659H169.427ZM173.616 14V12.0227L173.65 11.3793V5.27273H175.38V14H173.616ZM182.459 12.8068L182.412 13.2756C182.375 13.6506 182.304 14.0241 182.199 14.3963C182.097 14.7713 181.989 15.1108 181.875 15.4148C181.765 15.7188 181.675 15.9574 181.607 16.1307H180.431C180.473 15.9631 180.532 15.7287 180.605 15.4276C180.679 15.1293 180.749 14.794 180.814 14.4219C180.88 14.0497 180.921 13.6705 180.938 13.2841L180.959 12.8068H182.459ZM184.102 14V12.6705L187.208 9.79403C187.473 9.53835 187.694 9.30824 187.873 9.10369C188.055 8.89915 188.193 8.69886 188.287 8.50284C188.38 8.30398 188.427 8.08949 188.427 7.85938C188.427 7.60369 188.369 7.38352 188.252 7.19886C188.136 7.01136 187.977 6.8679 187.775 6.76847C187.574 6.66619 187.345 6.61506 187.089 6.61506C186.822 6.61506 186.589 6.66903 186.39 6.77699C186.191 6.88494 186.038 7.03977 185.93 7.24148C185.822 7.44318 185.768 7.68324 185.768 7.96165H184.017C184.017 7.39062 184.146 6.89489 184.404 6.47443C184.663 6.05398 185.025 5.72869 185.491 5.49858C185.957 5.26847 186.494 5.15341 187.102 5.15341C187.727 5.15341 188.271 5.2642 188.734 5.4858C189.2 5.70455 189.562 6.00852 189.821 6.39773C190.079 6.78693 190.208 7.23295 190.208 7.7358C190.208 8.06534 190.143 8.39062 190.012 8.71165C189.885 9.03267 189.656 9.3892 189.326 9.78125C188.997 10.1705 188.532 10.6378 187.933 11.1832L186.659 12.4318V12.4915H190.324V14H184.102ZM195.082 14.1918C194.349 14.1889 193.719 14.0085 193.19 13.6506C192.665 13.2926 192.26 12.7741 191.976 12.0952C191.695 11.4162 191.555 10.5994 191.558 9.64489C191.558 8.69318 191.699 7.8821 191.98 7.21165C192.264 6.54119 192.669 6.03125 193.195 5.68182C193.723 5.32955 194.352 5.15341 195.082 5.15341C195.813 5.15341 196.44 5.32955 196.966 5.68182C197.494 6.03409 197.901 6.54545 198.185 7.21591C198.469 7.88352 198.609 8.69318 198.607 9.64489C198.607 10.6023 198.464 11.4205 198.18 12.0994C197.899 12.7784 197.496 13.2969 196.97 13.6548C196.445 14.0128 195.815 14.1918 195.082 14.1918ZM195.082 12.6619C195.582 12.6619 195.982 12.4105 196.28 11.9077C196.578 11.4048 196.726 10.6506 196.723 9.64489C196.723 8.98295 196.655 8.43182 196.518 7.99148C196.385 7.55114 196.195 7.22017 195.947 6.99858C195.703 6.77699 195.415 6.66619 195.082 6.66619C194.585 6.66619 194.188 6.91477 193.889 7.41193C193.591 7.90909 193.44 8.65341 193.438 9.64489C193.438 10.3153 193.504 10.875 193.638 11.3239C193.774 11.7699 193.966 12.1051 194.213 12.3295C194.46 12.5511 194.75 12.6619 195.082 12.6619ZM199.922 14V12.6705L203.029 9.79403C203.293 9.53835 203.515 9.30824 203.694 9.10369C203.875 8.89915 204.013 8.69886 204.107 8.50284C204.201 8.30398 204.248 8.08949 204.248 7.85938C204.248 7.60369 204.189 7.38352 204.073 7.19886C203.956 7.01136 203.797 6.8679 203.596 6.76847C203.394 6.66619 203.165 6.61506 202.909 6.61506C202.642 6.61506 202.409 6.66903 202.211 6.77699C202.012 6.88494 201.858 7.03977 201.75 7.24148C201.642 7.44318 201.588 7.68324 201.588 7.96165H199.837C199.837 7.39062 199.966 6.89489 200.225 6.47443C200.483 6.05398 200.846 5.72869 201.311 5.49858C201.777 5.26847 202.314 5.15341 202.922 5.15341C203.547 5.15341 204.091 5.2642 204.554 5.4858C205.02 5.70455 205.382 6.00852 205.641 6.39773C205.9 6.78693 206.029 7.23295 206.029 7.7358C206.029 8.06534 205.963 8.39062 205.833 8.71165C205.705 9.03267 205.476 9.3892 205.147 9.78125C204.817 10.1705 204.353 10.6378 203.753 11.1832L202.479 12.4318V12.4915H206.144V14H199.922ZM210.668 14.1193C210.066 14.1193 209.529 14.0085 209.058 13.7869C208.589 13.5653 208.217 13.2599 207.941 12.8707C207.665 12.4815 207.522 12.0355 207.511 11.5327H209.3C209.32 11.8707 209.462 12.1449 209.727 12.3551C209.991 12.5653 210.305 12.6705 210.668 12.6705C210.958 12.6705 211.214 12.6065 211.435 12.4787C211.66 12.348 211.835 12.1676 211.96 11.9375C212.087 11.7045 212.151 11.4375 212.151 11.1364C212.151 10.8295 212.086 10.5597 211.955 10.3267C211.827 10.0937 211.65 9.91193 211.423 9.78125C211.195 9.65057 210.935 9.58381 210.643 9.58097C210.387 9.58097 210.138 9.63352 209.897 9.73864C209.658 9.84375 209.472 9.98722 209.339 10.169L207.698 9.875L208.112 5.27273H213.447V6.78125H209.633L209.407 8.96733H209.458C209.612 8.75142 209.843 8.57244 210.153 8.4304C210.462 8.28835 210.809 8.21733 211.192 8.21733C211.718 8.21733 212.187 8.34091 212.599 8.58807C213.011 8.83523 213.336 9.17472 213.575 9.60653C213.813 10.0355 213.931 10.5298 213.928 11.0895C213.931 11.6776 213.795 12.2003 213.519 12.6577C213.246 13.1122 212.864 13.4702 212.373 13.7315C211.884 13.9901 211.316 14.1193 210.668 14.1193Z" fill="#B1B1B1" />
                    </svg>
                    </div>

                    <h2 className={style.generalText}>
                        <p><span style={{fontWeight:'1000', fontSize:'clamp(1rem,1.2rem,1.4rem)'}}>¿Crees que el CIMA se ha terminado?</span></p>
                        <p>    De ser así, debes saber que <span style={{fontWeight:'1000'}}>el camino recién comienza.</span> Ya has tenido una experiencia en el Operación Cima, yendo a las calles de Córdoba a predicar el evangelio. Pero ahora deberás seguir en esa práctica.</p>

                        <p>    Puede que hayas elegido ir a un experimenta. Si es así, ¡increíble! No tienes idea de los desafíos que se vienen por delante. Dios va a sorprenderte, formará tu carácter, pero sobre todo, bendecirá a otros a través tuyo. Tendrás la posibilidad de cumplir con Su misión en un lugar nuevo en un contexto intercultural. Por eso, es importante que mantengas la visión clara sobre el propósito de este viaje y no te distraigas con emociones pasajeras, cansancio o críticas. El diablo intentará meterse en medio de ustedes porque no quiere que hablen de Jesús en esos lugares, pero recuerda que <span style={{color:'#008066', fontWeight:'1000'}}>los desafíos son parte del proceso</span> (Efesios 6:11). <span style={{fontWeight:'1000'}}>Es importante que dependas del Espíritu Santo para superar el agotamiento físico y emocional.</span></p>

                        <p>    Confía en que, aunque no veas resultados inmediatos, la semilla ha sido plantada y dará fruto en Su tiempo (Gálatas 6:9). Enfócate en obedecer, más que en el éxito que puedas medir con resultados humanos. “Por lo tanto, mis amados hermanos, permanezcan fuertes y constantes. Trabajen siempre para el Señor con entusiasmo, porque ustedes saben que nada de lo que hacen para el Señor es inútil.” 1 Corintios 15:58
                            Pero, también, puede que tú estés volviendo a tu ciudad y creas que si no vas al experimenta, no hay nada más para ti. Dios te trajo hasta aquí, a este CIMA, para que adquieras el conocimiento; pero ahora tienes que ponerlo en práctica a donde sea que vayas (Santiago 1:22). <span style={{fontWeight:'1000'}}>Tú también debes cumplir con Su misión.</span> En tu casa, tu trabajo, tu iglesia, tu barrio, donde sea. No permitas que la experiencia haya sido un evento aislado, <span style={{fontWeight:'1000'}}>busca formas de compartir lo aprendido con otros y cuenta tu testimonio con quien te encuentres. El campo misionero será en donde sea que tú te encuentres.</span></p>
                        <p>    Cada hijo de Dios tiene un <span style={{fontWeight:'1000', fontStyle:'italic'}}>llamado único</span> en su contexto, Él te ha puesto allí donde estás por una razón. Por eso, <span style={{fontWeight:'1000', backgroundColor:'#0B7F67', color:'white'}}>es importante que predicar sea un estilo de vida, y no un evento ocasional.</span> Identifica en qué áreas específicas de tu vida diaria puedes aplicar lo aprendido y pídele al Espíritu Santo fortaleza y guía para perseverar en la obra, sea en el campo o en tu casa (Juan 14:26).
                            <span style={{fontWeight:'1000', color:'#008066'}}>“La cosecha es grande, pero los obreros son pocos. Así que oren al Señor que está a cargo de la cosecha; pídanle que envíe más obreros a sus campos.” </span> <br /><span style={{color:'#008066'}}>Mateo 9:37-38 (NTV).</span></p>
                    </h2>

                    <div className={style.linkContainer}>
                        <a style={{visibility:'hidden'}} href="./articulo7">
                            <h2 className={style.greyLeftText}>ARTÍCULO ANTERIOR</h2>
                            <h2 className={style.secondLeftText}>REFUGIADOS EN AMERICA LATINA</h2>
                        </a>
                        <a href="./articulo11">
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
