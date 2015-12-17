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
<div>Mess with DOM</div>
<i>World</i><script>alert("I'm evil")</script>
<link>github.com</link>
<iframe src='http://evil.me/evil.js'></iframe>
<image url='https://news.ycombinator.com/y18.gif'>HN</image>
```

gets compiled to

```jsx
<ReactMLFragment>
  <ReactMLParagraph>
    <ReactMLBold>
      {'Hello'}
    </ReactMLBold>
  </ReactMLParagraph>
  <ReactMLParagraph>
    <ReactMLItalic>
      {'World'}
    </ReactMLItalic>
  </ReactMLParagraph>
  <ReactMLParagraph>
    <ReactMLLink url={'github.com'}>
      {'github.com'}
    </ReactMLLink>
  </ReactMLParagraph>
  <ReactMLParagraph>
    <ReactMLImage label={'HN'} url={'https://news.ycombinator.com/y18.gif'} />
  </ReactMLParagraph>
</ReactMLFragment>
```

which in turn will be rendered using `React.render` to

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

You can of course customize:
- the existing components from the `basic` layout via CSS or overloading,
- add or replace components with your own.

### Basic usage

```js
import ReactML from 'react-ml';

React.render(ReactML.compile('<b>Hello world</b>', ReactML.presets.basic));
```

### Adding custom components

Components are defined by their tagname (eg. `<image>` has tagname `image`). It is then up to you to define which
React Element will actually be mapped to your custom component. For example, if we wish to add a `<red>` component that
will color its children in red, we would do the following:

```js
compile(source, Object.assign({}, basicPreset, {
  red: (attribs, children, transformChildren) =>
    <span style={{ color: 'red' }}>
      {transformChildren(children)}
    </span>,
}));
```

The signature function for a component definition is:

`(attribs: Object, children: Object, transformChildren: Function): React.Element`

- `attribs` contains the attributes of the current node, eg. `attribs` for `<image bar='foo'>` is `{ bar: 'foo' }`
- `children` contains the list of the children node,
- `transformChildren` is a reference to the closured compile function to perform recursive transformation of the
`children` list.

Each object in children can be destructured as `{ type, data } = child`, where `type` can either be `text`, in which
case the actual text content is in `data`, or `tag`, in which case `data` and the `children` object should be either
ignored or passed to `transformChildren`.
