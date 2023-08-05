import { Select } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformFilter = () => {
  const { data: platforms } = usePlatforms();
  return (
    <Select placeholder="Select option">
      {platforms.map((platform) => (
        <option key={platform.id} value={platform.slug}>
          {platform.name}
        </option>
      ))}
    </Select>
  );
};

export default PlatformFilter;
