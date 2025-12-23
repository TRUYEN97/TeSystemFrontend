import React from 'react';
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';

import useGetLocations from '../../hooks/api/locations/use-get-locations';
import Loading from '../../components/ui/effect/Loading';
import { buildTree, mapToTreeData } from '../../utils/location';

const LocationsPage = () => {
  const {data: locations, isLoading} = useGetLocations();

  const hierarchy = buildTree(locations?.data.data);
  const treeData: TreeDataNode[] = mapToTreeData(hierarchy);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  if (isLoading) return <Loading />

  return (
    <div>
      <Tree
        showLine
        showIcon
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
}

export default LocationsPage;