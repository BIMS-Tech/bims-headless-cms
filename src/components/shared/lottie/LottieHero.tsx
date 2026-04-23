'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const LottieHero = () => {
  return (
    <div
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      className="[&_canvas]:!w-full [&_canvas]:!h-full [&_canvas]:!object-cover"
    >
      <DotLottieReact
        src="https://assets-v2.lottiefiles.com/a/7e40b936-1182-11ee-a92e-d3197f2f33d3/ySqMoE1E7L.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
};
