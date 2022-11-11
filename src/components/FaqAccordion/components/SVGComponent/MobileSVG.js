import { motion, useAnimationControls } from "framer-motion";
import styled from "styled-components";
import { BoxVariant, itemVariant, mobileBoxVariant } from "./animate";
import { useEffect } from "react";
const Container = styled(motion.svg)`
    position: absolute;
`;
export default function MobileSVG() {
    const controls = useAnimationControls();

    // responsive animation
    useEffect(() => {
        (async () => {
            // first initial device not prepare
            await controls.start({
                x: -60,
                y: 60,
                opacity: 0,
            });
            await controls.start("show");
        })();
    }, [controls]);
    return (
        <Container
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="209"
            viewBox="0 0 250 209"
            variants={BoxVariant.md}
            animate="show"
            initial="hidden"
            style={{
                y: "-6.4rem",
            }}
        >
            {/* plane */}
            <motion.g
                variants={itemVariant}
                custom={{
                    y: [5, 0],
                }}
            >
                {/* plane shadow */}
                <path
                    d="M 121.348 206.473 L 5.666 142.194 C 1.982 140.247 -1.174 137.056 2.414 134.964 L 118.507 72.054 C 120.248 71.04 122.892 70.373 124.666 71.343 L 246.082 137.609 C 249.765 139.618 250.426 145.219 246.756 147.25 L 136.592 206.371 C 134.292 207.632 131.665 208.305 128.985 208.323 C 126.305 208.34 123.668 207.702 121.348 206.472 Z"
                    fill="rgb(104,98,230)"
                    opacity="0.099"
                ></path>
                {/* plane  */}

                <path
                    d="M 120.799 169.163 L 6.645 107.375 C 3.002 105.479 -0.112 102.436 3.427 100.426 L 118.005 39.957 C 119.712 39.009 122.33 38.345 124.079 39.274 L 243.893 102.966 C 247.536 104.863 248.188 110.285 244.566 112.238 L 135.845 169.115 C 133.558 170.32 130.967 170.958 128.329 170.966 C 125.69 170.974 123.095 170.353 120.799 169.163 Z"
                    fill="rgb(91,54,160)"
                ></path>
                <path
                    d="M 120.799 166.309 L 6.645 104.522 C 3.002 102.626 -0.112 99.583 3.427 97.573 L 118.005 37.103 C 119.712 36.155 122.33 35.492 124.079 36.421 L 243.893 100.114 C 247.536 102.01 248.188 107.432 244.566 109.385 L 135.845 166.262 C 133.558 167.466 130.967 168.105 128.329 168.113 C 125.69 168.122 123.095 167.499 120.799 166.309 Z"
                    fill="rgb(104,98,230)"
                ></path>
            </motion.g>
            {/* screen shadow */}
            <g opacity="0.25">
                <defs>
                    <linearGradient
                        id="idCoHMlUzNng-1400797364"
                        gradientTransform="rotate(123.05967794150621, 0.5, 0.5)"
                    >
                        <stop
                            offset="0"
                            stopColor="rgb(127,53,0)"
                            stopOpacity="1"
                        ></stop>
                        <stop
                            offset="1"
                            stopColor="rgba(35,31,32,0)"
                            stopOpacity="0"
                        ></stop>
                    </linearGradient>
                </defs>
                <path
                    d="M 130.195 84.795 L 107.687 96.559 C 107.687 96.559 142.385 115.954 149.484 118.683 L 162.461 101.621"
                    fill="url(#idCoHMlUzNng-1400797364)"
                ></path>
            </g>
            {/* people shadow */}
            <g opacity="0.25">
                <defs>
                    <linearGradient
                        id="idcu0992jEMg-1400797374"
                        gradientTransform="rotate(129.54415908241376, 0.5, 0.5)"
                    >
                        <stop
                            offset="0"
                            stopColor="rgb(127,53,0)"
                            stopOpacity="1"
                        ></stop>
                        <stop
                            offset="1"
                            stopColor="rgba(35,31,32,0)"
                            stopOpacity="0"
                        ></stop>
                    </linearGradient>
                </defs>
                <path
                    d="M 122.434 141.264 L 99.905 129.519 L 77.418 141.293 C 77.418 141.293 89.153 147.852 100.371 153.872 C 107.428 149.256 114.569 144.591 122.434 141.264 Z"
                    fill="url(#idcu0992jEMg-1400797374)"
                ></path>
            </g>
            {/* planet shadow */}
            <g opacity="0.46">
                <defs>
                    <linearGradient
                        id="idsHiABHmn3g1463070794"
                        gradientTransform="rotate(130.19935551376327, 0.5, 0.5)"
                    >
                        <stop
                            offset="0"
                            stopColor="rgba(132,60,9,0.85)"
                            stopOpacity="0.85"
                        ></stop>
                        <stop
                            offset="1"
                            stopColor="rgba(35,31,32,0)"
                            stopOpacity="0"
                        ></stop>
                    </linearGradient>
                </defs>
                <path
                    d="M 73.889 68.718 L 59.598 76.187 C 59.598 76.187 60.809 83.032 67.877 85.771 L 86.618 74.794"
                    fill="url(#idsHiABHmn3g1463070794)"
                ></path>
            </g>
            {/* planet */}
            <g>
                <path
                    d="M 80.885 76.187 C 85.645 76.187 89.505 73.7 89.505 70.632 C 89.505 67.564 85.645 65.077 80.885 65.077 C 76.124 65.077 72.264 67.564 72.264 70.632 C 72.264 73.7 76.124 76.187 80.885 76.187 Z"
                    fill="rgb(104,225,253)"
                ></path>
                <path
                    d="M 80.874 69.77 C 84.441 69.77 87.332 68.687 87.332 67.352 C 87.332 66.017 84.441 64.935 80.874 64.935 C 77.308 64.935 74.417 66.017 74.417 67.352 C 74.417 68.687 77.308 69.77 80.874 69.77 Z"
                    fill="rgb(151,76,38)"
                ></path>
                <path
                    d="M 80.647 63.286 C 80.647 62.195 80.647 61.105 80.512 60.015 L 80.419 59.162 L 80.357 58.612 C 80.344 58.421 80.313 58.23 80.264 58.043 L 80.139 57.38 C 79.434 53.675 77.864 50.154 75.534 47.057 C 74.657 48.967 74.217 51.022 74.241 53.095 C 74.241 53.711 74.303 54.318 74.355 54.896 L 74.355 55.247 C 74.355 55.541 74.469 55.863 74.531 56.129 C 74.796 57.238 75.142 58.331 75.566 59.399 C 75.947 60.38 76.414 61.331 76.963 62.243 C 77.552 63.276 78.184 64.281 78.877 65.267 C 79.405 66.035 79.912 66.717 80.419 67.371 C 80.572 66.014 80.648 64.65 80.647 63.286 Z M 77.252 51.048 C 77.283 50.907 77.283 50.762 77.252 50.621 C 77.418 50.773 77.583 50.934 77.739 51.095 C 77.578 51.067 77.413 51.067 77.252 51.095 Z"
                    fill="rgb(153,154,28)"
                ></path>
                <path
                    d="M 82.861 64.158 C 83.522 63.241 84.126 62.292 84.672 61.314 C 84.827 61.058 84.962 60.812 85.107 60.556 L 85.376 60.053 L 85.635 59.532 C 85.728 59.323 85.831 59.115 85.924 58.916 C 87.518 55.449 88.274 51.707 88.139 47.948 C 86.268 49.119 84.682 50.633 83.482 52.394 C 83.13 52.906 82.809 53.427 82.509 53.958 L 82.375 54.186 L 82.375 54.28 L 82.002 55.105 C 81.575 56.168 81.229 57.258 80.967 58.366 C 80.708 59.385 80.535 60.422 80.45 61.466 C 80.336 62.622 80.274 63.779 80.274 64.945 C 80.274 65.893 80.274 66.679 80.336 67.476 C 81.164 66.414 82.054 65.305 82.861 64.158 Z M 87.249 52.157 C 87.356 52.048 87.434 51.918 87.477 51.778 C 87.477 51.996 87.57 52.195 87.601 52.394 C 87.5 52.296 87.381 52.216 87.249 52.157 Z"
                    fill="rgb(153,154,28)"
                ></path>
                <path
                    d="M 82.809 66.878 C 83.482 66.566 84.144 66.243 84.807 65.883 L 85.314 65.608 L 85.635 65.418 L 85.955 65.21 L 86.328 64.964 C 88.408 63.563 90.134 61.769 91.388 59.702 C 89.968 59.788 88.581 60.136 87.311 60.726 C 86.949 60.897 86.597 61.086 86.276 61.285 L 86.121 61.371 L 85.624 61.712 C 85.012 62.154 84.434 62.636 83.896 63.153 C 83.401 63.628 82.945 64.135 82.53 64.67 C 82.054 65.286 81.619 65.892 81.195 66.499 C 80.771 67.106 80.595 67.447 80.336 67.893 C 81.112 67.599 81.971 67.257 82.809 66.878 Z M 89.412 61.693 C 89.506 61.664 89.594 61.619 89.671 61.56 C 89.671 61.693 89.567 61.816 89.505 61.94 C 89.494 61.855 89.462 61.774 89.412 61.702 Z"
                    fill="rgb(153,154,28)"
                ></path>
                <path
                    d="M 80.647 63.286 C 80.647 62.195 80.647 61.105 80.512 60.015 L 80.419 59.162 L 80.357 58.612 C 80.344 58.421 80.313 58.23 80.264 58.043 L 80.139 57.38 C 79.434 53.675 77.864 50.154 75.534 47.057 C 74.657 48.967 74.217 51.022 74.241 53.095 C 74.241 53.711 74.303 54.318 74.355 54.896 L 74.355 55.247 C 74.355 55.541 74.469 55.863 74.531 56.129 C 74.796 57.238 75.142 58.331 75.566 59.399 C 75.947 60.38 76.414 61.331 76.963 62.243 C 77.552 63.276 78.184 64.281 78.877 65.267 C 79.405 66.035 79.912 66.717 80.419 67.371 C 80.572 66.014 80.648 64.65 80.647 63.286 Z M 77.252 51.048 C 77.283 50.907 77.283 50.762 77.252 50.621 C 77.418 50.773 77.583 50.934 77.739 51.095 C 77.578 51.067 77.413 51.067 77.252 51.095 Z"
                    fill="rgb(153,154,28)"
                ></path>
                <path
                    d="M 82.861 64.158 C 83.522 63.241 84.126 62.292 84.672 61.314 C 84.827 61.058 84.962 60.812 85.107 60.556 L 85.376 60.053 L 85.635 59.532 C 85.728 59.323 85.831 59.115 85.924 58.916 C 87.518 55.449 88.274 51.707 88.139 47.948 C 86.268 49.119 84.682 50.633 83.482 52.394 C 83.13 52.906 82.809 53.427 82.509 53.958 L 82.375 54.186 L 82.375 54.28 L 82.002 55.105 C 81.575 56.168 81.229 57.258 80.967 58.366 C 80.708 59.385 80.535 60.422 80.45 61.466 C 80.336 62.622 80.274 63.779 80.274 64.945 C 80.274 65.893 80.274 66.679 80.336 67.476 C 81.164 66.414 82.054 65.305 82.861 64.158 Z M 87.249 52.157 C 87.356 52.048 87.434 51.918 87.477 51.778 C 87.477 51.996 87.57 52.195 87.601 52.394 C 87.5 52.296 87.381 52.216 87.249 52.157 Z"
                    fill="rgb(153,154,28)"
                ></path>
                <path
                    d="M 82.809 66.878 C 83.482 66.566 84.144 66.243 84.807 65.883 L 85.314 65.608 L 85.635 65.418 L 85.955 65.21 L 86.328 64.964 C 88.408 63.563 90.134 61.769 91.388 59.702 C 89.968 59.788 88.581 60.136 87.311 60.726 C 86.949 60.897 86.597 61.086 86.276 61.285 L 86.121 61.371 L 85.624 61.712 C 85.012 62.154 84.434 62.636 83.896 63.153 C 83.401 63.628 82.945 64.135 82.53 64.67 C 82.054 65.286 81.619 65.892 81.195 66.499 C 80.771 67.106 80.595 67.447 80.336 67.893 C 81.112 67.599 81.971 67.257 82.809 66.878 Z M 89.412 61.693 C 89.506 61.664 89.594 61.619 89.671 61.56 C 89.671 61.693 89.567 61.816 89.505 61.94 C 89.494 61.855 89.462 61.774 89.412 61.702 Z"
                    fill="rgb(153,154,28)"
                ></path>
            </g>
            {/* screen */}
            <g>
                {/* screen bottom */}
                <path
                    d="M 139.157 80.197 L 126.739 85.686 C 126.262 85.884 125.855 86.198 125.561 86.594 C 125.267 86.991 125.098 87.454 125.072 87.932 C 125.052 88.409 125.174 88.882 125.423 89.301 C 125.673 89.72 126.042 90.069 126.49 90.312 L 156.066 106.114 C 156.705 106.456 157.464 106.558 158.183 106.399 C 158.903 106.24 159.527 105.832 159.926 105.261 L 167.108 95.032"
                    fill="rgb(161,72,45)"
                ></path>
                {/* screen border */}
                <path
                    d="M 206.97 53.73 L 107.553 1.271 C 106.872 0.912 106.099 0.723 105.314 0.724 C 104.528 0.724 103.756 0.914 103.076 1.274 C 102.395 1.634 101.83 2.152 101.437 2.775 C 101.044 3.399 100.837 4.106 100.836 4.826 L 100.836 59.409 C 100.84 60.003 101.014 60.587 101.341 61.101 C 101.668 61.615 102.136 62.041 102.699 62.338 L 208.688 118.361 C 209.052 118.557 209.465 118.661 209.887 118.663 C 210.309 118.665 210.724 118.564 211.09 118.372 C 211.455 118.18 211.759 117.902 211.97 117.567 C 212.18 117.232 212.291 116.852 212.289 116.465 L 212.289 62.129 C 212.289 60.424 211.797 58.749 210.862 57.275 C 209.928 55.8 208.586 54.577 206.97 53.73 Z"
                    fill="rgb(244,123,86)"
                ></path>
                {/* white screen */}
                <path
                    d="M 107.563 5.394 L 203.979 56.195 C 205.008 56.739 205.862 57.521 206.456 58.463 C 207.05 59.404 207.363 60.473 207.363 61.56 L 207.363 102.474 C 207.354 102.861 207.236 103.241 207.019 103.574 C 206.802 103.907 206.494 104.183 206.125 104.374 C 205.757 104.565 205.341 104.665 204.917 104.664 C 204.494 104.664 204.078 104.562 203.71 104.37 L 105.359 52.763 C 104.993 52.572 104.688 52.297 104.473 51.964 C 104.259 51.632 104.144 51.254 104.138 50.868 L 104.138 7.195 C 104.141 6.833 104.247 6.477 104.446 6.163 C 104.645 5.849 104.93 5.589 105.273 5.407 C 105.616 5.225 106.005 5.128 106.401 5.126 C 106.797 5.124 107.187 5.216 107.532 5.394 Z"
                    fill="rgb(255,255,255)"
                ></path>
                {/* screen button */}
                <path
                    d="M 148.131 82.567 C 149.27 82.366 149.991 81.236 149.74 80.044 C 149.489 78.851 148.363 78.047 147.223 78.248 C 146.084 78.449 145.364 79.579 145.614 80.771 C 145.865 81.964 146.992 82.768 148.131 82.567 Z"
                    fill="rgb(171,100,60)"
                ></path>
                {/* in screen shadow */}
                <g opacity="0.32">
                    <defs>
                        <linearGradient
                            id="idyFKg81p5jg-1172471405"
                            gradientTransform="rotate(-138.85046666249585, 0.5, 0.5)"
                        >
                            <stop
                                offset="0"
                                stopColor="rgba(255,255,255,0)"
                                stopOpacity="0"
                            ></stop>
                            <stop
                                offset="1"
                                stopColor="rgb(220,132,30)"
                                stopOpacity="1"
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 133.475 60.897 L 178.284 85.553 L 200.419 73.77 L 160.868 52.688"
                        fill="url(#idyFKg81p5jg-1172471405)"
                    ></path>
                </g>
            </g>
            {/* yellow card */}
            <motion.g
                variants={itemVariant}
                custom={{
                    x: [30, 0],
                    y: [-10, 0],
                    opacity: [0, 1],
                }}
            >
                <path
                    d="M 188.85 55.996 L 140.409 28.942 C 140.15 28.804 139.855 28.733 139.556 28.735 C 139.256 28.738 138.963 28.813 138.706 28.955 C 138.449 29.096 138.239 29.298 138.096 29.539 C 137.953 29.78 137.883 30.051 137.894 30.326 L 137.894 45.739 C 137.889 46.018 137.964 46.294 138.111 46.538 C 138.258 46.782 138.472 46.987 138.732 47.133 L 187.173 73.609 C 187.427 73.742 187.714 73.812 188.006 73.812 C 188.299 73.812 188.586 73.742 188.839 73.609 C 189.091 73.472 189.299 73.278 189.444 73.045 C 189.589 72.813 189.666 72.55 189.667 72.282 L 189.916 57.911 C 189.937 57.534 189.85 57.159 189.662 56.823 C 189.475 56.487 189.195 56.202 188.85 55.996 Z"
                    fill="rgb(226,172,0)"
                ></path>
                <path
                    d="M 177.26 63.921 C 178.998 66.148 182.051 66.765 184.069 65.324 C 186.087 63.883 186.335 60.887 184.597 58.688 C 182.858 56.489 179.805 55.844 177.777 57.295 C 175.749 58.745 175.521 61.702 177.26 63.921 Z"
                    fill="rgb(255,255,255)"
                ></path>
                <path
                    d="M 172.51 53.247 L 152.744 42.345 C 152.575 42.28 152.386 42.274 152.212 42.327 C 152.038 42.38 151.892 42.489 151.799 42.634 C 151.707 42.779 151.675 42.95 151.71 43.115 C 151.745 43.28 151.844 43.428 151.989 43.53 L 171.744 54.422 C 171.911 54.485 172.098 54.491 172.27 54.439 C 172.441 54.386 172.587 54.279 172.68 54.137 C 172.773 53.995 172.806 53.826 172.775 53.663 C 172.744 53.5 172.65 53.352 172.51 53.247 Z"
                    fill="rgb(242,242,242)"
                ></path>
                <path
                    d="M 171.692 57.674 L 144.455 42.658 C 144.289 42.604 144.107 42.606 143.942 42.663 C 143.778 42.721 143.64 42.83 143.555 42.971 C 143.469 43.111 143.439 43.274 143.471 43.432 C 143.504 43.589 143.595 43.732 143.731 43.834 L 170.937 58.859 C 171.106 58.932 171.298 58.944 171.476 58.893 C 171.655 58.842 171.806 58.732 171.899 58.584 C 172.007 58.432 172.045 58.248 172.006 58.071 C 171.968 57.894 171.855 57.738 171.692 57.636 Z"
                    fill="rgb(242,242,242)"
                ></path>
            </motion.g>
            {/* orange card */}
            <motion.g
                variants={itemVariant}
                custom={{
                    x: [10, 0],
                    y: [-5, 0],
                    opacity: [0, 1],
                }}
            >
                <path
                    d="M 179.184 58.982 L 130.764 31.937 C 130.505 31.8 130.21 31.729 129.911 31.731 C 129.611 31.733 129.318 31.809 129.061 31.95 C 128.805 32.091 128.594 32.293 128.451 32.534 C 128.308 32.775 128.239 33.047 128.249 33.321 L 128.249 48.725 C 128.244 49.004 128.319 49.28 128.466 49.524 C 128.613 49.768 128.827 49.973 129.088 50.119 L 177.529 76.557 C 177.785 76.695 178.077 76.767 178.374 76.766 C 178.671 76.765 178.962 76.691 179.217 76.552 C 179.472 76.412 179.682 76.212 179.823 75.973 C 179.965 75.734 180.034 75.464 180.023 75.192 L 180.281 60.831 C 180.294 60.454 180.2 60.082 180.008 59.749 C 179.815 59.417 179.532 59.136 179.184 58.935 Z"
                    fill="rgb(244,123,86)"
                ></path>
                <path
                    d="M 167.594 66.916 C 169.333 69.135 172.385 69.76 174.403 68.31 C 176.421 66.86 176.67 63.874 174.931 61.674 C 173.193 59.475 170.14 58.83 168.112 60.281 C 166.083 61.731 165.856 64.689 167.594 66.916 Z"
                    fill="rgb(255,255,255)"
                ></path>
                <path
                    d="M 162.834 56.233 L 143.068 45.341 C 142.899 45.257 142.7 45.237 142.515 45.285 C 142.329 45.332 142.171 45.444 142.073 45.596 C 141.976 45.748 141.946 45.929 141.991 46.1 C 142.035 46.272 142.151 46.421 142.313 46.516 L 162.068 57.418 C 162.237 57.489 162.429 57.5 162.607 57.449 C 162.784 57.398 162.935 57.289 163.031 57.143 C 163.085 57.068 163.123 56.985 163.142 56.896 C 163.161 56.808 163.161 56.718 163.142 56.63 C 163.123 56.542 163.085 56.458 163.03 56.383 C 162.975 56.309 162.905 56.245 162.824 56.195 Z"
                    fill="rgb(242,242,242)"
                ></path>
                <path
                    d="M 162.016 60.688 L 134.79 45.644 C 134.621 45.571 134.428 45.559 134.25 45.61 C 134.072 45.661 133.921 45.771 133.827 45.919 C 133.72 46.071 133.681 46.255 133.72 46.432 C 133.759 46.609 133.871 46.765 134.034 46.867 L 161.24 61.845 C 161.409 61.918 161.602 61.93 161.78 61.879 C 161.958 61.828 162.109 61.718 162.203 61.57 C 162.31 61.419 162.348 61.235 162.31 61.057 C 162.271 60.88 162.158 60.724 161.996 60.622 Z"
                    fill="rgb(242,242,242)"
                ></path>
            </motion.g>
            {/* blue card */}
            <motion.g
                variants={itemVariant}
                custom={{
                    x: [5, 0],
                    y: [-2.5, 0],
                    opacity: [0, 1],
                }}
            >
                <path
                    d="M 167.035 60.793 L 118.605 33.757 C 118.346 33.616 118.051 33.543 117.75 33.543 C 117.449 33.544 117.154 33.619 116.896 33.761 C 116.638 33.903 116.427 34.106 116.285 34.349 C 116.143 34.592 116.076 34.866 116.09 35.141 L 116.09 50.545 C 116.089 50.823 116.167 51.097 116.315 51.34 C 116.464 51.582 116.679 51.785 116.939 51.929 L 165.38 78.453 C 165.636 78.59 165.929 78.662 166.226 78.661 C 166.523 78.659 166.815 78.585 167.071 78.446 C 167.326 78.307 167.536 78.107 167.679 77.868 C 167.822 77.63 167.893 77.36 167.884 77.088 L 168.132 62.726 C 168.144 62.352 168.051 61.98 167.861 61.648 C 167.67 61.316 167.39 61.034 167.046 60.831 Z"
                    fill="rgb(104,225,253)"
                ></path>
                <path
                    d="M 167.035 60.793 L 118.605 33.757 C 118.346 33.616 118.051 33.543 117.75 33.543 C 117.449 33.544 117.154 33.619 116.896 33.761 C 116.638 33.903 116.427 34.106 116.285 34.349 C 116.143 34.592 116.076 34.866 116.09 35.141 L 116.09 50.545 C 116.089 50.823 116.167 51.097 116.315 51.34 C 116.464 51.582 116.679 51.785 116.939 51.929 L 165.38 78.453 C 165.636 78.59 165.929 78.662 166.226 78.661 C 166.523 78.659 166.815 78.585 167.071 78.446 C 167.326 78.307 167.536 78.107 167.679 77.868 C 167.822 77.63 167.893 77.36 167.884 77.088 L 168.132 62.726 C 168.144 62.352 168.051 61.98 167.861 61.648 C 167.67 61.316 167.39 61.034 167.046 60.831 Z"
                    fill="rgb(104,225,253)"
                ></path>
                <path
                    d="M 155.435 68.727 C 157.173 70.955 160.226 71.571 162.254 70.12 C 164.283 68.67 164.51 65.694 162.772 63.485 C 161.033 61.276 157.981 60.641 155.952 62.091 C 153.924 63.542 153.717 66.499 155.435 68.727 Z"
                    fill="rgb(255,255,255)"
                ></path>
                <path
                    d="M 150.685 58.044 L 130.919 47.171 C 130.75 47.106 130.561 47.099 130.387 47.152 C 130.213 47.205 130.067 47.315 129.974 47.46 C 129.882 47.605 129.85 47.775 129.885 47.94 C 129.92 48.105 130.019 48.253 130.164 48.356 L 149.919 59.248 C 150.087 59.323 150.281 59.336 150.46 59.285 C 150.639 59.234 150.789 59.122 150.881 58.973 C 150.936 58.898 150.974 58.814 150.993 58.726 C 151.012 58.638 151.012 58.547 150.993 58.459 C 150.973 58.371 150.935 58.288 150.881 58.213 C 150.826 58.138 150.756 58.074 150.674 58.025 Z"
                    fill="rgb(242,242,242)"
                ></path>
                <path
                    d="M 149.857 62.48 L 122.63 47.464 C 122.461 47.399 122.272 47.393 122.098 47.446 C 121.924 47.499 121.778 47.608 121.685 47.753 C 121.593 47.898 121.561 48.069 121.596 48.234 C 121.631 48.399 121.73 48.546 121.875 48.649 L 149.101 63.665 C 149.271 63.737 149.464 63.749 149.643 63.698 C 149.822 63.647 149.974 63.537 150.069 63.39 C 150.165 63.242 150.197 63.067 150.159 62.899 C 150.122 62.731 150.018 62.582 149.867 62.48 Z"
                    fill="rgb(242,242,242)"
                ></path>
            </motion.g>
            {/*people */}
            <g>
                <path
                    d="M 103.475 59.285 C 100.346 61.753 97.98 64.93 96.614 68.499 C 94.203 74.595 100.184 84.558 100.184 84.558 L 109.56 77.761"
                    fill="rgb(255,143,111)"
                ></path>
                {/* left shoe shadow */}
                <path
                    d="M 102.461 139.88 L 99.915 138.601 L 100.588 135.263 C 100.588 135.263 104.376 135.596 104.728 136.828"
                    fill="rgb(0,59,148)"
                ></path>
                {/* left shoe */}
                <path
                    d="M 103.393 139.833 C 103.972 139.51 104.562 139.226 105.162 138.942 C 106.632 138.202 108.753 137.434 109.664 136.05 C 109.848 135.772 109.934 135.447 109.912 135.122 C 109.89 134.798 109.76 134.487 109.54 134.23 C 108.205 132.752 105.297 135.178 103.796 133.539 C 103.506 133.216 103.372 128.097 103.372 128.097 L 97.701 129.491 C 97.701 129.491 96.739 139.795 96.842 140.43 C 96.945 141.065 98.912 141.652 98.912 141.652 C 99.493 141.539 100.047 141.331 100.547 141.037 C 101.147 140.647 100.547 135.814 101.364 136.486 C 102.182 137.159 102.451 139.814 102.451 139.814 C 102.763 139.853 103.079 139.859 103.393 139.833 Z"
                    fill="rgb(244,123,86)"
                ></path>
                {/* right shoe shadow */}
                <path
                    d="M 113.296 144.866 L 110.75 143.596 L 111.413 140.269 C 111.413 140.269 115.2 140.6 115.552 141.824"
                    fill="rgb(0,59,148)"
                ></path>
                {/* right shoe */}
                <path
                    d="M 114.248 144.809 C 114.828 144.478 115.428 144.194 116.018 143.909 C 117.487 143.17 119.609 142.411 120.519 141.065 C 120.702 140.785 120.789 140.459 120.767 140.133 C 120.744 139.807 120.615 139.493 120.395 139.235 C 119.06 137.757 116.152 140.184 114.662 138.553 C 114.362 138.231 114.227 133.102 114.227 133.102 L 108.556 134.506 C 108.556 134.506 107.584 144.847 107.697 145.454 C 107.811 146.061 109.767 146.667 109.767 146.667 C 110.349 146.56 110.903 146.354 111.402 146.061 C 111.992 145.662 111.402 140.829 112.209 141.51 C 113.017 142.193 113.306 144.828 113.306 144.828 C 113.62 144.859 113.936 144.852 114.248 144.809 Z"
                    fill="rgb(244,123,86)"
                ></path>
                {/* left leg */}
                <path
                    d="M 94.814 111.375 L 93.147 131.832 C 93.147 131.832 95.807 135.197 104.738 133.329 L 104.82 119.537"
                    fill="rgb(62,41,40)"
                ></path>
                {/* right leg */}
                <path
                    d="M 105.121 115.423 C 104.934 117.186 105.121 136.62 105.121 136.62 C 105.121 136.62 107.594 140.857 118.346 136.62 L 118.191 120.106"
                    fill="rgb(62,41,40)"
                ></path>
                {/* pants */}
                <path
                    d="M 93.975 118.134 C 94.7 118.598 94.958 116.238 95.724 116.617 C 98.512 118.099 101.473 119.288 104.551 120.163 L 104.614 120.163 C 104.766 120.106 104.937 120.106 105.09 120.163 C 105.166 120.189 105.236 120.23 105.295 120.282 C 105.353 120.334 105.4 120.397 105.431 120.466 C 107.33 120.98 109.262 121.385 111.216 121.679 C 113.731 122.049 115.8 120.352 118.377 120.229 C 118.377 111.195 118.377 85.487 114.238 79.998 L 101.819 76.206 C 101.757 77.154 95.786 83.486 95.931 91.212 C 95.91 97.783 95.481 104.347 94.648 110.873 C 94.596 111.289 93.975 117.641 93.975 118.134 Z"
                    fill="rgb(62,41,40)"
                ></path>
                {/* body */}
                <path
                    d="M 115.366 69.599 L 114.227 79.96 C 114.227 79.96 104.914 80.301 100.961 77.78 L 100.961 68.973"
                    fill="rgb(255,143,111)"
                ></path>
                {/* hand */}
                <path
                    d="M 127.163 62.774 L 126.211 63.959 C 126.719 62.998 127.165 62.01 127.546 61.001 C 127.815 60.319 126.604 60.053 126.345 60.726 L 126.2 61.087 C 126.314 60.717 126.428 60.347 126.532 59.977 C 126.571 59.83 126.546 59.675 126.46 59.545 C 126.375 59.415 126.237 59.322 126.076 59.285 C 125.916 59.249 125.746 59.272 125.604 59.351 C 125.463 59.429 125.361 59.555 125.321 59.702 C 125.064 60.665 124.75 61.615 124.379 62.546 C 124.584 61.721 124.733 60.886 124.824 60.044 C 124.907 59.323 123.655 59.352 123.582 60.044 C 123.48 61.004 123.293 61.955 123.023 62.888 C 123.021 62.57 122.99 62.253 122.93 61.94 C 122.92 61.858 122.891 61.779 122.845 61.709 C 122.798 61.638 122.736 61.578 122.661 61.532 C 122.661 61.409 122.589 61.285 122.547 61.153 C 122.497 61.026 122.4 60.92 122.274 60.851 C 122.148 60.782 122 60.754 121.854 60.774 C 121.71 60.794 121.577 60.86 121.481 60.96 C 121.384 61.061 121.33 61.19 121.326 61.323 L 121.244 65.589 C 121.021 66.034 120.729 66.446 120.374 66.812 C 120.974 67.187 121.551 67.592 122.102 68.025 C 122.6 68.405 123.073 68.81 123.52 69.239 C 123.913 68.784 124.296 68.291 124.669 67.855 L 124.793 67.732 C 125.897 66.221 127.042 64.742 128.229 63.295 C 128.715 62.755 127.629 62.196 127.163 62.774 Z"
                    fill="rgb(255,181,169)"
                ></path>
                {/* right arm */}
                <path
                    d="M 109.498 60.148 C 109.498 60.148 113.875 61.229 115.707 63.807 C 116.818 65.594 117.796 67.446 118.636 69.353 L 121.875 64.746 C 121.875 64.746 125.807 65.855 127.359 67.59 C 127.359 67.59 122.703 76.917 118.636 77.714 C 114.569 78.51 110.264 72.244 110.264 72.244 C 110.264 72.244 109.374 74.86 109.55 72.064"
                    fill="rgb(255,143,111)"
                ></path>
                {/* hair */}
                <path
                    d="M 112.271 70.12 C 111.003 69.168 110.044 67.916 109.498 66.499 C 108.981 64.859 109.633 63.418 110.243 61.892 C 110.914 60.382 111.302 58.78 111.392 57.152 C 111.388 55.569 111.299 53.987 111.123 52.413 C 111.112 52.343 111.112 52.273 111.123 52.204 C 110.543 50.403 109.343 48.877 106.983 48.697 C 100.867 48.223 100.516 54.384 100.567 56.953 C 100.619 59.522 100.899 61.181 98.87 62.233 C 96.842 63.286 95.372 66.025 97.318 68.3 C 99.263 70.575 97.515 69.713 96.221 71.703 C 94.927 73.694 95.269 76.168 97.918 77.069 C 100.567 77.969 112.882 76.282 114.01 75.239 C 114.413 74.819 114.621 74.272 114.589 73.713 C 114.312 72.312 113.493 71.05 112.282 70.158 Z"
                    fill="rgb(0,127,104)"
                ></path>
            </g>
            {/* screen @ */}
            <motion.g
                variants={itemVariant}
                custom={{
                    scale: [0, 1],
                    opacity: [0, 1],
                }}
            >
                <path
                    d="M 118.284 18.931 C 119.318 20.3 119.916 21.904 120.012 23.567 C 120.133 24.326 119.933 25.099 119.453 25.728 C 119.248 25.933 118.974 26.071 118.675 26.119 C 118.375 26.167 118.067 26.123 117.798 25.993 C 117.462 25.869 117.159 25.682 116.908 25.443 C 116.682 25.251 116.49 25.027 116.338 24.78 L 116.173 24.496 C 116.131 24.571 116.079 24.641 116.018 24.704 C 115.856 24.814 115.668 24.885 115.469 24.913 C 115.121 24.979 114.759 24.942 114.434 24.808 C 113.7 24.514 113.087 24.012 112.685 23.377 C 112.209 22.682 111.945 21.884 111.92 21.064 C 111.869 20.736 111.898 20.402 112.006 20.085 C 112.113 19.769 112.296 19.478 112.541 19.234 C 112.752 19.049 113.019 18.928 113.307 18.885 C 113.596 18.843 113.891 18.882 114.155 18.997 C 114.419 19.101 114.663 19.242 114.879 19.414 C 115.062 19.555 115.222 19.717 115.355 19.898 L 115.48 20.097 L 115.48 19.547 L 116.814 20.021 L 116.939 23.453 C 116.948 23.7 117.034 23.94 117.187 24.145 C 117.314 24.339 117.501 24.495 117.725 24.59 C 118.367 24.818 118.667 24.306 118.625 23.064 C 118.555 21.826 118.107 20.63 117.332 19.614 C 116.642 18.577 115.609 17.77 114.383 17.31 C 113.939 17.106 113.44 17.028 112.947 17.085 C 112.455 17.142 111.993 17.333 111.62 17.632 C 111.227 18.006 110.93 18.455 110.751 18.947 C 110.572 19.439 110.515 19.961 110.585 20.476 C 110.665 21.78 111.126 23.041 111.92 24.126 C 112.549 25.205 113.55 26.065 114.765 26.572 C 115.185 26.731 115.636 26.812 116.09 26.809 C 116.389 26.825 116.688 26.773 116.959 26.657 L 117.228 26.524 L 118.025 27.899 L 117.901 27.984 C 117.774 28.049 117.643 28.106 117.508 28.155 C 117.293 28.239 117.067 28.296 116.835 28.325 C 116.543 28.364 116.247 28.364 115.956 28.325 C 115.569 28.281 115.19 28.191 114.828 28.06 C 113.802 27.658 112.892 27.045 112.168 26.268 C 111.303 25.398 110.603 24.402 110.098 23.32 C 109.595 22.285 109.307 21.172 109.25 20.04 C 109.176 19.09 109.387 18.139 109.86 17.291 C 110.253 16.58 110.932 16.036 111.754 15.774 C 112.612 15.511 113.548 15.555 114.372 15.898 C 115.987 16.52 117.35 17.587 118.274 18.95 Z M 115.355 23.273 C 115.468 23.139 115.549 22.987 115.595 22.824 C 115.642 22.661 115.651 22.491 115.624 22.325 C 115.61 21.928 115.489 21.54 115.273 21.197 C 115.089 20.901 114.806 20.669 114.465 20.533 C 114.336 20.468 114.187 20.442 114.04 20.459 C 113.893 20.476 113.756 20.535 113.648 20.628 C 113.532 20.746 113.445 20.887 113.395 21.039 C 113.345 21.191 113.333 21.352 113.358 21.509 C 113.371 21.912 113.499 22.305 113.731 22.647 C 113.923 22.957 114.221 23.2 114.579 23.339 C 114.704 23.398 114.846 23.42 114.986 23.401 C 115.125 23.383 115.254 23.324 115.355 23.235"
                    fill="rgb(244,123,86)"
                ></path>
                <path
                    d="M 196.88 84.946 C 197.917 86.314 198.516 87.919 198.608 89.582 C 198.728 90.341 198.528 91.114 198.05 91.743 C 197.843 91.947 197.569 92.083 197.269 92.129 C 196.97 92.176 196.662 92.13 196.394 91.999 C 196.059 91.878 195.756 91.694 195.504 91.459 C 195.28 91.261 195.088 91.034 194.935 90.786 L 194.769 90.501 C 194.727 90.577 194.675 90.647 194.614 90.71 C 194.453 90.823 194.265 90.898 194.066 90.928 C 193.734 90.984 193.391 90.948 193.082 90.824 C 192.349 90.527 191.739 90.022 191.344 89.383 C 190.859 88.692 190.59 87.891 190.568 87.07 C 190.517 86.743 190.545 86.409 190.651 86.093 C 190.756 85.777 190.936 85.486 191.178 85.24 C 191.388 85.053 191.655 84.93 191.944 84.887 C 192.233 84.845 192.53 84.885 192.793 85.003 C 193.062 85.098 193.308 85.239 193.517 85.42 C 193.7 85.563 193.863 85.725 194.003 85.904 L 194.128 86.103 L 194.128 85.563 L 195.452 86.027 L 195.587 89.459 C 195.598 89.702 195.68 89.937 195.825 90.141 C 195.952 90.339 196.144 90.495 196.373 90.587 C 197.046 90.824 197.315 90.312 197.274 89.061 C 197.211 87.825 196.766 86.632 195.99 85.619 C 195.297 84.589 194.27 83.784 193.051 83.316 C 192.607 83.11 192.107 83.029 191.613 83.085 C 191.119 83.141 190.654 83.33 190.278 83.629 C 189.885 84.002 189.588 84.451 189.409 84.943 C 189.23 85.435 189.173 85.958 189.243 86.473 C 189.319 87.778 189.78 89.039 190.578 90.122 C 191.233 91.173 192.242 92.002 193.455 92.483 C 193.874 92.645 194.324 92.729 194.78 92.729 C 195.077 92.744 195.375 92.696 195.649 92.587 L 195.918 92.445 L 196.715 93.819 L 196.591 93.905 C 196.464 93.969 196.332 94.026 196.197 94.075 C 195.982 94.159 195.756 94.217 195.525 94.246 C 195.229 94.284 194.93 94.284 194.635 94.246 C 194.252 94.2 193.876 94.111 193.517 93.98 C 192.493 93.577 191.583 92.964 190.858 92.189 C 189.99 91.317 189.29 90.317 188.788 89.231 C 188.279 88.201 187.991 87.091 187.939 85.961 C 187.865 85.013 188.076 84.066 188.55 83.221 C 188.944 82.507 189.622 81.957 190.444 81.685 C 191.307 81.431 192.242 81.475 193.072 81.809 C 194.663 82.471 195.993 83.567 196.88 84.946 Z M 193.941 89.279 C 194.059 89.148 194.144 88.995 194.192 88.832 C 194.24 88.669 194.25 88.498 194.221 88.331 C 194.209 87.933 194.088 87.545 193.869 87.203 C 193.693 86.903 193.412 86.666 193.072 86.53 C 192.94 86.467 192.79 86.442 192.642 86.459 C 192.494 86.476 192.355 86.533 192.244 86.624 C 192.13 86.744 192.044 86.884 191.992 87.036 C 191.94 87.188 191.924 87.348 191.944 87.506 C 191.967 87.905 192.098 88.293 192.327 88.634 C 192.519 88.946 192.817 89.193 193.176 89.335 C 193.299 89.394 193.439 89.415 193.577 89.396 C 193.714 89.378 193.842 89.32 193.941 89.231"
                    fill="rgb(244,123,86)"
                ></path>
            </motion.g>
            {/* box shadow */}
            <g opacity="0.25">
                <defs>
                    <linearGradient
                        id="idvfBzKALiog-1400797374"
                        gradientTransform="rotate(129.4283480276382, 0.5, 0.5)"
                    >
                        <stop
                            offset="0"
                            stopColor="rgb(127,53,0)"
                            stopOpacity="1"
                        ></stop>
                        <stop
                            offset="1"
                            stopColor="rgba(35,31,32,0)"
                            stopOpacity="0"
                        ></stop>
                    </linearGradient>
                </defs>
                <path
                    d="M 64.224 110.939 L 41.695 99.194 L 19.167 110.958 C 19.167 110.958 31.699 118.134 42.916 124.154 C 50.047 119.546 56.369 114.276 64.224 110.939 Z"
                    fill="url(#idvfBzKALiog-1400797374)"
                ></path>
            </g>
            {/* box */}
            <motion.g variants={mobileBoxVariant} animate={controls}>
                <path
                    d="M 23.534 77.951 L 23.534 103.488 L 45.245 114.873 L 69.77 101.592 L 69.77 76.064"
                    fill="rgb(0,0,0)"
                ></path>
                <path
                    d="M 23.534 77.951 L 23.534 103.488 L 45.245 114.873 L 69.77 101.592 L 69.77 76.064"
                    fill="rgb(255,146,113)"
                ></path>
                <path
                    d="M 45.245 89.345 L 45.245 114.873 L 69.77 101.592 L 69.77 76.064 L 45.245 89.345 Z"
                    fill="rgb(223,92,52)"
                ></path>
                <path
                    d="M 23.534 77.95 L 48.732 64.793 L 69.77 76.064 L 45.245 89.345 Z"
                    fill="rgb(244,123,86)"
                ></path>
                <path
                    d="M 45.824 70.661 C 48.377 70.499 50.928 71.012 53.172 72.139 C 54.465 72.832 55.169 73.552 55.241 74.31 C 55.27 74.723 55.158 75.134 54.921 75.485 C 54.684 75.837 54.333 76.112 53.917 76.273 C 53.441 76.539 52.92 76.728 52.375 76.832 C 51.924 76.928 51.461 76.973 50.998 76.965 L 50.502 76.965 C 50.544 77.069 50.575 77.177 50.595 77.287 C 50.573 77.547 50.481 77.798 50.326 78.017 C 50.057 78.412 49.683 78.738 49.239 78.965 C 48.191 79.532 46.99 79.821 45.772 79.799 C 44.532 79.819 43.309 79.531 42.233 78.965 C 41.803 78.79 41.43 78.517 41.149 78.172 C 40.868 77.826 40.689 77.42 40.629 76.993 C 40.635 76.595 40.762 76.207 40.996 75.872 C 41.23 75.537 41.562 75.269 41.954 75.097 C 42.322 74.9 42.719 74.753 43.133 74.661 C 43.47 74.571 43.818 74.516 44.168 74.5 L 44.531 74.5 L 43.868 74.13 L 45.731 73.069 L 50.046 75.4 C 50.377 75.564 50.747 75.65 51.123 75.65 C 51.498 75.65 51.868 75.564 52.199 75.4 C 53.109 74.87 52.778 74.187 51.216 73.334 C 49.547 72.494 47.651 72.109 45.752 72.225 C 43.746 72.245 41.784 72.76 40.07 73.713 C 38.508 74.661 37.732 75.675 37.742 76.917 C 37.752 78.159 38.57 79.221 40.184 80.083 C 41.947 80.967 43.942 81.387 45.948 81.297 C 47.952 81.328 49.926 80.849 51.65 79.913 C 52.245 79.588 52.78 79.178 53.234 78.699 C 53.533 78.403 53.76 78.05 53.896 77.666 L 53.989 77.277 L 56.452 77.41 L 56.452 77.609 C 56.404 77.795 56.346 77.979 56.276 78.159 C 56.162 78.442 56.02 78.715 55.852 78.974 C 55.596 79.318 55.301 79.635 54.972 79.922 C 54.538 80.307 54.059 80.647 53.544 80.936 C 52.064 81.747 50.426 82.288 48.722 82.529 C 46.861 82.823 44.962 82.852 43.092 82.614 C 41.393 82.433 39.75 81.943 38.259 81.174 C 37.059 80.585 36.097 79.657 35.517 78.529 C 35.281 78.037 35.16 77.506 35.16 76.969 C 35.16 76.432 35.281 75.901 35.517 75.41 C 36.085 74.258 37.038 73.302 38.239 72.68 C 40.522 71.391 43.142 70.69 45.824 70.651 Z M 48.235 76.946 C 48.195 76.737 48.098 76.541 47.953 76.375 C 47.808 76.21 47.621 76.08 47.407 75.998 C 46.883 75.73 46.29 75.595 45.69 75.609 C 45.126 75.589 44.568 75.721 44.086 75.988 C 43.89 76.074 43.725 76.209 43.608 76.376 C 43.491 76.543 43.427 76.737 43.423 76.936 C 43.452 77.142 43.539 77.338 43.675 77.504 C 43.811 77.67 43.992 77.801 44.199 77.884 C 44.736 78.16 45.343 78.301 45.959 78.292 C 46.551 78.3 47.135 78.159 47.645 77.884 C 47.844 77.805 48.011 77.672 48.122 77.502 C 48.234 77.332 48.284 77.134 48.266 76.936"
                    fill="rgb(62,41,40)"
                ></path>
            </motion.g>
        </Container>
    );
}