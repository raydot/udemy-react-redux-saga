import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

function EntryLines({ entries }) {
  // console.log(entries);
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...entry}
        />
      ))}
    </Container>
  );
}

export default EntryLines;
