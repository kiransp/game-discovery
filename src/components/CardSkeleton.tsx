import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function CardSkeleton() {
  return (
    <Card borderRadius={10} overflow={"hidden"} bg="#202020">
      <Skeleton height={300} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default CardSkeleton;
