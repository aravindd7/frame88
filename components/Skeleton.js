
import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const Skeleton = () => {
    return (
      <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="column" alignItems="flex-start">
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={220} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={20}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item marginTop={10}>
      <SkeletonPlaceholder.Item width={200} height={20} borderRadius={4} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item marginTop={10}>
      <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
      <SkeletonPlaceholder.Item marginTop={10}>
      <SkeletonPlaceholder.Item width={140} height={20} borderRadius={4} />
      </SkeletonPlaceholder.Item>
     <SkeletonPlaceholder.Item marginTop={10}>
     <SkeletonPlaceholder.Item marginLeft={20}>
      <SkeletonPlaceholder.Item width={140} height={20} borderRadius={4} />
      </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>

      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
    );
};

export default Skeleton;