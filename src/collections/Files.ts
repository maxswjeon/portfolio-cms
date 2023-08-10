import { CollectionConfig } from "payload/types";

const Files: CollectionConfig = {
  slug: "files",
  upload: {
    staticURL: "/files",
    staticDir: "files",
  },
  fields: [
    {
      name: "title",
      type: "text",
    }
  ]
}

export default Files;