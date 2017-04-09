## aframe-babylon_scene-component

[![Version](http://img.shields.io/npm/v/aframe-babylon_scene-component.svg?style=flat-square)](https://npmjs.org/package/aframe-babylon_scene-component)
[![License](http://img.shields.io/npm/l/aframe-babylon_scene-component.svg?style=flat-square)](https://npmjs.org/package/aframe-babylon_scene-component)

A Babylon Scene import component for A-Frame.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-babylon_scene-component/dist/aframe-babylon_scene-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity babylon_scene="foo: bar"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-babylon_scene-component
```
-->

#### npm

Install via npm:

```bash
npm install aframe-babylon_scene-component
```

Then require and use.

```js
require('aframe');
require('aframe-babylon_scene-component');
```
