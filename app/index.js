import 'babel-polyfill';
import compile from './compile';
import presets from './presets';

import ReactMLBold from './components/ReactMLBold';
import ReactMLCode from './components/ReactMLCode';
import ReactMLFragment from './components/ReactMLFragment';
import ReactMLImage from './components/ReactMLImage';
import ReactMLItem from './components/ReactMLItem';
import ReactMLLink from './components/ReactMLLink';
import ReactMLList from './components/ReactMLList';
import ReactMLParagraph from './components/ReactMLParagraph';
import ReactMLQuote from './components/ReactMLQuote';
import ReactMLStrikethrough from './components/ReactMLStrikethrough';
import ReactMLUnderline from './components/ReactMLUnderline';

export default {
  compile,
  presets,
  ReactMLBold,
  ReactMLCode,
  ReactMLFragment,
  ReactMLImage,
  ReactMLItem,
  ReactMLLink,
  ReactMLList,
  ReactMLParagraph,
  ReactMLQuote,
  ReactMLStrikethrough,
  ReactMLUnderline,
};
