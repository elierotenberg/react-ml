import React from 'react';
import ReactMLFragment from '../../ReactMLFragment';
import ReactMLParagraph from '../../ReactMLParagraph';

export default (<ReactMLFragment>
  <ReactMLParagraph>
    <span className='reactml-b' style={{ fontWeight: 'bold' }}>{'Hello'}</span>
  </ReactMLParagraph>
  <ReactMLParagraph>
    <span className='reactml-i' style={{ fontStyle: 'italic' }}>{'World'}</span>
  </ReactMLParagraph>
  <ReactMLParagraph>
    <a className='reactml-link' href='github.com'>{'github.com'}</a>
  </ReactMLParagraph>
  <ReactMLParagraph>
    <img alt='HN' className='reactml-image' src={'https://news.ycombinator.com/y18.gif'} />
  </ReactMLParagraph>
</ReactMLFragment>);
