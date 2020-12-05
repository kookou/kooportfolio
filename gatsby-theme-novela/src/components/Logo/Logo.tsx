import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "../../styles/media";

import { Icon } from '../../types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg
        width="192"
        height="23"
        viewBox="0 0 192 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <g clipPath="url(#clip0)">
        <path xmlns="http://www.w3.org/2000/svg" d="M0,0 L43.1807229,0 L43.1807229,135.710843 L0,135.710843 L0,0 Z M246.746988,0 L172.722892,0 L172.722892,43.1807229 L203.566265,43.1807229 L203.566265,135.710843 L246.746988,135.710843 L246.746988,43.1807229 L277.590361,43.1807229 L277.590361,0 L246.746988,0 Z M363.951807,0 L289.927711,0 L289.927711,43.1807229 L320.771084,43.1807229 L320.771084,135.710843 L363.951807,135.710843 L363.951807,43.1807229 L394.795181,43.1807229 L394.795181,0 L363.951807,0 Z M481.156627,0 L407.13253,0 L407.13253,43.1807229 L437.975904,43.1807229 L437.975904,135.710843 L481.156627,135.710843 L481.156627,43.1807229 L512,43.1807229 L512,0 L481.156627,0 Z M160.385542,43.1807229 L160.385542,0 L61.686747,0 L61.686747,135.710843 L104.86747,135.710843 L104.86747,98.6987952 L141.879518,98.6987952 L141.879518,55.5180723 L104.86747,55.5180723 L104.86747,43.1807229 L160.385542,43.1807229 Z" fill={fill} fill-rule="nonzero"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="191.156" height="23" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="18"
        height="23"
        viewBox="0 0 18 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <path d="M17.5907 20.2954H0V23H17.5907V20.2954Z" fill={fill} />
        <path
          d="M0 7.96484V18.9537L5.38796 15.1843V11.7343L0 7.96484Z"
          fill={fill}
        />
        <path
          d="M17.5689 10.9463V0L12.1597 3.74815V7.13426L17.5689 10.9463Z"
          fill={fill}
        />
        <path
          d="M17.5907 18.975L17.5694 12.288L0 0V6.62315L17.5907 18.975Z"
          fill={fill}
        />
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
