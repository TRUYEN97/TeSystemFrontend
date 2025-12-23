import React, { useState } from 'react';
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';

import useGetLocations from '../../hooks/api/locations/use-get-locations';
import Loading from '../../components/ui/effect/Loading';
import { buildTree, mapToTreeData } from '../../utils/location';
import useGetResourcesInLocation from '../../hooks/api/locations/use-get-resources-in-location';
import type { ComputerType } from '../../types/resources';

const LocationsPage = () => {
  const [locationId, setLocationId] = useState<string|number>();

  const { data: locations, isLoading: locationLoading } = useGetLocations();
  const {data: resourcesData} = useGetResourcesInLocation(locationId);

  const hierarchy = buildTree(locations?.data.data);
  const treeData: TreeDataNode[] = mapToTreeData(hierarchy);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys);

    setLocationId(selectedKeys[0] as number)
  };

  if (locationLoading) return <Loading />

  console.log(resourcesData?.data.data.resources)

  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2'>
      <div className='col-span-1'>
        <h5 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white/90">
          Locations
        </h5>
        <Tree
          showLine
          showIcon
          onSelect={onSelect}
          treeData={treeData}
          className='!text-[16px] '
        />
      </div>
      <div className='col-span-1'>
        <h5 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white/90">
          Resources
        </h5>
        <div className='bg-white'>
          {resourcesData?.data.data.resources?.Computer?.map((computer: ComputerType) => {
            return <div>
              id: {computer.id} - ip: {computer.ipAddress} -name: {computer.name}
            </div>
          } )}
        </div>
      </div>
    </div>
  );
}

export default LocationsPage;