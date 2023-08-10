import { CollectionConfig } from 'payload/types';

const Software: CollectionConfig = {
  slug: 'software',
  labels: {
    plural: "Software Projects",
    singular: "Software Project",
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      type: "row",
      fields: [
        {
          name: "start",
          type: "date",
          label: "Start date",
        },
        {
          name: "end",
          type: "date",
          label: "End date",
        },
      ]
    },
    {
      name: "github",
      type: "text",
      label: "Github URL",
    },
    {
      name: "description", 
      type: "richText",
      label: "Description",
    },
  ],
}

export default Software;