import { UserIcon } from "@sanity/icons";

export default {
  name: "employee",
  title: "Employee",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname, Title" format',
      validation: Rule => Rule.required()
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      description: "Please limit word count to 120",
      validation: Rule => Rule.required()
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
