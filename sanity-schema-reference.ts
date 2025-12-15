/* 
  Copy this schema into your Sanity Studio `schemas` folder.
*/

export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent', // or 'text' if blockContent isn't set up
    },
    {
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      initialValue: 10,
    }
  ],
}
