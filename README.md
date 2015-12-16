React ML
========

React-base, extensible user-facing language (think BBCode/WikiCode) for the modern web.

It allows you to enrich your user-generated content (comments, forum posts...) with custom, well-integrated features.

It compiles text written by your users to injection-safe JSX (React Elements) using rules defined by you.

### Features

- compiler works in the server or in the client so you can have a wonderful client-side editor but still compile on the server for maximum efficiency
- completely extensible : ReactML allows you to define custom tags and associate them with custom React components
- fast, based on React and htmldomparser2

### Design goals

- fast
- comes with a basic set of custom tags inspired by BBCode
- very easily extensible with you own markup
- injection-safe (unless you want to allow tags like `<script>`, `<iframe>` or `<style>`, which you can)
- allows you to generate unsafe-looking code in a safe way


### Example

Using `reaml-ml/app/presets/basic`, the following text:

```
<b>Hello</b>
<i>World</i>
<link>github.com</link>
<image url='https://news.ycombinator.com/y18.gif'>HN</image>
```

gets compiled to

```jsx
<ReactMLFragment>
  <ReactMLParagraph>
    <span className='reactml-b' style={{ fontWeight: 'bold' }}>
      {'Hello'}
    </span>
  </ReactMLParagraph>
  <ReactMLParagraph>
    <span className='reactml-i' style={{ fontStyle: 'italic' }}>
      {'World'}
    </span>
  </ReactMLParagraph>
  <ReactMLParagraph>
    <a className='reactml-link' href='github.com'>
      {'github.com'}
    </a>
  </ReactMLParagraph>
  <ReactMLParagraph>
    <img alt='HN' className='reactml-image'
      src={'https://news.ycombinator.com/y18.gif'}
    />
  </ReactMLParagraph>
</ReactMLFragment>
```

which in turned will be rendered using `React.render` to

```html
<div class="reactml-fragment">
  <div class="reactml-paragraph">
    <span class="reactml-b" style="font-weight:bold;">Hello</span>
  </div>
  <div class="reactml-paragraph">
    <span class="reactml-i" style="font-style:italic;">World</span>
  </div>
  <div class="reactml-paragraph">
    <a class="reactml-link" href="github.com">github.com</a>
  </div>
    <div class="reactml-paragraph">
    <img alt="HN" class="reactml-image" src="https://news.ycombinator.com/y18.gif"/>
  </div>
</div>
```
