export default {
  name: 'category',
  title: 'Menu Categoria',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre de la categoria',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'imagen de la categoria',
    },
  ],
}
