export const MenuBarProps = {
    icon: {
        Src: "take_a_step_logo.png",
        title: "Take A Step",
        alt: "Take A Step",
    },
    actions: [
        {
            label: "Home",
            link: "/home",
            class: "defaultButtonLabel",
            menuListColor: "defaultMenuListColor",
        },
        {
            label: "What We Do",
            link: "/what-we-do",
            class: "defaultButtonLabel",
            menuListColor: "defaultMenuListColor",
        },
        {
            label: "Donate",
            link: "/donate",
            class: "defaultButtonLabel",
            menuListColor: "defaultMenuListColor",
        },
        {
            label: "Signup",
            link: "/signup",
            class: "outlinedButtonLabel",
            menuListColor: "defaultMenuListColor",
        },
    ],
};

export const FooterProps = {
    imageSrc: {
        mobile: "home/Desktop.png",
        tablet: "https://www.w3schools.com/w3css/img_mountains.jpg",
        desktop: "home/footer_test.png",
    },
    actions: [
        {
            label: "Contact Us",
            subActionsType: "normal",
            subActions: [
                {
                    label: "+91 43272748240",
                    link: "tel:+9143272748240",
                },
                {
                    label: "tac@mail.com",
                    link: "mailto:tac@mail.com",
                },
            ],
        },
        {
            label: "Social Media",
            subActionsType: "iconList",
            subActions: [
                {
                    iconType: "facebook",
                    goTo: "",
                },
                {
                    iconType: "instagram",
                    goTo: "",
                },
                {
                    iconType: "linkedin",
                    goTo: "",
                },
                {
                    iconType: "youtube",
                    goTo: "",
                },
            ],
        },
    ],
};
