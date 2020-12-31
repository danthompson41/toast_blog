import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const components = {
  codeblock: (props) => (
    <div
      class="bg-gray-800"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
};

export default function PageWrapper(props)  {
  return (
    <MDXProvider components={components}>
      <div class="bg-gray-900 text-gray-300 min-h-screen p-10">
      <a class="text-green-700 text-xl" href="/">Home</a>

        <Helmet>
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        {props.children}
      </div>
      {/* <div>Hey </div> */}
    </MDXProvider>
  );
}
