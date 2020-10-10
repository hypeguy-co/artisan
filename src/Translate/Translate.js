import React from 'react'

import { useTranslateString } from './hooks'

const Translate = ({ label, data, language, module, className }) => (
  <span className={className}>
    {useTranslateString(label, data, language, module)}  
  </span>
)


export default React.memo(Translate)
