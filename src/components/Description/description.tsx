import { useMemo, useState } from "react";
import { Dimensions } from "react-native";
import DescriptionView from "./description-view";

type Props = {
  description: string;
  enableShowMore?: boolean;
  maxLines?: number;
  ratio?: number;
};

const Description = ({
  description,
  enableShowMore = true,
  maxLines = 2,
  ratio = 15
}: Props) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const numberOfLinesToShow = useMemo(() => {
    return (isDescriptionExpanded || !enableShowMore) ? undefined : maxLines;
  }, [isDescriptionExpanded]);

  const showMoreNeeded = useMemo(() => {
    const windowWidth = Dimensions.get('window').width;
    const maxLineChars = Math.floor(windowWidth / ratio);
    return description.length > maxLines * maxLineChars;
  }, [description, maxLines]);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  
  return (
    <DescriptionView 
      description={description}
      isDescriptionExpanded={isDescriptionExpanded}
      numberOfLinesToShow={numberOfLinesToShow}
      showMoreNeeded={showMoreNeeded}
      toggleDescription={toggleDescription}
    />
  );
};

export default Description;
