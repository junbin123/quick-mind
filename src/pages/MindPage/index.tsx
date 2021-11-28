import React from 'react'
import ToolBar, { ToolBarProps } from '../../components/ToolBar'

function MindPage() {
  const mindNodeInfo = {
    isBold: true,
    isHighlight: true,
    isDone: true,
    commentNum: 1,
  }

  let test = 'name'

  function onUpdate(data: ToolBarProps): void {
    console.log('onUpdate', data)
    // mindNodeInfo.isBold = data.isBold
    test = 'junbin'
  }
  return (
    <div>
      Mind
      <ToolBar {...mindNodeInfo} onUpdate={onUpdate} test={test} />
    </div>
  )
}
export default MindPage
