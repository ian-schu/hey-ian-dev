import React from 'react'
import styles from './Chat.module.css'
import Img from 'gatsby-image'

const Chat = props => {
  const chatData = props.data.chatBlob
  const authors = props.data.authors

  return chatData.map(entry => ChatEntry(entry, authors))
}

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
