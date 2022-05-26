import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getConfig } from "./loaders/config";

import globalCSS from "./styles/global.css";
import headerCSS from "./styles/header.css";
import footerCSS from "./styles/footer.css";

import basicTheme from "./styles/themes/basic.css";
import purpleTheme from "./styles/themes/purple.css";

import Header from "./components/header";
import Footer from "./components/footer";

type LoaderData = {
  title: string;
  theme: string;
};

export const loader: LoaderFunction = async () => {
  return await getConfig();
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/fonts/inter/inter.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: globalCSS,
  },
  {
    rel: "stylesheet",
    href: headerCSS,
  },
  {
    rel: "stylesheet",
    href: footerCSS,
  },
];

export default function App() {
  const { title, theme } = useLoaderData<LoaderData>();

  return (
    <html lang="en" data-theme="light">
      <head>
        <Meta />

        <meta
          name="description"
          content="A shop powered by Tiny Shop! ... this will come from a server"
        />

        <title>{title}</title>

        {theme === "basic" && <link rel="stylesheet" href={basicTheme} />}

        {theme === "purple" && <link rel="stylesheet" href={purpleTheme} />}

        <Links />
      </head>

      <body>
        <Header>{title}</Header>

        <main>
          <Outlet />
        </main>

        <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
