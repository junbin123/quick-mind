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
  test?: string
  onUpdate?: (data: ToolBarProps) => void
}

export const ToolBar: FC<ToolBarProps> = (props) => {
  const toolListInit = [
    {
      label: 'bold',
      Component: <BoldOutlined />,
      className: props.isBold ? 'is-select' : '',
    },
    {
      label: 'highlight',
      Component: <HighlightOutlined />,
      className: props.isHighlight ? 'is-select' : '',
    },
    {
      label: 'done',
      Component: <CheckCircleOutlined />,
      className: props.isDone ? 'is-select' : '',
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
  useEffect(() => {
    console.log('useEffect', props)
    // toolList
    // setToolList(toolList)
  }, [])

  function handleTool({ label }: ToolProps) {
    console.log('handleTool', label)
    if (label === 'bold') {
      props.onUpdate &&
        props.onUpdate({ ...props, isBold: !props.isBold, test: 'hhh' })
      return
    }
    if (label === 'highlight') {
      props.onUpdate &&
        props.onUpdate({ ...props, isHighlight: !props.isHighlight })
      return
    }
    if (label === 'done') {
      props.onUpdate && props.onUpdate({ ...props, isDone: !props.isDone })
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
        {props.commentNum > 0 && (
          <div className="msg-tag absolute flex-center">{props.commentNum}</div>
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
