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

import global from "./styles/global.css";
import basicTheme from "./styles/themes/basic.css";
import purpleTheme from "./styles/themes/purple.css";

import useVariant from "./hooks/useVariant";

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
    rel: "stylesheet",
    href: global,
  },
];

export default function App() {
  const config = useLoaderData<LoaderData>();
  const { variant, setVariant } = useVariant();

  return (
    <html lang="en" data-theme={variant}>
      <head>
        <Meta />

        <title>{config.title}</title>

        {config.theme === "basic" && (
          <link rel="stylesheet" href={basicTheme} />
        )}

        {config.theme === "purple" && (
          <link rel="stylesheet" href={purpleTheme} />
        )}

        <Links />
      </head>

      <body>
        <Header variant={variant} setVariant={setVariant} />

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
