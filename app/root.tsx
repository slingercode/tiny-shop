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

import globalCss from "./styles/global.css";
import purpleLightThemeCss from "./styles/themes/purple-light.css";
import purpleDarkThemeCss from "./styles/themes/purple-dark.css";

export const loader: LoaderFunction = async () => {
  // This is an API call
  return { title: "My cool store", theme: "purple" };
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalCss,
  },
];

export default function App() {
  const config = useLoaderData();

  const variant: "light" | "dark" = "dark";

  return (
    <html lang="en">
      <head>
        <Meta />

        <title>{config.title}</title>

        {config.theme === "purple" && variant === "light" && (
          <link rel="stylesheet" href={purpleLightThemeCss} />
        )}

        {config.theme === "purple" && variant === "dark" && (
          <link rel="stylesheet" href={purpleDarkThemeCss} />
        )}

        <Links />
      </head>

      <body>
        <header>Header</header>

        <main>
          <Outlet />
        </main>

        <footer>Footer</footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
