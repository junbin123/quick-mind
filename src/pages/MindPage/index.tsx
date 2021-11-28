import React, { useState } from 'react'
import ToolBar, { ToolBarProps } from '../../components/ToolBar'
import './style.css'

function MindPage() {
  const mindNodeInfoInit = {
    isBold: true,
    isHighlight: true,
    isDone: true,
    commentNum: 1,
  }
  const [mindNodeInfo, setMindNodeInfo] = useState(mindNodeInfoInit)

  function onUpdate(data: any): void {
    console.log('onUpdate', data)
    setMindNodeInfo({ ...mindNodeInfo, ...data })
  }
  return (
    <div>
      Mind
      <div className="toolbar-box">
        <ToolBar {...mindNodeInfo} onUpdate={onUpdate} />
      </div>
    </div>
  )
}
export default MindPage
