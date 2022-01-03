import React from "react";
const SocialList = (props) => {
  const className = props?.className ?? "flex footer-social";
  const social = [
    { url: "https://www.youtube.com/c/ConmetItsrl", icon: "lni lni-youtube" },
    {
      url: "https://www.linkedin.com/company/11477503/",
      icon: "lni-linkedin-original",
    },
    { url: "https://www.facebook.com/conmetsrl", icon: "lni-facebook-filled" },
  ];

  return (
    <ul className={className}>
      {social.map((x, index) => (
        <li key={index}>
          <a href={x.url} target="_blank">
            <i className={x.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
