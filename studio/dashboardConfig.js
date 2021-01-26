export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60105135b9ab3374342a6d8f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-t7waewpq',
                  apiId: '47213b67-d4c3-4d8f-8972-57cedcc13e15'
                },
                {
                  buildHookId: '601051351af1fc8598116939',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z31vngj4',
                  apiId: '934737de-e2ed-4175-816a-36a912f5f3bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oskarjarvi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z31vngj4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
