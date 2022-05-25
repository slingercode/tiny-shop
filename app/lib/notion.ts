import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN!,
});

export const query = async (database_id: string) => {
  try {
    const response = await notion.databases.query({
      database_id,
    });

    return response.results;
  } catch (error) {
    return [];
  }
};
