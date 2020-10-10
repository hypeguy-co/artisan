import React, { useState } from 'react';
import Truncate from 'react-truncate';
import { Text } from '~/Text';
 
interface ReadMoreProps {
  children: JSX.Element,
  lines: number;
  less: string;
  more: string;
};

const DetailsLink = ({
  children,
  onClick
}) => (
  <Text
  color="primary.500"
  fontWeight="bold"
  borderBottom="1px solid"
  display="inline"
  fontSize="12px">
    <a
      href='#'
      onClick={onClick}
    >
      {children}
    </a>
  </Text>
)

const ReadMore = ({
  children,
  more='Read more',
  less='Show less',
  lines=3
}:ReadMoreProps ) => {
  const [expanded, setExpanded] = useState(false)
  const [truncated, setTruncated] = useState(false)

  const handleTruncate = (truncated) => {
    if (truncated !== truncated) {
      setTruncated(truncated)
    }
  }

  return (
    <div>
      <Truncate
        lines={!expanded && lines}
        ellipsis={(
          <span>
            ...{' '}
            <DetailsLink onClick={() => setExpanded(!expanded)}>
              {more}
            </DetailsLink>
          </span>
        )}
        onTruncate={handleTruncate}
      >
        {children}
      </Truncate>
      {!truncated && expanded && (
        <span>
          {' '}
          <DetailsLink onClick={() => setExpanded(!expanded)}>
            {less}
          </DetailsLink>
        </span>
      )}
    </div>
  );
}

 
export default ReadMore;