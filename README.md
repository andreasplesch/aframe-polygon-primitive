## aframe-polygon-primitive

An a-polygon primitive for [A-Frame](https://aframe.io). This primitive produces a polygon the x-z plane. The primitive depends on the faceset component.
The points of the polygon are located on the unit circle. The first point is at 1, 0, 0.

### Attributes

| Attribute| Description | Default Value |
| -------- | ----------- | ------------- |
| sides    | number of sides |  3 |

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/andreasplesch/aframe-faceset-component/master/dist/aframe-faceset-component.min.js"></script>
  <script src="https://rawgit.com/andreasplesch/aframe-polygon-primitive/master/dist/aframe-polygon-primitive.min.js"></script>
</head>

<body>
  <a-scene>
	  <!-- pentagon -->
    <a-polygon sides='5'></a-entity>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-polygon-primitive
```

Then register and use.

```js
require('aframe');
require('aframe-faceset-component');
require('aframe-primitive-component');

```
