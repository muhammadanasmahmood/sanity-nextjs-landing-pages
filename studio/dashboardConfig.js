export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '630a4ddd7ca5611ba798c964',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wn6dyqmc',
                  apiId: '3c20c5e8-6340-43c4-91ff-37ec4b18816b'
                },
                {
                  buildHookId: '630a4ddee769771c6d2c2182',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-spcdf67p',
                  apiId: '7f79e5e4-e176-45bc-a49c-04fb8d823134'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AnasMahmood999/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-spcdf67p.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
