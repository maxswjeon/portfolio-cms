import { CollectionConfig } from 'payload/types';

const Hardware: CollectionConfig = {
  slug: 'hardware',
  labels: {
    plural: "Hardware Projects",
    singular: "Hardware Project",
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
      name: "description", 
      type: "richText",
      label: "Description",
    },
    {
      name: "files",
      label: "Files",
      type: "array",
      fields: [
        {
          name: "file",
          type: 'upload',
          relationTo: 'files',
        }
      ]
    }
  ],
}

export default Hardware;