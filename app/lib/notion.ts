import { Client } from "@notionhq/client";

type Sort = {
  property: string;
  direction: "ascending" | "descending";
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN!,
});

export const query = async (database_id: string, sorts?: Sort[]) => {
  try {
    const response = await notion.databases.query({
      database_id,
      sorts,
    });

    return response.results;
  } catch (error) {
    return [];
  }
};
