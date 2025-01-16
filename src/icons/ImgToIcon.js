import React from "react";
import defaultIcon from "./icons8-info-64.png";
import PropType from "prop-types";

export default function ImgToIcon({
  src = "",
  uri = "",
  size = "",
  alt,
  ...otherProps
}) {
  const srcUrl = src || uri || defaultIcon;
  return (
    <React.Fragment>
      <img
        src={srcUrl}
        height={size}
        width={size}
        {...otherProps}
        alt={alt || srcUrl}
      />
    </React.Fragment>
  );
}

ImgToIcon.propTypes = {
  size: PropType.number,
  src: PropType.string,
  uri: PropType.string,
  alt: PropType.string,
};
