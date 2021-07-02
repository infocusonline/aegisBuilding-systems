import { useStaticQuery, graphql } from 'gatsby'

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage(databaseId: { eq: 2 }) {
        id
        cta_homepage {
          heroImage {
            localFile {
              childrenImageSharp {
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `)
  return data
}
