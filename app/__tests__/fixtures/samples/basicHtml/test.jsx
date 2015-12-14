import should from 'should/as-function';
import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';
Promise.promisifyAll(fs);

import expected from './expected';
import components from './components';
import compile from '../../../../compile';

describe('compile', () =>
  describe('samples', () =>
    describe('basicHtml', () =>
      fs.readFileAsync(path.join(__dirname, 'source.reactml'))
      .then((source) => {
        const compiled = compile(source, components);
        console.warn({ compiled, expected });
      })
    )
  )
)
