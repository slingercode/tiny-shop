import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalCss from "./styles/global.css";
import lightThemeCss from "./styles/themes/light.css";

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
  return (
    <html lang="en">
      <head>
        <Meta />

        <title>Name of Store</title>

        <link rel="stylesheet" href={lightThemeCss} />

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
