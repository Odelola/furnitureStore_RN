export default {
    name: 'furnitures',
    title: 'Furnitures',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'ratings',
            title: 'Ratings',
            type: 'number',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'reviews',
            title: 'Reviews',
            type: 'number',
            options: {
                hotspot: true,
            }
        },
    ]
}