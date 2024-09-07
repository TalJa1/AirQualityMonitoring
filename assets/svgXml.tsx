/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
import React from 'react';
import {SvgXml} from 'react-native-svg';

export const test = (w?: any, h?: any, color?: any) => {
  const xml = ``;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const headerRightIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6H14M6 10H14M10 14H14M1.5 10C1.5 3.5 3.5 1.5 10 1.5C16.5 1.5 18.5 3.5 18.5 10C18.5 16.5 16.5 18.5 10 18.5C3.5 18.5 1.5 16.5 1.5 10Z" stroke=${
    color ?? '#6E778B'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const backIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 9L9 17" stroke=${
    color ?? '#6E778B'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const mapIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 3L3.63246 1.87749C2.33739 1.4458 1 2.40974 1 3.77485V15.5585C1 16.4193 1.55086 17.1836 2.36754 17.4558L7 19M7 3L13 1M7 3V19M13 1L17.6325 2.54415C18.4491 2.81638 19 3.58066 19 4.44152V16.2251C19 17.5903 17.6626 18.5542 16.3675 18.1225L13 17M13 1V17M13 17L7 19" stroke=${
    color ?? '#6E778B'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const homeIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50008 5.00003C5.96143 3.53868 7.59363 2.41902 8.69761 1.74091C9.50222 1.24668 10.498 1.24668 11.3026 1.74091C12.4065 2.41902 14.0387 3.53868 15.5001 5.00003C18.6685 8.16841 18.5001 10 18.5001 13C18.5001 14.4099 18.3897 15.5988 18.2726 16.4632C18.1494 17.3726 17.3563 18 16.4385 18H15.0001C13.8955 18 13.0001 17.1046 13.0001 16V14C13.0001 13.2044 12.684 12.4413 12.1214 11.8787C11.5588 11.3161 10.7957 11 10.0001 11C9.20444 11 8.44138 11.3161 7.87877 11.8787C7.31616 12.4413 7.00009 13.2044 7.00009 14V16C7.00009 17.1046 6.10466 18 5.00009 18H3.56164C2.64391 18 1.85074 17.3726 1.72757 16.4632C1.61051 15.5988 1.50009 14.4098 1.50009 13C1.50009 10 1.33169 8.16842 4.50008 5.00003Z" stroke=${
    color ?? '#3E3792'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const rankIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6H14M6 10H14M8 14H12M1.5 10C1.5 3.5 3.5 1.5 10 1.5C16.5 1.5 18.5 3.5 18.5 10C18.5 16.5 16.5 18.5 10 18.5C3.5 18.5 1.5 16.5 1.5 10Z" stroke=${
    color ?? '#6E778B'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const locationIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.81586 18.6077C13.8509 16.5502 17 13.1429 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.1429 4.14909 16.5502 8.18414 18.6077C8.69679 18.8691 9.30321 18.8691 9.81586 18.6077Z" stroke="#6E778B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z" stroke=${
    color ?? '#6E778B'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const arrowBackIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 9L9 17" stroke=${
    color ?? '#3E3792'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const arrowNextIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 17L9 9L1 0.999999" stroke=${
    color ?? '#3E3792'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const appleIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2806 18.424C18.9327 19.2275 18.521 19.9672 18.044 20.6472C17.3938 21.5743 16.8614 22.216 16.4511 22.5724C15.815 23.1573 15.1336 23.4568 14.4039 23.4739C13.88 23.4739 13.2482 23.3248 12.5128 23.0224C11.775 22.7214 11.0969 22.5724 10.4769 22.5724C9.82671 22.5724 9.12935 22.7214 8.38343 23.0224C7.63638 23.3248 7.03456 23.4824 6.57444 23.498C5.87466 23.5278 5.17716 23.2197 4.48093 22.5724C4.03656 22.1848 3.48075 21.5204 2.8149 20.5791C2.10051 19.5739 1.51317 18.4084 1.05304 17.0795C0.560262 15.6442 0.313232 14.2543 0.313232 12.9087C0.313232 11.3673 0.646296 10.0379 1.31342 8.92385C1.83772 8.029 2.53522 7.32312 3.4082 6.80493C4.28118 6.28674 5.22443 6.02267 6.24024 6.00578C6.79605 6.00578 7.52493 6.1777 8.43071 6.51559C9.33393 6.85462 9.91388 7.02655 10.1681 7.02655C10.3582 7.02655 11.0025 6.82552 12.0947 6.42473C13.1275 6.05305 13.9992 5.89916 14.7133 5.95978C16.6484 6.11595 18.1022 6.87876 19.069 8.25303C17.3384 9.30163 16.4823 10.7703 16.4993 12.6544C16.515 14.122 17.0474 15.3432 18.0937 16.3129C18.5679 16.7629 19.0974 17.1107 19.6866 17.3578C19.5588 17.7283 19.4239 18.0832 19.2806 18.424ZM14.8425 0.960131C14.8425 2.11039 14.4223 3.18439 13.5847 4.17847C12.5738 5.36023 11.3512 6.04311 10.0253 5.93536C10.0084 5.79736 9.99864 5.65213 9.99864 5.49951C9.99864 4.39526 10.4793 3.21349 11.333 2.24724C11.7592 1.75801 12.3013 1.35122 12.9586 1.02671C13.6145 0.707053 14.2349 0.530273 14.8184 0.5C14.8354 0.653772 14.8425 0.807554 14.8425 0.960116V0.960131Z" fill="white"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};

export const googleIcon = (w?: any, h?: any, color?: any) => {
  const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill=${color ?? 'white'}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90909H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2614Z" fill="#4285F4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.4998C15.105 23.4998 17.7081 22.4701 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.926 12 18.926C9.00474 18.926 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z" fill="#34A853"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z" fill="#FBBC05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z" fill="#EA4335"/>
</svg>
`;

  return <SvgXml xml={xml} width={w} height={h} />;
};
