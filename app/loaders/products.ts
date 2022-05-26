import { query } from "~/lib/notion";

export const getProducts = async () => {
  const response: any[] = await query(process.env.NOTION_PRODUCTS!, [
    { property: "Name", direction: "ascending" },
  ]);

  return response.map(({ id, properties }) => ({
    id,
    name: properties["Name"].title[0].plain_text,
    price: properties["Price"].number,
  }));
};
