import React from 'react';

const BackgroundDecor = () => (
  <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
    {/* Blue - top center */}
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-500/30 rounded-full blur-3xl"></div>
    {/* Purple - upper right */}
    <div className="absolute -top-24 right-0 w-[32rem] h-[32rem] bg-purple-500/20 rounded-full blur-3xl"></div>
    {/* Green - bottom center */}
    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-green-400/20 rounded-full blur-3xl"></div>
    {/* Pink - bottom right */}
    <div className="absolute -bottom-20 right-0 w-[28rem] h-[28rem] bg-pink-400/20 rounded-full blur-3xl"></div>
  </div>
);

export default BackgroundDecor; 