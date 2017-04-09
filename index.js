/* global AFRAME */
require('./BabylonLoader.js')

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Babylon Scene component for A-Frame.
 */
AFRAME.registerComponent('babylon_scene', {
  schema: {
      path: {
          default: 'assets/scene/max/max.babylon',
          parse:function (value) {
              value = value.replace(new RegExp("'", 'g'), "");
              return value;
          }},
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
      var onProgress = function ( xhr ) {
          if ( xhr.lengthComputable ) {
              var percentComplete = xhr.loaded / xhr.total * 100;
              console.log( Math.round(percentComplete, 2) + '% downloaded' );
          }
      };

      var onError = function ( xhr ) {
        console.log(xhr)
      };
      this.scene  = this.el.sceneEl.object3D;
      var manager = new THREE.LoadingManager();
      manager.onProgress = function ( item, loaded, total ) {
          console.log( item, loaded, total );
      };

      var loader = new THREE.BabylonLoader( manager );
      loader.load( this.data.path, function ( babylonScene ) {
          babylonScene.traverse( function ( object ) {
             if ( object instanceof THREE.Mesh ) {
                  object.material = new THREE.MeshPhongMaterial( {
                      //color: Math.random() * 0xffffff
                  } );
              }
          } );
          for(var i = 0; i < babylonScene.children.length; i++){
              this.scene.add(babylonScene.children[i])
          }
      }.bind(this), onProgress, onError );
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { }
});
