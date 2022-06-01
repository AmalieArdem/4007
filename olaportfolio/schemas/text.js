export default {
    name: 'textField',
    title: 'Add text (info field)',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title(will not show on website)',
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
        name: 'categories',
        title: 'Choose category(which site will this go to)',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: 'body',
        title: 'Om (tekstinnhold)',
        type: 'blockContent',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
      },
    },
  }
  