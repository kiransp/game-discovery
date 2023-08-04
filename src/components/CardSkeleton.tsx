import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function CardSkeleton() {
  return (
    <Card>
      <Skeleton height={300} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default CardSkeleton;
