// import React from "react";
// import Layout from "../components/Layout";
// import Header from "../components/Header";
// import Blog from "../components/blog";

// const Home = () => {
//   return (
//     <Layout>
//       <Header />
//       <Blog />
//     </Layout>
//   );
// };

// export default Home;

import React from "react";
import { Link, graphql } from "gatsby"; //highlight-line
import Layout from "../components/layout";

export default function Home({ data }) {
  return (
    <Layout>
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map((node) => (
        <div key={node.slug}>
          {/* highlight-start */}
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          {/* highlight-end */}
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`;
