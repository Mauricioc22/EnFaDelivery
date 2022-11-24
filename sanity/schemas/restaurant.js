export default {
  name: 'restaurant',
  title: 'Restaurante',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nombre del restaurante",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Descripcion corta",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Imagen del restaurante",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitud del restaurante",
    },
    {
      name: "long",
      type: "number",
      title: "longitud del restaurante",
    },
    {
      name: "address",
      type: "string",
      title: "Direccion del restaurante",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ratting",
      type: "number",
      title: "Ingresa una calificacion (1 a 5 estrellas)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Por favor ingrese un valor entre 1 y 5"),
    },

    {
      name: "type",
      title: "Categoria",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Platillos",
      of: [{ type: "reference", to: [{type: "dish"}] }],
    },
  ],
};
