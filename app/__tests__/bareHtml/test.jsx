import should from 'should/as-function';
import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';
import { renderToStaticMarkup } from 'react-dom/server';
Promise.promisifyAll(fs);
const { describe, it } = global;

import expectedJsx from './expected';
import notExpectedJsx from './notExpected';
import components from './components';
import compile from '../../compile';

describe('compile', () =>
  describe('samples', () =>
    it('bareHtml', () =>
      fs.readFileAsync(path.join(__dirname, 'source.reactml'), 'utf8')
      .then((sourceReactML) => {
        const sourceJsx = compile(sourceReactML, components);
        console.warn({ sourceJsx });
        const sourceHtml = renderToStaticMarkup(sourceJsx);
        const expectedHtml = renderToStaticMarkup(expectedJsx);
        const notExpectedHtml = renderToStaticMarkup(notExpectedJsx);
        should(sourceHtml).be.eql(expectedHtml);
        should(sourceHtml).not.be.eql(notExpectedHtml);
      })
    )
  )
);
