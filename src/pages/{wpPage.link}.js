import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import PageHero from '../components/PageHero/Pagehero'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import PageSidebar from '../components/PageSidebar/PageSidebar'
import CTACustom from '../components/CTACustoms/CTACustom'

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin-top: 20px;
`

const CallToAction = styled.div`
  border: 1px solid red;

  .flex {
    display: flex;
    flex-direction: row;
  }
`

const PageTemplate = ({ data }) => {
  console.log(data, 'grab data')
  return (
    <Layout>
      {data.wpPage.featuredImage ? (
        <PageHero
          img={
            data.wpPage.featuredImage.node.localFile.childImageSharp
              .gatsbyImageData
          }
          alt="page hero"
        />
      ) : null}
      <Wrapper>
        <BreadCrumb
          parent={data.wpPage.wpParent && data.wpPage.wpParent.node}
        />
        <ContentWrapper>
          <PageSidebar
            parentChildren={
              data.wpPage.wpParent && data.wpPage.wpParent.node.wpChildren.nodes
            }
            currentPage={data.wpPage}
            parent={data.wpPage.wpParent && data.wpPage.wpParent.node.title}
          >
            {data.wpPage.children}
          </PageSidebar>
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />

            <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
          </PageContent>
        </ContentWrapper>

        <CallToAction>
          <CTACustom />
        </CallToAction>
      </Wrapper>
    </Layout>
  )
}

export default PageTemplate

export const PageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      callToActionBlocks {
        blockImage1 {
          title
          uri
        }
        blockImage2 {
          title
          uri
        }
        blockImage3 {
          title
          uri
        }
      }

      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`
