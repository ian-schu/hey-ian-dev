import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Chat = props => {
  const chatData = props.data.chatBlob
  const authors = props.data.authors

  return chatData.map((entry, idx) => (
    <ChatEntry key={idx} entry={entry} authors={authors} />
  ))
}

export default Chat

const ChatEntry = props => {
  const { entry, authors } = props
  const author = authors.find(a => a.name === entry.author)

  return (
    <Entry>
      <Avatar>
        <Img fluid={author.avatar.fluid} />
      </Avatar>
      <div>
        <div>
          <Author>{entry.author}</Author>
          <Timestamp>4:35</Timestamp>
        </div>
        {entry.text.map((text, idx) => (
          <div key={idx}>{text}</div>
        ))}
      </div>
    </Entry>
  )
}

const Entry = styled.div`
  display: flex;
  flex-flow: row nowrap;
`
const Avatar = styled.div`
  width: 75px;
  img {
    width: 75px;
    height: 75px;
    border: 1px solid gray;
  }
`
const Author = styled.span`
  font-weight: bold;
`

const Timestamp = styled.span`
  color: gray;
`
