import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
    <path
      d="M24 10.663A5.817 5.817 0 0 0 22.228 6.5a5.711 5.711 0 0 0-3.447-1.585.249.249 0 0 1-.191-.12 7.684 7.684 0 0 0-14.1 2.294.251.251 0 0 1-.227.2A4.59 4.59 0 0 0 0 11.859a4.324 4.324 0 0 0 1.236 3.21 5.529 5.529 0 0 0 3.605 1.377 1 1 0 0 0 .985-1.015 1.023 1.023 0 0 0-1.015-.985 3.3 3.3 0 0 1-2.172-.8A2.374 2.374 0 0 1 2 11.859a2.576 2.576 0 0 1 .954-2.007 2.6 2.6 0 0 1 2.167-.527 1 1 0 0 0 1.2-.919 5.686 5.686 0 0 1 10.82-2.088.959.959 0 0 0 .941.57 3.687 3.687 0 0 1 2.758 1.049A3.752 3.752 0 0 1 22 10.663a3.835 3.835 0 0 1-3.438 3.791 1 1 0 0 0 .132 1.992.961.961 0 0 0 .131-.009A5.807 5.807 0 0 0 24 10.663Z"
      fill="currentColor"
    />
    <path
      d="M15.5 17.446h-1.75a.25.25 0 0 1-.25-.25v-7.25a1.5 1.5 0 1 0-3 0V17.2a.25.25 0 0 1-.25.25H8.5a1 1 0 0 0-.707 1.707l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0-.707-1.707Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCloudDownload;
