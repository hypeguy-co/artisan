import { useEffect, useContext } from 'react'
import ContextTranslate from './ContextTranslate'
import {
  ResolveKeyMemoized,
  renderFormatedString,
  checkMarkdownMarkup,
  replaceData
} from './utils'

export const useTranslateContext = () => {
  const ctx = useContext(ContextTranslate)

  if (process.env.NODE_ENV !== 'production' && !ctx) {
    throw new Error(
      'could not find context value; please ensure the component is wrapped in a <Provider>'
    )
  }

  return ctx
}

export const useTranslate = () => {
  const { state, updateLanguage } = useTranslateContext()
  return [state.language, updateLanguage]
}

export const useTranslateString = (label, data, language, module) => {
  const { state, addSupportedModule } = useTranslateContext()
  const mod = module || state.defaultModule || 'general'
  const lang = language || state.language
  const { resources } = state
  let keys = null

  useEffect(() => {
    if (!resources[lang] || !resources[lang][mod]) {
      addSupportedModule(lang, mod)
    }
  }, [addSupportedModule, lang, mod, resources])

  if (resources[lang] && resources[lang][mod]) {
    keys = resources[lang][mod]
  }

  if (!label) {
    return null
  }

  let text = ResolveKeyMemoized(label, keys)

  if (!text) {
    return label
  }

  if (data) {
    text = replaceData(text, data)
  }

  if (checkMarkdownMarkup(text)) {
    text = renderFormatedString(text)
  }

  return text
}
