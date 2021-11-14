import React from 'react'
import './index.css'
import { IconButton } from '@fluentui/react/lib/Button'
import { Breadcrumb, IBreadcrumbItem } from '@fluentui/react/lib/Breadcrumb'
import { IContextualMenuProps } from '@fluentui/react'

export default function HeaderBar() {
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'emailMessage',
        text: 'Email message',
        iconProps: { iconName: 'Mail' },
      },
      {
        key: 'calendarEvent',
        text: 'Calendar event',
        iconProps: { iconName: 'Calendar' },
      },
    ],
  }

  const items: IBreadcrumbItem[] = [
    { text: 'Files', key: 'Files', onClick: handleBreadClick },
    {
      text: 'Folder 1',
      key: 'f1',
      isCurrentItem: true,
      onClick: handleBreadClick,
    },
    {
      text: 'Folder 2',
      key: 'f2',
      onClick: handleBreadClick,
    },
  ]
  function handleBreadClick(data = {}) {
    console.log(data)
  }

  function handleHome() {
    console.log('object')
  }
  function handleMenu() {
    console.log('object', '0')
  }
  return (
    <div className="header-bar-box flex align-center justify-between">
      <div className="header-left flex align-center">
        <div className="header-home-icon flex align-center justify-center">
          <IconButton
            iconProps={{ iconName: 'HomeSolid' }}
            onClick={handleHome}
          />
          <IconButton menuProps={menuProps} onClick={handleMenu} />
        </div>
        <Breadcrumb style={{ margin: '0 0 0 10px' }} items={items} />
      </div>
      <div className="header-right">223</div>
    </div>
  )
}
