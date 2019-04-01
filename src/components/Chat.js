import React from 'react'
import styles from './Chat.module.css'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Chat = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulChat(filter: { name: { eq: "Landing" } }) {
          edges {
            node {
              name
              authors {
                name
                role
                status
                avatar {
                  fluid(maxWidth: 500) {
                    ...GatsbyContentfulFluid_withWebp_noBase64
                  }
                }
              }
              chatBlob {
                author
                text
              }
            }
          }
        }
      }
    `}
    render={data => {
      const chatData = data.allContentfulChat.edges[0].node.chatBlob
      const authors = data.allContentfulChat.edges[0].node.authors

      return chatData.map(entry => ChatEntry(entry, authors))
    }}
  />
)

export default Chat

const ChatEntry = (entry, authors) => {
  const author = authors.find(a => a.name === entry.author)

  return (
    <div className={styles.entry}>
      <div className={styles.portraitColumn}>
        <Img fluid={author.avatar.fluid} className={styles.portrait} />
      </div>
      <div className={styles.entriesColumn}>
        <div>
          <span className={styles.author}>{entry.author}</span>
          <span className={styles.timestamp}>4:35</span>
        </div>
        {entry.text.map((text, idx) => (
          <div key={idx}>{text}</div>
        ))}
      </div>
    </div>
  )
}

// Chat.propTypes = {
//   data: PropTypes.array.isRequired,
// }
