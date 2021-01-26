const responsive = {
    desktoplg:  (styles) =>`
        @media screen and (min-width : 1394px) {
            ${styles}
        }
    `,
    desktopmd: (styles) =>`
        @media screen and (min-width : 1200px) and (max-width : 1393px) {
            ${styles}
        }
    `,
    desktop: (styles) =>`
        @media screen and (min-width : 992px) and (max-width : 1199px) {
            ${styles}
        }
    `,
    tablet: (styles) =>`
        @media screen and (min-width : 576px) and (max-width : 991px) {
            ${styles}
        }
    `,
    tablet_up: (styles) =>`
        @media screen and (min-width : 768px) {
            ${styles}
        }
    `,

    mobileLG: (styles) =>`
        @media screen and (min-width : 576px) and (max-width : 767px) {
            ${styles}
        }
    `,
    mobileSM: (styles) =>`
        @media screen and (max-width : 575px) {
            ${styles}
        }
    `,
    mobile: (styles) =>`
        @media screen and (max-width : 575px)  {
            ${styles}
        }
    `,
}

export default responsive;
