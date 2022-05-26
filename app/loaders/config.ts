import { query } from "~/lib/notion";

export const getConfig = async () => {
  const response: any = await query(process.env.NOTION_CONFIG!);

  const { properties } = response[0];

  return {
    title: properties["Store name"].rich_text[0].plain_text,
    theme: properties["Theme"].select.name,
  };
};
