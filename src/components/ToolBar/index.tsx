import React, { FC, useState, useEffect } from 'react'
import './style.css'
import {
  MessageOutlined,
  CheckCircleOutlined,
  PictureOutlined,
  HighlightOutlined,
  MoreOutlined,
  BoldOutlined,
} from '@ant-design/icons'
export interface ToolProps {
  label: string
}
export interface ToolBarProps {
  isBold: boolean
  isHighlight: boolean
  isDone: boolean
  commentNum: number
  onUpdate?: (data: any) => void
}

export const ToolBar: FC<ToolBarProps> = ({
  isBold,
  isHighlight,
  isDone,
  commentNum,
  onUpdate,
}) => {
  const toolListInit = [
    {
      label: 'bold',
      Component: <BoldOutlined />,
      className: isBold ? 'is-select' : '',
    },
    {
      label: 'highlight',
      Component: <HighlightOutlined />,
      className: isHighlight ? 'is-select' : '',
    },
    {
      label: 'done',
      Component: <CheckCircleOutlined />,
      className: isDone ? 'is-select' : '',
    },
    {
      label: 'picture',
      Component: <PictureOutlined />,
    },
    {
      label: 'comment',
      Component: <MessageOutlined />,
    },
  ]
  const [toolList, setToolList] = useState(toolListInit)

  function handleTool({ label }: ToolProps) {
    if (label === 'bold') {
      const newIsBold = !isBold
      toolList[0].className = newIsBold ? 'is-select' : ''
      onUpdate && onUpdate({ isBold: newIsBold })
      setToolList(toolList)
      return
    }
    if (label === 'highlight') {
      const newIsHighlight = !isHighlight
      toolList[1].className = newIsHighlight ? 'is-select' : ''
      onUpdate && onUpdate({ isHighlight: newIsHighlight })
      setToolList(toolList)
      return
    }
    if (label === 'done') {
      const newIsDone = !isDone
      toolList[2].className = newIsDone ? 'is-select' : ''
      onUpdate && onUpdate({ isDone: newIsDone })
      setToolList(toolList)
      return
    }
  }

  return (
    <div className="container relative">
      <div className="tool-bar-box flex align-center justify-between absolute">
        {toolList.map((item) => {
          return (
            <div
              key={item.label}
              className={`tool-item flex-center ${item.className || ''}`}
              onClick={() => handleTool(item)}
            >
              {item.Component}
            </div>
          )
        })}
        {commentNum > 0 && (
          <div className="msg-tag absolute flex-center">{commentNum}</div>
        )}
        <div className="middle-line"></div>
        <div
          className="tool-item flex-center"
          onClick={() => handleTool({ label: 'more' })}
        >
          <MoreOutlined />
        </div>
      </div>
    </div>
  )
}
export default ToolBar
