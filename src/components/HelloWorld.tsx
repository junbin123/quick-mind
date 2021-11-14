import React from 'react'
// import { IIconProps } from '@fluentui/react'
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button'
import { Icon } from '@fluentui/react/lib/Icon'

export default function HelloWorld() {
  return (
    <div>
      Hello World
      <Icon iconName="MapPin" />
      <DefaultButton text="hello" />
      <PrimaryButton text="Primary" />
    </div>
  )
}
