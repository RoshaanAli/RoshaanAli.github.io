import { DiReact } from "react-icons/di";
import {
  SiFirebase,
  SiMapbox,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiRedux,
  SiMui,
  SiAntdesign,
  SiAmazonaws
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "react",
    Component: <DiReact size="5rem" />,
    title: "React JS",
    Description: () => (
      <>
        Expertise in building user interfaces using React components. Deep
        understanding of the React virtual DOM and JSX..
      </>
    ),
  },
  {
    slug: "react native",
    Component: <RiReactjsFill size="5rem" />,
    title: "React Native",
    Description: () => (
      <>
        Demonstrated experience in building and deploying cross-platform mobile
        applications using React Native for both iOS and Android.{" "}
      </>
    ),
  },
  {
    slug: "next",
    Component: <SiNextdotjs size="5rem" />,
    title: "Next JS",
    Description: () => (
      <>
        Solid experience in building applications with Next.js, leveraging its
        benefits for server-side rendering (SSR), static site generation (SSG),
        and serverless functions.
      </>
    ),
  },
  {
    slug: "graphQl",
    Component: <SiGraphql size="5rem" />,
    title: "GraphQL",
    Description: () => (
      <>
        Expertise in integrating GraphQL APIs into React applications using
        Apollo Client, including managing local state, caching, and UI
        reactivity. Proficiency in using Apollo hooks like useQuery,
        useMutation, and useSubscription.
      </>
    ),
  },
  {
    slug: "redux",
    Component: <SiRedux size="5rem" />,
    title: "Redux",
    Description: () => (
      <>
        Skilled in managing asynchronous actions using Redux Thunk, allowing
        action creators to return a function instead of an action. In-depth
        knowledge of Redux Saga and its underlying concepts like watchers,
        workers, and effects
      </>
    ),
  },
  {
    slug: "antd",
    Component: <SiAntdesign size="5rem" />,
    title: "ANTD",
    Description: () => (
      <>
        Solid understanding of the Ant Design component library, its guidelines,
        and core principles. Ability to utilize Ant Design to create intuitive
        and visually pleasing user interfaces that adhere to modern design
        practices.
      </>
    ),
  },
  {
    slug: "mui",
    Component: <SiMui size="5rem" />,
    title: "MUI",
    Description: () => (
      <>
        Solid understanding of Material-UI components, their properties, and
        behavior. Ability to utilize Material-UI to create interfaces that align
        with Material Design principles.
      </>
    ),
  },
  {
    slug: "expressjs",
    Component: <SiNodedotjs size="5rem" />,
    title: "Express JS",
    Description: () => (
      <>
        Solid understanding of the Express.js framework, its middleware
        architecture, and its underlying principles.
      </>
    ),
  },
  {
    slug: "map",
    Component: <SiMapbox size="5rem" />,
    title: "Google Maps",
    Description: () => (
      <>
        Hands on google map Api's for search location, real-time tracking &
        guidance in my apps.
      </>
    ),
  },
  {
    slug: "firebase",
    Component: <SiFirebase size="5rem" />,
    title: "Firebase",
    Description: () => (
      <>
        Work experience of Firebase for auth, database, push notification,
        real-time socket & messaging in my apps.
      </>
    ),
  },
  {
    slug: "aws",
    Component: <SiAmazonaws size="5rem" />,
    title: "AWS(Lambda, S3, Event-Bridge, IVS)",
    Description: () => (
      <>
        I possess expertise in some AWS services, including managing S3 buckets for
        scalable storage, deploying serverless Lambda functions, orchestrating
        event-driven architectures with EventBridge, and streaming video content
        using IVS.
      </>
    ),
  },
];
