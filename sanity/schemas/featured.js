export default {
    name: "featured",
    type: "document",
    title: "Categorias destacadas del menu",
    fields:[
        {
            name: "name",
            type: "string",
            title: "Nombre de categoria destacada",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "short_description",
            type: "string",
            title: "Descripcion corta",
            validation: (Rule) => Rule.max(200),   
        },
        {
            name: "restaurants",
            type: "array",
            title: "Restaurantes",
            of: [{ type: "reference", to: [{ type: "restaurant"}] }],
        },
    ],
};