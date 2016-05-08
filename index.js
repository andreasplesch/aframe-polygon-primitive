if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}
var getMeshMixin = require('./getMeshMixin');

AFRAME.registerPrimitive('a-polygon', AFRAME.utils.extendDeep({}, getMeshMixin(), 
	{
  defaultAttributes: {
    faceset: {
      vertices: '1 0 0, -0.5 0 0.866, -0.5 0 -0.866'
    }
  },

  mappings: {
    sides: 'faceset.vertices',
  },
  
  transforms: {
		sides: function(sides) {
			var vts = [];
			sides = Math.max(3, sides);
			for (var a = 0; a < 2 * Math.PI; a += 2 * Math.PI/sides) {
				vts.push( [ Math.cos(a), 0 , Math.sin(a) ].join(" ") );
			}
			return vts.join(",");
		}
  }
  
}));
