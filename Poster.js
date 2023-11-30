AFRAME.registerComponent('thumbnails', {
    init: function () {
      
      const comics = [
        'comic1.jpg',
        'comic2.jpg',
        'comic3.jpg',
        
      ];
  
      
      for (let i = 0; i < comics.length; i++) {
        createThumbnail(this.el, comics[i], i);
      }
    },
  });
  
  AFRAME.registerComponent('boundary', {
    init: function () {
      
      const boundaryEntity = document.createElement('a-plane');
      boundaryEntity.setAttribute('position', '0 0 0');
      boundaryEntity.setAttribute('rotation', '-90 0 0');
      boundaryEntity.setAttribute('width', '8');
      boundaryEntity.setAttribute('height', '5');
      boundaryEntity.setAttribute('color', 'transparent');
      boundaryEntity.setAttribute('opacity', '0');
      this.el.appendChild(boundaryEntity);
    },
  });
  
  function createThumbnail(parentEntity, posterSrc, index) {
    
    const thumbnailEntity = document.createElement('a-plane');
    thumbnailEntity.setAttribute('position', `${index * 2 - 2} 0 0`);
    thumbnailEntity.setAttribute('width', '1.5');
    thumbnailEntity.setAttribute('height', '2');
    thumbnailEntity.setAttribute('material', `src: ${posterSrc}`);
    parentEntity.appendChild(thumbnailEntity);
  }
  