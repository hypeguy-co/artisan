import memoizeOne from 'memoize-one';
var path = require('path');

const ResolveKey = (label, obj) => {
  if (!obj) {
    return label;
  }

  return label
      .split('.')
      .reduce((prev, curr) => prev[curr] || false, obj);
};

export const replaceData = (text, data) => (
  text.replace(/\$\(([^)]+)?\)/g, ($1, $2) => data[$2])
);

export const ResolveKeyMemoized = memoizeOne(ResolveKey);

export const fetchResources = async (lang, mod, basePath, directResult = false) => {
  const resource = await import(`../../../src/languages/${lang}/${mod}.json`);
  if (directResult) {
    return resource.default;
  }

  return {
    [lang]: {
      [mod]: resource.default
    }
  };
};

export const promiseAllNamed = (nameToPromise) => {
  const entries = Object.entries(nameToPromise);
  return Promise.all(entries.map((e) => e[1]))
      .then((results) => {
        const nameToResult = {};
        for (let i = 0; i < results.length; ++i) {
          const name = entries[i][0];
          nameToResult[name] = results[i];
        }
        return nameToResult;
      });
};


export const checkMarkdownMarkup = (text) => (
  text.includes('*') ||
  text.includes('__') ||
  text.includes('~') ||
  (text.includes('[') && text.includes(']'))
);

export const renderFormatedString = (text) => {
  const markdownLink = /\[([^\]]*)\]\(([^)]*)\)/gm;
  const italicText = /__([^_]+)__/gm;

  return text
      .split('*')
      .map((sentence, index) => {
        if (index % 2 !== 0) return `<strong>${sentence}</strong>`;
        return sentence;
      })
      .join('')
      .replace(italicText, '<em>$1<em>')
      .split('~')
      .map((sentence, index) => {
        if (index % 2 !== 0) return `<ins>${sentence}</ins>`;

        return sentence;
      })
      .join('')
      .replace(markdownLink, (r, hrefText, props) => {
        const [href, ...attributes] = props.split(' ');
        return `<a class="translate-link text-small" ${attributes.join(' ')} href="${href}">${hrefText}</a>`;
      });
};
