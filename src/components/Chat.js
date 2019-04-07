import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      timeStamps: this.setTimestamps(),
    }
  }

  setTimestamps() {
    const chatData = this.props.data.chatBlob

    const timeStart = new Date()
    timeStart.setMinutes(timeStart.getMinutes() - chatData.length)

    const timeStamps = chatData.map(() => {
      const offset = Math.round(Math.random() * 30) + 15
      const epoch = timeStart.setSeconds(timeStart.getSeconds() + offset)
      return new Date(epoch)
    })

    return timeStamps
  }

  expand = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }))
  }

  render() {
    const chatData = this.props.data.chatBlob
    const authors = this.props.data.authors
    const { timeStamps, expanded } = this.state

    return (
      <Wrapper onClick={this.expand}>
        <Container expanded={expanded}>
          {chatData.map((entry, idx) => {
            const time = timeStamps[idx]
            const timeString = time.toLocaleTimeString()

            return (
              <ChatEntry
                key={idx}
                entry={entry}
                authors={authors}
                time={timeString}
              />
            )
          })}
        </Container>
        {!expanded && <Overlay />}
      </Wrapper>
    )
  }
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

const Wrapper = styled.div`
  min-height: 150px;
  position: relative;
  cursor: pointer;
`

const Container = styled.div`
  background-color: #f2fff9;
  margin: 1rem auto;
  max-height: ${props => (props.expanded ? 'auto' : '150px')};
  width: 100%;
  overflow: hidden;
  max-width: ${props => props.theme.sizes.maxWidthInsetCentered};
`

const Overlay = styled.div`
  height: 150px;
  position: absolute;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 1) 90%
  );
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Entry = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-flow: row nowrap;
  &:hover {
    background-color: #f4f4f4;
  }
`
const Avatar = styled.div`
  width: 50px;
  margin-right: 0.5rem;
  img {
    border-radius: 2px;
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
