import { createGlobalStyle } from 'styled-components';

import Reset from './reset';
import typography from './typography';

export default createGlobalStyle`
    ${Reset}

    html {
        scroll-behavior: smooth;
        -ms-overflow-style: none;
        /* Microsoft scrollbar none */

        &,
        & * {
            scrollbar-width: none;
            /* window Firefox scrollbar none */
        }
    }

    ::-webkit-scrollbar {
        display: none;
        /* Chrome, Safari scrollbar none */
    }

    body {
        display: block;
        overflow-x: hidden;
        color: ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.back};
        transition-property: color, background-color;
        transition-duration: 0.25s;

        * {
            outline: none;
            box-sizing: border-box;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        ul,
        ol {
            li:last-child {
            margin-bottom: 0;
            }
        }

        label {
            color: rgba(0, 0, 0, 0.54);
        }

        input,
        textarea {
            &::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: rgba(112, 112, 112, 0.4);
            opacity: 1;
            font-size: 0.95rem;
            /* Firefox */
            }

            &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: rgba(112, 112, 112, 0.4);
            font-size: 0.95rem;
            }

            &::-ms-input-placeholder {
            /* Microsoft Edge */
            color: rgba(112, 112, 112, 0.4);
            font-size: 0.95rem;
            }
        }
    }

    ${typography}
`;
