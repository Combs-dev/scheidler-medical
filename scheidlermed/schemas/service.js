import { ActivityIcon } from "@sanity/icons";

export default {
  name: "service",
  title: "Service",
  type: "document",
  icon: ActivityIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the provided service",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().max(300),
    },
  ],
};
