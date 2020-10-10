import React, { useState, useEffect } from 'react';

import ContextTranslate from './ContextTranslate';
import { fetchResourcesSrc, fetchResources, promiseAllNamed } from './utils';

const ProviderTranslate = ({
  language,
  resources,
  keysLocation,
  defaultModule,
  supportedModules,
  children
}) => {
  // Ensures a default modules been set
  if (!supportedModules) {
    supportedModules = [defaultModule];
  }

  const [stateLanguage, setStateLanguage] = useState(language);
  const [stateResources, setStateResources] = useState(resources);
  const [localSupportedModules, setlocalSupportedModules] = useState(supportedModules);

  const addSupportedModule = (lang, mod) => {
    if (!localSupportedModules.includes(mod)) {
      setlocalSupportedModules([...localSupportedModules, mod]);
    }
  };

  useEffect(() => {
    (async function autoExecuteAsync() {
      const asyncResoucers = {};
      localSupportedModules.forEach((module) => {
        if (!stateResources[stateLanguage] || !stateResources[stateLanguage][module]) {
          asyncResoucers[module] = updateResources(stateLanguage, module);
        }
      });

      const result = await promiseAllNamed(asyncResoucers);

      // Checks if some new resource was loaded
      if (JSON.stringify(result) === '{}') {
        return null;
      }

      const data = {
        ...stateResources,
        [stateLanguage]: {
          ...stateResources[stateLanguage],
          ...result
        }
      };

      return setStateResources(data);
    }());
  }, [stateResources, localSupportedModules, stateLanguage]);

  const updateResources = async (lang, mod) => await fetchResources(lang, mod, keysLocation, true);

  const state = {
    resources: stateResources,
    language: stateLanguage,
    keysLocation,
    supportedModules,
    defaultModule
  };

  return (
    <ContextTranslate.Provider value={{
      state,
      updateLanguage: setStateLanguage,
      updateResources,
      addSupportedModule
    }}
    >
      {children}
    </ContextTranslate.Provider>
  );
};

ProviderTranslate.defaultProps = {
  resources: {},
  keysLocation: 'src/languages',
  defaultModule: 'general'
};

export default ProviderTranslate;
