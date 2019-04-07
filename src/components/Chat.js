import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Chat = props => {
  const chatData = props.data.chatBlob
  const authors = props.data.authors

  const timeStart = new Date()
  timeStart.setMinutes(timeStart.getMinutes() - chatData.length)

  const timeStamps = chatData.map(() => {
    const offset = Math.round(Math.random() * 30) + 15
    const epoch = timeStart.setSeconds(timeStart.getSeconds() + offset)
    return new Date(epoch)
  })

  return chatData.map((entry, idx) => {
    const time = timeStamps[idx]
    const timeString = time.toLocaleTimeString()

    return (
      <ChatEntry key={idx} entry={entry} authors={authors} time={timeString} />
    )
  })
}

Chat.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  chatBlob: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      text: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  time: PropTypes.string,
}

export default Chat

const ChatEntry = props => {
  const { entry, authors, time } = props
  const author = authors.find(a => a.name === entry.author)

  return (
    <Entry>
      <Avatar>
        <Img fluid={author.avatar.fluid} />
      </Avatar>
      <div>
        <Meta>
          <Author>{entry.author}</Author>
          <Timestamp>{time}</Timestamp>
        </Meta>
        {entry.text.map((text, idx) => (
          <ChatText key={idx}>{text}</ChatText>
        ))}
      </div>
    </Entry>
  )
}

const Entry = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 1rem;
`
const Avatar = styled.div`
  width: 50px;
  margin-right: 0.5rem;
  img {
    border: 1px solid #eeeeee;
  }
`
const Meta = styled.div`
  margin-bottom: 0.2rem;
`

const Author = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`

const Timestamp = styled.span`
  color: gray;
`
const ChatText = styled.div`
  font-size: 0.8rem;
  line-height: 1rem;
`
