import React, { useState, useRef, useEffect } from "react";
import Menu from '../../../component/Menu/Menu';
import style from "./Articulos.module.css";
import ReactPlayer from "react-player";

const Articulo = () => {
    return (
        <div>
            <Menu />
            <div style={{ width: '87%', margin: '0 auto', marginTop: '20%' }}>
                
                <ReactPlayer url='https://vimeo.com/1049265313/a5f8913780'
                
                                    width='100%'
                                    height='30vh'
                                    controls
                                />
                <div style={{ fontFamily: 'Mulish' }}>
                    <h1 style={{ fontFamily: 'Mulish', fontSize: '1.8rem', fontWeight: '800' }}>LA CRUZ</h1>
                    <svg width="307" height="19" viewBox="0 0 307 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.4929 7.78267C37.4588 7.43892 37.3125 7.17187 37.054 6.98153C36.7955 6.79119 36.4446 6.69602 36.0014 6.69602C35.7003 6.69602 35.446 6.73864 35.2386 6.82386C35.0313 6.90625 34.8722 7.02131 34.7614 7.16903C34.6534 7.31676 34.5994 7.48438 34.5994 7.67188C34.5938 7.82812 34.6264 7.96449 34.6974 8.08097C34.7713 8.19744 34.8722 8.2983 35 8.38352C35.1278 8.46591 35.2756 8.53835 35.4432 8.60085C35.6108 8.66051 35.7898 8.71165 35.9801 8.75426L36.7642 8.94176C37.1449 9.02699 37.4943 9.14062 37.8125 9.28267C38.1307 9.42472 38.4063 9.59943 38.6392 9.80682C38.8722 10.0142 39.0526 10.2585 39.1804 10.5398C39.3111 10.821 39.3778 11.1435 39.3807 11.5071C39.3778 12.0412 39.2415 12.5043 38.9716 12.8963C38.7045 13.2855 38.3182 13.5881 37.8125 13.804C37.3097 14.017 36.7031 14.1236 35.9929 14.1236C35.2884 14.1236 34.6747 14.0156 34.152 13.7997C33.6321 13.5838 33.2259 13.2642 32.9332 12.8409C32.6435 12.4148 32.4915 11.8878 32.4773 11.2599H34.2628C34.2827 11.5526 34.3665 11.7969 34.5142 11.9929C34.6648 12.1861 34.8651 12.3324 35.1151 12.4318C35.3679 12.5284 35.6534 12.5767 35.9716 12.5767C36.2841 12.5767 36.5554 12.5312 36.7855 12.4403C37.0185 12.3494 37.1989 12.223 37.3267 12.0611C37.4545 11.8991 37.5185 11.7131 37.5185 11.5028C37.5185 11.3068 37.4602 11.142 37.3438 11.0085C37.2301 10.875 37.0625 10.7614 36.8409 10.6676C36.6222 10.5739 36.3537 10.4886 36.0355 10.4119L35.0852 10.1733C34.3494 9.99432 33.7685 9.71449 33.3423 9.33381C32.9162 8.95312 32.7045 8.44034 32.7074 7.79545C32.7045 7.26705 32.8452 6.8054 33.1293 6.41051C33.4162 6.01562 33.8097 5.70739 34.3097 5.4858C34.8097 5.2642 35.3778 5.15341 36.0142 5.15341C36.6619 5.15341 37.2273 5.2642 37.7102 5.4858C38.196 5.70739 38.5739 6.01562 38.8438 6.41051C39.1136 6.8054 39.2528 7.26278 39.2614 7.78267H37.4929ZM40.6218 14V5.27273H46.5025V6.79403H42.467V8.87358H46.1999V10.3949H42.467V12.4787H46.5195V14H40.6218ZM47.9695 14V5.27273H51.4126C52.0717 5.27273 52.6342 5.39062 53.1001 5.62642C53.5689 5.85937 53.9254 6.19034 54.1697 6.61932C54.4169 7.04545 54.5405 7.54687 54.5405 8.12358C54.5405 8.70312 54.4155 9.2017 54.1655 9.61932C53.9155 10.0341 53.5533 10.3523 53.0788 10.5739C52.6072 10.7955 52.0362 10.9062 51.3658 10.9062H49.0604V9.4233H51.0675C51.4197 9.4233 51.7124 9.375 51.9453 9.27841C52.1783 9.18182 52.3516 9.03693 52.4652 8.84375C52.5817 8.65057 52.6399 8.41051 52.6399 8.12358C52.6399 7.83381 52.5817 7.58949 52.4652 7.39062C52.3516 7.19176 52.1768 7.04119 51.9411 6.93892C51.7081 6.83381 51.4141 6.78125 51.0589 6.78125H49.8146V14H47.9695ZM52.6825 10.0284L54.8516 14H52.8146L50.6925 10.0284H52.6825ZM57.6896 5.27273V14H55.8445V5.27273H57.6896ZM59.2077 14V5.27273H65.0884V6.79403H61.0529V8.87358H64.7859V10.3949H61.0529V12.4787H65.1055V14H59.2077ZM72.4265 14H69.3327V5.27273H72.4521C73.3299 5.27273 74.0856 5.44744 74.7191 5.79688C75.3526 6.14347 75.8398 6.64205 76.1808 7.29261C76.5245 7.94318 76.6964 8.72159 76.6964 9.62784C76.6964 10.5369 76.5245 11.3182 76.1808 11.9716C75.8398 12.625 75.3498 13.1264 74.7106 13.4759C74.0742 13.8253 73.3129 14 72.4265 14ZM71.1779 12.419H72.3498C72.8952 12.419 73.354 12.3224 73.7262 12.1293C74.1012 11.9332 74.3825 11.6307 74.57 11.2216C74.7603 10.8097 74.8555 10.2784 74.8555 9.62784C74.8555 8.98295 74.7603 8.45597 74.57 8.04688C74.3825 7.63778 74.1026 7.33665 73.7305 7.14347C73.3583 6.95028 72.8995 6.85369 72.354 6.85369H71.1779V12.419ZM78.0632 14V5.27273H83.9439V6.79403H79.9084V8.87358H83.6413V10.3949H79.9084V12.4787H83.9609V14H78.0632ZM88.1882 14V5.27273H94.0689V6.79403H90.0334V8.87358H93.7663V10.3949H90.0334V12.4787H94.0859V14H88.1882ZM97.1126 5.27273L99.2219 11.9034H99.3029L101.417 5.27273H103.462L100.453 14H98.0756L95.0629 5.27273H97.1126ZM104.857 14H102.879L105.892 5.27273H108.27L111.278 14H109.301L107.115 7.26705H107.047L104.857 14ZM104.733 10.5696H109.403V12.0099H104.733V10.5696ZM119.629 5.27273V14H118.035L114.238 8.5071H114.174V14H112.329V5.27273H113.948L117.715 10.7614H117.792V5.27273H119.629ZM126.94 8.09375C126.88 7.88636 126.797 7.70312 126.689 7.54403C126.581 7.3821 126.449 7.24574 126.292 7.13494C126.139 7.02131 125.963 6.93466 125.764 6.875C125.568 6.81534 125.35 6.78551 125.112 6.78551C124.666 6.78551 124.274 6.89631 123.936 7.1179C123.6 7.33949 123.339 7.66193 123.152 8.08523C122.964 8.50568 122.87 9.01989 122.87 9.62784C122.87 10.2358 122.963 10.7528 123.147 11.179C123.332 11.6051 123.593 11.9304 123.931 12.1548C124.27 12.3764 124.669 12.4872 125.129 12.4872C125.547 12.4872 125.903 12.4134 126.199 12.2656C126.497 12.1151 126.724 11.9034 126.88 11.6307C127.039 11.358 127.119 11.0355 127.119 10.6634L127.494 10.7188H125.244V9.32955H128.896V10.429C128.896 11.196 128.734 11.8551 128.41 12.4062C128.086 12.9545 127.64 13.3778 127.072 13.6761C126.504 13.9716 125.853 14.1193 125.12 14.1193C124.302 14.1193 123.583 13.9389 122.964 13.5781C122.345 13.2145 121.862 12.6989 121.515 12.0312C121.172 11.3608 121 10.5653 121 9.64489C121 8.9375 121.102 8.30682 121.306 7.75284C121.514 7.19602 121.804 6.72443 122.176 6.33807C122.548 5.9517 122.981 5.65767 123.475 5.45597C123.97 5.25426 124.505 5.15341 125.082 5.15341C125.576 5.15341 126.037 5.22585 126.463 5.37074C126.889 5.51278 127.267 5.71449 127.596 5.97585C127.929 6.23722 128.2 6.5483 128.41 6.90909C128.62 7.26705 128.755 7.66193 128.815 8.09375H126.94ZM130.282 14V5.27273H136.163V6.79403H132.127V8.87358H135.86V10.3949H132.127V12.4787H136.18V14H130.282ZM137.63 14V5.27273H139.475V12.4787H143.216V14H137.63ZM146.283 5.27273V14H144.438V5.27273H146.283ZM152.536 7.78267C152.502 7.43892 152.355 7.17187 152.097 6.98153C151.838 6.79119 151.488 6.69602 151.044 6.69602C150.743 6.69602 150.489 6.73864 150.282 6.82386C150.074 6.90625 149.915 7.02131 149.804 7.16903C149.696 7.31676 149.642 7.48438 149.642 7.67188C149.637 7.82812 149.669 7.96449 149.74 8.08097C149.814 8.19744 149.915 8.2983 150.043 8.38352C150.171 8.46591 150.319 8.53835 150.486 8.60085C150.654 8.66051 150.833 8.71165 151.023 8.75426L151.807 8.94176C152.188 9.02699 152.537 9.14062 152.855 9.28267C153.174 9.42472 153.449 9.59943 153.682 9.80682C153.915 10.0142 154.096 10.2585 154.223 10.5398C154.354 10.821 154.421 11.1435 154.424 11.5071C154.421 12.0412 154.284 12.5043 154.015 12.8963C153.748 13.2855 153.361 13.5881 152.855 13.804C152.353 14.017 151.746 14.1236 151.036 14.1236C150.331 14.1236 149.718 14.0156 149.195 13.7997C148.675 13.5838 148.269 13.2642 147.976 12.8409C147.686 12.4148 147.534 11.8878 147.52 11.2599H149.306C149.326 11.5526 149.409 11.7969 149.557 11.9929C149.708 12.1861 149.908 12.3324 150.158 12.4318C150.411 12.5284 150.696 12.5767 151.015 12.5767C151.327 12.5767 151.598 12.5312 151.828 12.4403C152.061 12.3494 152.242 12.223 152.37 12.0611C152.498 11.8991 152.561 11.7131 152.561 11.5028C152.561 11.3068 152.503 11.142 152.387 11.0085C152.273 10.875 152.105 10.7614 151.884 10.6676C151.665 10.5739 151.397 10.4886 151.078 10.4119L150.128 10.1733C149.392 9.99432 148.811 9.71449 148.385 9.33381C147.959 8.95312 147.748 8.44034 147.75 7.79545C147.748 7.26705 147.888 6.8054 148.172 6.41051C148.459 6.01562 148.853 5.70739 149.353 5.4858C149.853 5.2642 150.421 5.15341 151.057 5.15341C151.705 5.15341 152.27 5.2642 152.753 5.4858C153.239 5.70739 153.617 6.01562 153.887 6.41051C154.157 6.8054 154.296 7.26278 154.304 7.78267H152.536ZM155.665 5.27273H157.94L160.344 11.1364H160.446L162.849 5.27273H165.125V14H163.335V8.3196H163.263L161.004 13.9574H159.786L157.527 8.2983H157.455V14H155.665V5.27273ZM174.665 9.63636C174.665 10.5881 174.485 11.3977 174.124 12.0653C173.766 12.733 173.277 13.2429 172.658 13.5952C172.042 13.9446 171.348 14.1193 170.578 14.1193C169.803 14.1193 169.107 13.9432 168.49 13.5909C167.874 13.2386 167.387 12.7287 167.029 12.0611C166.671 11.3935 166.492 10.5852 166.492 9.63636C166.492 8.68466 166.671 7.875 167.029 7.20739C167.387 6.53977 167.874 6.03125 168.49 5.68182C169.107 5.32955 169.803 5.15341 170.578 5.15341C171.348 5.15341 172.042 5.32955 172.658 5.68182C173.277 6.03125 173.766 6.53977 174.124 7.20739C174.485 7.875 174.665 8.68466 174.665 9.63636ZM172.794 9.63636C172.794 9.01989 172.702 8.5 172.517 8.0767C172.336 7.65341 172.078 7.33239 171.746 7.11364C171.414 6.89489 171.025 6.78551 170.578 6.78551C170.132 6.78551 169.743 6.89489 169.411 7.11364C169.078 7.33239 168.82 7.65341 168.635 8.0767C168.453 8.5 168.363 9.01989 168.363 9.63636C168.363 10.2528 168.453 10.7727 168.635 11.196C168.82 11.6193 169.078 11.9403 169.411 12.1591C169.743 12.3778 170.132 12.4872 170.578 12.4872C171.025 12.4872 171.414 12.3778 171.746 12.1591C172.078 11.9403 172.336 11.6193 172.517 11.196C172.702 10.7727 172.794 10.2528 172.794 9.63636ZM182.614 14.1108C182.332 14.1108 182.091 14.0114 181.889 13.8125C181.69 13.6108 181.591 13.3693 181.591 13.0881C181.591 12.8097 181.69 12.571 181.889 12.3722C182.091 12.1733 182.332 12.0739 182.614 12.0739C182.886 12.0739 183.125 12.1733 183.33 12.3722C183.534 12.571 183.636 12.8097 183.636 13.0881C183.636 13.2756 183.588 13.4474 183.491 13.6037C183.398 13.7571 183.274 13.8807 183.121 13.9744C182.967 14.0653 182.798 14.1108 182.614 14.1108ZM193.032 14V12.6705L196.138 9.79403C196.402 9.53835 196.624 9.30824 196.803 9.10369C196.985 8.89915 197.123 8.69886 197.216 8.50284C197.31 8.30398 197.357 8.08949 197.357 7.85938C197.357 7.60369 197.299 7.38352 197.182 7.19886C197.066 7.01136 196.907 6.8679 196.705 6.76847C196.503 6.66619 196.275 6.61506 196.019 6.61506C195.752 6.61506 195.519 6.66903 195.32 6.77699C195.121 6.88494 194.968 7.03977 194.86 7.24148C194.752 7.44318 194.698 7.68324 194.698 7.96165H192.946C192.946 7.39062 193.076 6.89489 193.334 6.47443C193.593 6.05398 193.955 5.72869 194.421 5.49858C194.887 5.26847 195.424 5.15341 196.032 5.15341C196.657 5.15341 197.201 5.2642 197.664 5.4858C198.13 5.70455 198.492 6.00852 198.75 6.39773C199.009 6.78693 199.138 7.23295 199.138 7.7358C199.138 8.06534 199.073 8.39062 198.942 8.71165C198.814 9.03267 198.586 9.3892 198.256 9.78125C197.926 10.1705 197.462 10.6378 196.863 11.1832L195.588 12.4318V12.4915H199.253V14H193.032ZM200.59 14V12.6705L203.697 9.79403C203.961 9.53835 204.183 9.30824 204.362 9.10369C204.543 8.89915 204.681 8.69886 204.775 8.50284C204.869 8.30398 204.915 8.08949 204.915 7.85938C204.915 7.60369 204.857 7.38352 204.741 7.19886C204.624 7.01136 204.465 6.8679 204.263 6.76847C204.062 6.66619 203.833 6.61506 203.577 6.61506C203.31 6.61506 203.077 6.66903 202.879 6.77699C202.68 6.88494 202.526 7.03977 202.418 7.24148C202.31 7.44318 202.256 7.68324 202.256 7.96165H200.505C200.505 7.39062 200.634 6.89489 200.893 6.47443C201.151 6.05398 201.513 5.72869 201.979 5.49858C202.445 5.26847 202.982 5.15341 203.59 5.15341C204.215 5.15341 204.759 5.2642 205.222 5.4858C205.688 5.70455 206.05 6.00852 206.309 6.39773C206.567 6.78693 206.697 7.23295 206.697 7.7358C206.697 8.06534 206.631 8.39062 206.501 8.71165C206.373 9.03267 206.144 9.3892 205.815 9.78125C205.485 10.1705 205.021 10.6378 204.421 11.1832L203.147 12.4318V12.4915H206.812V14H200.59ZM214.071 14H210.977V5.27273H214.097C214.974 5.27273 215.73 5.44744 216.364 5.79688C216.997 6.14347 217.484 6.64205 217.825 7.29261C218.169 7.94318 218.341 8.72159 218.341 9.62784C218.341 10.5369 218.169 11.3182 217.825 11.9716C217.484 12.625 216.994 13.1264 216.355 13.4759C215.719 13.8253 214.957 14 214.071 14ZM212.822 12.419H213.994C214.54 12.419 214.999 12.3224 215.371 12.1293C215.746 11.9332 216.027 11.6307 216.214 11.2216C216.405 10.8097 216.5 10.2784 216.5 9.62784C216.5 8.98295 216.405 8.45597 216.214 8.04688C216.027 7.63778 215.747 7.33665 215.375 7.14347C215.003 6.95028 214.544 6.85369 213.999 6.85369H212.822V12.419ZM219.708 14V5.27273H225.588V6.79403H221.553V8.87358H225.286V10.3949H221.553V12.4787H225.605V14H219.708ZM229.833 14V5.27273H235.713V6.79403H231.678V8.87358H235.411V10.3949H231.678V12.4787H235.73V14H229.833ZM244.48 5.27273V14H242.886L239.089 8.5071H239.026V14H237.18V5.27273H238.8L242.567 10.7614H242.643V5.27273H244.48ZM246.005 14V5.27273H251.885V6.79403H247.85V8.87358H251.583V10.3949H247.85V12.4787H251.902V14H246.005ZM253.352 14V5.27273H256.795C257.455 5.27273 258.017 5.39062 258.483 5.62642C258.952 5.85937 259.308 6.19034 259.553 6.61932C259.8 7.04545 259.923 7.54687 259.923 8.12358C259.923 8.70312 259.798 9.2017 259.548 9.61932C259.298 10.0341 258.936 10.3523 258.462 10.5739C257.99 10.7955 257.419 10.9062 256.749 10.9062H254.443V9.4233H256.45C256.803 9.4233 257.095 9.375 257.328 9.27841C257.561 9.18182 257.734 9.03693 257.848 8.84375C257.964 8.65057 258.023 8.41051 258.023 8.12358C258.023 7.83381 257.964 7.58949 257.848 7.39062C257.734 7.19176 257.56 7.04119 257.324 6.93892C257.091 6.83381 256.797 6.78125 256.442 6.78125H255.197V14H253.352ZM258.065 10.0284L260.234 14H258.197L256.075 10.0284H258.065ZM269.247 9.63636C269.247 10.5881 269.067 11.3977 268.706 12.0653C268.348 12.733 267.859 13.2429 267.24 13.5952C266.624 13.9446 265.93 14.1193 265.161 14.1193C264.385 14.1193 263.689 13.9432 263.072 13.5909C262.456 13.2386 261.969 12.7287 261.611 12.0611C261.253 11.3935 261.074 10.5852 261.074 9.63636C261.074 8.68466 261.253 7.875 261.611 7.20739C261.969 6.53977 262.456 6.03125 263.072 5.68182C263.689 5.32955 264.385 5.15341 265.161 5.15341C265.93 5.15341 266.624 5.32955 267.24 5.68182C267.859 6.03125 268.348 6.53977 268.706 7.20739C269.067 7.875 269.247 8.68466 269.247 9.63636ZM267.376 9.63636C267.376 9.01989 267.284 8.5 267.099 8.0767C266.918 7.65341 266.661 7.33239 266.328 7.11364C265.996 6.89489 265.607 6.78551 265.161 6.78551C264.714 6.78551 264.325 6.89489 263.993 7.11364C263.661 7.33239 263.402 7.65341 263.217 8.0767C263.036 8.5 262.945 9.01989 262.945 9.63636C262.945 10.2528 263.036 10.7727 263.217 11.196C263.402 11.6193 263.661 11.9403 263.993 12.1591C264.325 12.3778 264.714 12.4872 265.161 12.4872C265.607 12.4872 265.996 12.3778 266.328 12.1591C266.661 11.9403 266.918 11.6193 267.099 11.196C267.284 10.7727 267.376 10.2528 267.376 9.63636ZM272.002 12.8068L271.955 13.2756C271.918 13.6506 271.847 14.0241 271.742 14.3963C271.64 14.7713 271.532 15.1108 271.418 15.4148C271.308 15.7188 271.218 15.9574 271.15 16.1307H269.974C270.016 15.9631 270.075 15.7287 270.148 15.4276C270.222 15.1293 270.292 14.794 270.357 14.4219C270.423 14.0497 270.464 13.6705 270.481 13.2841L270.502 12.8068H272.002ZM273.645 14V12.6705L276.751 9.79403C277.016 9.53835 277.237 9.30824 277.416 9.10369C277.598 8.89915 277.736 8.69886 277.83 8.50284C277.923 8.30398 277.97 8.08949 277.97 7.85938C277.97 7.60369 277.912 7.38352 277.795 7.19886C277.679 7.01136 277.52 6.8679 277.318 6.76847C277.116 6.66619 276.888 6.61506 276.632 6.61506C276.365 6.61506 276.132 6.66903 275.933 6.77699C275.734 6.88494 275.581 7.03977 275.473 7.24148C275.365 7.44318 275.311 7.68324 275.311 7.96165H273.56C273.56 7.39062 273.689 6.89489 273.947 6.47443C274.206 6.05398 274.568 5.72869 275.034 5.49858C275.5 5.26847 276.037 5.15341 276.645 5.15341C277.27 5.15341 277.814 5.2642 278.277 5.4858C278.743 5.70455 279.105 6.00852 279.364 6.39773C279.622 6.78693 279.751 7.23295 279.751 7.7358C279.751 8.06534 279.686 8.39062 279.555 8.71165C279.428 9.03267 279.199 9.3892 278.869 9.78125C278.54 10.1705 278.075 10.6378 277.476 11.1832L276.202 12.4318V12.4915H279.866V14H273.645ZM284.625 14.1918C283.892 14.1889 283.262 14.0085 282.733 13.6506C282.208 13.2926 281.803 12.7741 281.519 12.0952C281.238 11.4162 281.098 10.5994 281.101 9.64489C281.101 8.69318 281.242 7.8821 281.523 7.21165C281.807 6.54119 282.212 6.03125 282.738 5.68182C283.266 5.32955 283.895 5.15341 284.625 5.15341C285.355 5.15341 285.983 5.32955 286.509 5.68182C287.037 6.03409 287.444 6.54545 287.728 7.21591C288.012 7.88352 288.152 8.69318 288.15 9.64489C288.15 10.6023 288.007 11.4205 287.723 12.0994C287.442 12.7784 287.039 13.2969 286.513 13.6548C285.988 14.0128 285.358 14.1918 284.625 14.1918ZM284.625 12.6619C285.125 12.6619 285.525 12.4105 285.823 11.9077C286.121 11.4048 286.269 10.6506 286.266 9.64489C286.266 8.98295 286.198 8.43182 286.061 7.99148C285.928 7.55114 285.738 7.22017 285.49 6.99858C285.246 6.77699 284.958 6.66619 284.625 6.66619C284.128 6.66619 283.73 6.91477 283.432 7.41193C283.134 7.90909 282.983 8.65341 282.98 9.64489C282.98 10.3153 283.047 10.875 283.181 11.3239C283.317 11.7699 283.509 12.1051 283.756 12.3295C284.003 12.5511 284.293 12.6619 284.625 12.6619ZM289.465 14V12.6705L292.572 9.79403C292.836 9.53835 293.058 9.30824 293.237 9.10369C293.418 8.89915 293.556 8.69886 293.65 8.50284C293.744 8.30398 293.79 8.08949 293.79 7.85938C293.79 7.60369 293.732 7.38352 293.616 7.19886C293.499 7.01136 293.34 6.8679 293.138 6.76847C292.937 6.66619 292.708 6.61506 292.452 6.61506C292.185 6.61506 291.952 6.66903 291.754 6.77699C291.555 6.88494 291.401 7.03977 291.293 7.24148C291.185 7.44318 291.131 7.68324 291.131 7.96165H289.38C289.38 7.39062 289.509 6.89489 289.768 6.47443C290.026 6.05398 290.388 5.72869 290.854 5.49858C291.32 5.26847 291.857 5.15341 292.465 5.15341C293.09 5.15341 293.634 5.2642 294.097 5.4858C294.563 5.70455 294.925 6.00852 295.184 6.39773C295.442 6.78693 295.572 7.23295 295.572 7.7358C295.572 8.06534 295.506 8.39062 295.376 8.71165C295.248 9.03267 295.019 9.3892 294.69 9.78125C294.36 10.1705 293.896 10.6378 293.296 11.1832L292.022 12.4318V12.4915H295.687V14H289.465ZM300.211 14.1193C299.609 14.1193 299.072 14.0085 298.6 13.7869C298.132 13.5653 297.76 13.2599 297.484 12.8707C297.208 12.4815 297.065 12.0355 297.054 11.5327H298.843C298.863 11.8707 299.005 12.1449 299.27 12.3551C299.534 12.5653 299.848 12.6705 300.211 12.6705C300.501 12.6705 300.757 12.6065 300.978 12.4787C301.203 12.348 301.377 12.1676 301.502 11.9375C301.63 11.7045 301.694 11.4375 301.694 11.1364C301.694 10.8295 301.629 10.5597 301.498 10.3267C301.37 10.0937 301.193 9.91193 300.966 9.78125C300.738 9.65057 300.478 9.58381 300.186 9.58097C299.93 9.58097 299.681 9.63352 299.44 9.73864C299.201 9.84375 299.015 9.98722 298.882 10.169L297.241 9.875L297.654 5.27273H302.99V6.78125H299.176L298.95 8.96733H299.001C299.154 8.75142 299.386 8.57244 299.696 8.4304C300.005 8.28835 300.352 8.21733 300.735 8.21733C301.261 8.21733 301.73 8.34091 302.142 8.58807C302.554 8.83523 302.879 9.17472 303.118 9.60653C303.356 10.0355 303.474 10.5298 303.471 11.0895C303.474 11.6776 303.338 12.2003 303.062 12.6577C302.789 13.1122 302.407 13.4702 301.916 13.7315C301.427 13.9901 300.859 14.1193 300.211 14.1193ZM305.555 14.1108C305.274 14.1108 305.032 14.0114 304.831 13.8125C304.632 13.6108 304.532 13.3693 304.532 13.0881C304.532 12.8097 304.632 12.571 304.831 12.3722C305.032 12.1733 305.274 12.0739 305.555 12.0739C305.828 12.0739 306.066 12.1733 306.271 12.3722C306.475 12.571 306.578 12.8097 306.578 13.0881C306.578 13.2756 306.529 13.4474 306.433 13.6037C306.339 13.7571 306.216 13.8807 306.062 13.9744C305.909 14.0653 305.74 14.1108 305.555 14.1108Z" fill="#B1B1B1" />
                        <path d="M18.1357 6.74617C17.619 5.07821 15.9134 1.22623 14.1965 1.73625C9.96751 5.05773 5.99828 9.02231 1.80208 12.4239C-0.393565 12.0241 -0.433426 15.5069 0.879177 16.9093C1.75659 17.8481 2.21804 17.2032 3.04059 16.6058L6.39595 16.3325C6.79034 17.5247 6.62668 18.4846 7.81595 18.5761C8.87672 18.6568 10.066 18.3828 11.1422 18.4683C12.0595 18.0528 11.5835 16.9081 11.3542 16.0555L16.675 15.6316C19.6378 14.7867 18.9625 9.41432 18.1357 6.74677M1.44286 13.4307C1.50664 14.4616 1.68625 15.3022 2.15895 16.156C1.07708 17.3308 0.043969 13.2952 1.44286 13.4307ZM12.9186 3.9022C12.792 5.95314 13.2253 7.85353 13.9682 9.65578L12.8459 10.0297C12.8061 10.0327 12.6223 9.74189 12.6148 9.71299L12.1055 7.76682L2.38733 13.1904L12.9191 3.9022H12.9186ZM7.56177 17.5542L7.22319 16.3156L10.5265 16.0717L10.8899 17.426C9.79259 17.5747 8.6685 17.5651 7.56177 17.5542ZM14.1693 14.8385L12.9688 14.927C12.9688 14.927 12.9679 14.9264 12.9674 14.9252L11.923 14.9999H11.9216C11.7448 15.0643 11.2356 15.0938 11.1099 15.0595L10.0974 15.1318L10.1194 15.1811L9.3452 15.186L4.68568 15.522L4.39493 15.543L3.0087 15.6448C2.51442 15.5629 2.46659 14.8211 2.32121 14.3303L11.6145 9.03135C12.1439 10.5668 12.6874 12.1035 13.4964 13.4331C13.8012 13.9341 14.1581 14.3592 14.4976 14.8138L14.1703 14.8379L14.1693 14.8385ZM17.7643 13.5216C16.3711 16.7148 13.7787 12.9237 13.1231 10.9582L15.0913 10.1086C14.2359 8.39427 13.5358 6.48725 13.6474 4.40921C13.805 1.4707 15.3764 2.82615 16.2599 4.35863C17.4009 6.33731 18.7824 11.1883 17.7643 13.521" fill="black" />
                        <path d="M19.6218 12.7871L19.4919 13.5208L21.9736 13.4942C22.1005 13.4326 22.1386 12.744 22.0167 12.6757L19.6218 12.7866V12.7871Z" fill="black" />
                        <path d="M19.4898 0.768415C19.5274 0.60963 19.0644 -0.103229 18.8631 0.0126774L16.8931 1.79885L17.5335 2.53515L19.4898 0.768415Z" fill="black" />
                        <path d="M19.5848 10.9856L22.0909 10.2971L21.9828 9.29553L19.4919 9.84199L19.5848 10.9856Z" fill="black" />
                        <path d="M18.5587 5.07031L20.7916 3.61848L20.4306 2.53516L18.1926 4.00416L18.5587 5.07031Z" fill="black" />
                        <path d="M21.2015 5.9173L19.1182 6.82812L19.3604 7.76521L21.4437 6.85439L21.2015 5.9173Z" fill="black" />
                    </svg>

                    <h2 className={style.generalText}>
                        <p> <span style={{ fontWeight: '1000' }}>¿Es muerte o vida?</span></p>
                    </h2>
                    <a href="https://drive.google.com/drive/folders/1juP6WoWBQMRozM5VJUZEywcvRZ3rn3lR?usp=drive_link"><img src="/Dia3/HerraD3.png" alt="" /></a>
                    <div className={style.linkContainer}>
                        <a href="./articulo5">
                            <h2 className={style.greyLeftText}>ARTÍCULO ANTERIOR</h2>
                            <h2 className={style.secondLeftText}>LA MISIÓN DE DIOS
                            EN LA BIBLIA</h2>
                        </a>
                        <a style={{visibility:'hidden'}} href="./articulo6">
                            <h2 className={style.greyRightText}>ARTÍCULO SIGUIENTE</h2>
                            <h2 className={style.secondRightText}>LA CRUZ</h2>
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
