import React from "react";

//Import Images
import beatmaker from "./img/beatmaker.png";
import meraki from "./img/meraki.png";
import waves from "./img/waves.png";

export const ProjectState = () => {
  return [
    {
      title: "Meraki",
      mainImg: meraki,
      url: "/portfolio/meraki",
      secondaryImg: meraki,
      link: "https://www.merakisportandentertainment.com/",
      awards: [
        {
          title: "Tool used",
          description:
            "Designed a hands-on project for a sports company utilising HTML and CSS”",
        },
        {
          title: "Description",
          description: `Developed user-friendly webpages in which I was responsible 
            for web functionality & responsivenes.
            `,
        },
      ],
    },

    {
      title: "Portfolio",
      mainImg: waves,
      url: "/portfolio/waves",
      secondaryImg: waves,
      link: "https://prafulm.netlify.app/",
      awards: [
        {
          title: "tool used",
          description: "Created a website using React.js",
        },
        {
          title: "Description",
          description:
            "Designed a portfolio website of myself using react farmer-motion for animation",
        },
      ],
    },
    {
      title: "Beatmaker",
      mainImg: beatmaker,
      secondaryImg: beatmaker,
      url: "/portfolio/the-beatmaker",
      link: "https://thebeatmakerapp.netlify.app/",
      awards: [
        {
          title: "Tool used",
          description: `Designed a BeatMaker App using HTML, CSS &
            JavaScript.
            `,
        },
        {
          title: "Description",
          description: `Users can choose from three different
            beats and mute them to create their own
            unique sound.
            `,
        },
      ],
    },
  ];
};
