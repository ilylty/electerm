// ai-chat-history.jsx
import { useLayoutEffect, useRef } from 'react'
import { auto } from 'manate/react'
import AIChatHistoryItem from './ai-chat-history-item'

export default auto(function AIChatHistory ({ history }) {
  const historyRef = useRef(null)

  useLayoutEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight
    }
  }, [history])
  if (!history.length) {
    return <div />
  }
  return (
    <div ref={historyRef} className='ai-history-wrap'>
      {
        history.map((item) => {
          if (item.type === 'separator') {
            return (
              <div key={item.id} className='ai-chat-separator'>
                <span className='ai-chat-separator-text'>New Chat Started</span>
              </div>
            )
          }
          return (
            <AIChatHistoryItem
              key={item.id}
              item={item}
            />
          )
        })
      }
    </div>
  )
})
