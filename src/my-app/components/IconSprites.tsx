'use client';

export default function IconSprites() {
  const viewBox = "0 0 24 24";

  return (
    <svg width="0" height="0" className="hidden" aria-hidden="true">
      <symbol id="arrow-down" viewBox={viewBox}>
        <g fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
          <line x1="12" y1="4" x2="12" y2="20" />
          <polyline points="4 12,12 20,20 12" />
        </g>
      </symbol>
      <symbol id="arrow-up-right" viewBox={viewBox}>
        <g fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
          <polyline points="6 6,18 6,18 18" />
          <polyline points="6 18,18 6" />
        </g>
      </symbol>
      <symbol id="arrow-down-right" viewBox={viewBox}>
        <g fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
          <polyline points="6 18,18 18,18 6" />
          <polyline points="6 6,18 18" />
        </g>
      </symbol>
      <symbol id="calendar" viewBox={viewBox}>
        <path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" />
      </symbol>
      <symbol id="checkmark" viewBox={viewBox}>
        <polyline fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" points="3 12,8 18,21 6" />
      </symbol>
      <symbol id="close" viewBox={viewBox}>
        <g stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
          <polyline points="7 7,17 17" />
          <polyline points="17 7,7 17" />
        </g>
      </symbol>
      <symbol id="crown" viewBox={viewBox}>
        <path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 8L6 20H18L20 8M4 8L5.71624 9.37299C6.83218 10.2657 7.39014 10.7121 7.95256 10.7814C8.4453 10.8421 8.94299 10.7173 9.34885 10.4314C9.81211 10.1051 10.0936 9.4483 10.6565 8.13476L12 5M4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8ZM20 8L18.2838 9.373C17.1678 10.2657 16.6099 10.7121 16.0474 10.7814C15.5547 10.8421 15.057 10.7173 14.6511 10.4314C14.1879 10.1051 13.9064 9.4483 13.3435 8.13476L12 5M20 8C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6C19.4477 6 19 6.44772 19 7C19 7.55228 19.4477 8 20 8ZM12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5ZM12 4H12.01M20 7H20.01M4 7H4.01" />
      </symbol>
      <symbol id="ellipsis" viewBox={viewBox}>
        <g fill="currentcolor">
          <circle cx="4" cy="12" r="3" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="20" cy="12" r="3" />
        </g>
      </symbol>
      <symbol id="microphone" viewBox={viewBox}>
        <path fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z" />
      </symbol>
      <symbol id="plus" viewBox={viewBox}>
        <g stroke="currentcolor" strokeLinecap="round" strokeWidth="3">
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </g>
      </symbol>
    </svg>
  );
}
