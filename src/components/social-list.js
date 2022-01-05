import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const SocialList = (props) => {
  const data = useStaticQuery(graphql`
    query SocialListQuery {
      allSociallistJson {
        edges {
          node {
            url
            icon
          }
        }
      }
    }
  `);

  const className = props?.className ?? "flex footer-social";

  return (
    <ul className={className}>
      {data.allSociallistJson.edges.map((x, index) => (
        <li key={index}>
          <a href={x.url} target="_blank" rel="noreferrer">
            <i className={x.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
