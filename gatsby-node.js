const path = require('path')


exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;

    const results = await graphql(`
        query getProjects {
            projects:allContentfulProject {
                nodes {
                    slug
                    gallery
                }
            }
        }
    `)


    results.data.projects.nodes.forEach((project) => {
        createPage({
            path: `${project.gallery}/${project.slug}`,
            component: path.resolve(`src/templates/project.js`),
            context: {
                slug: project.slug,
            }
        })
    });
    


    const sectionResults = await graphql(`
    query getSections {
        sections:allContentfulSection {
          nodes {
            slug
            title
          }
        }
      }
    `)

    sectionResults.data.sections.nodes.forEach((section) => {
        createPage({
            path: `/${section.slug}`,
            component: path.resolve(`src/templates/section.js`),
            context: {
                slug: section.slug,
            }
        })
    });

}