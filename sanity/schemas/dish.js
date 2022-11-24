export default {
  name: 'dish',
  title: 'Platillo',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del platillo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Descripcion corta',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Precio del platillo',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagen del platillo',
    },
  ],
};
