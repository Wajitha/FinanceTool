import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPiggyBank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M1.857 7.612H.98a.98.98 0 0 0-.98.98v2.224c0 .449.184.857.51 1.163.612.551 1.816 1.49 3.735 2.368a.571.571 0 0 1 .306.346l.939 3.286a.484.484 0 0 0 .469.347h1.47a.479.479 0 0 0 .469-.367l.47-1.817a.262.262 0 0 1 .326-.183c.571.122 1.183.163 1.795.163.613 0 1.225-.061 1.796-.163.143-.02.286.06.327.183l.47 1.817a.502.502 0 0 0 .468.367h1.47a.484.484 0 0 0 .47-.347l1.224-4.245a.487.487 0 0 1 .122-.224c.919-.98 1.53-2.163 1.735-3.47h.49c.53 0 .959-.448.938-.979-.02-.51-.47-.918-.98-.918h-.448C18.06 4.673 14.632 2 10.489 2c-1.775 0-3.428.49-4.755 1.326-.591-.408-1.469-.734-2.693-.632-.49.04-.715.612-.388.959.408.429.796 1 .877 1.735L1.857 7.612Zm3.122.98a.862.862 0 0 1-.857-.858c0-.469.388-.857.857-.857.47 0 .858.388.858.857 0 .47-.388.858-.858.858Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPiggyBank;
