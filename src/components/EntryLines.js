import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

function EntryLines({ entries, editEntry }) {
  console.log(entries);
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...entry}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
}

export default EntryLines;
