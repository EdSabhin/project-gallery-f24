import React from 'react';

const ResponsiveBackground = ({ project } ) => {
  return (
    <picture>
      <source
        media="(min-width: 1600px)"
        srcSet={project.imageXLarge}
      />
      <source
        media="(min-width: 1024px)"
        srcSet={project.imageLarge}
      />
      <source
        media="(min-width: 768px)"
        srcSet={project.imageMedium}
      />
      <img
        src={project.imageSmall}
        alt={project.alt}
        className="w-full h-auto"
      />
    </picture>
  );
};

export default ResponsiveBackground;
