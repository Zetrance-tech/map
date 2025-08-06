interface BackgroundDisplayProps {
  backgroundImage: string;
  isTransitioning: boolean;
}

export const BackgroundDisplay = ({ backgroundImage, isTransitioning }: BackgroundDisplayProps) => {
  return (
    <div className="ml-80 h-full w-[calc(100%-20rem)] fixed right-0 top-0 z-0">
      <img
        src={backgroundImage}
        alt="Main display"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};