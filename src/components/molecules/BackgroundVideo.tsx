type BackgroundVideoProps = {
  src: string; // relative path to your local mp4 file
  className?: string;
};

const BackgroundVideo = ({ src, className = "" }: BackgroundVideoProps) => {
  return (
    <video
      className={`absolute inset-0 w-full h-full object-cover z-[-1] ${className}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default BackgroundVideo;
