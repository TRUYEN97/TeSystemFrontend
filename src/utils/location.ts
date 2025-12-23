import type { TreeDataNode } from 'antd';

import type { LocationType } from '../types/locations';

export const buildTree = (data?: LocationType[]): LocationType[] => {
  const map = new Map<number, any>();
  const roots: any[] = [];


  data?.forEach(item => {
    map.set(item.id, { ...item, children: [] });
  });

  data?.forEach(item => {
    if (item.parentId === null) {
      roots.push(map.get(item.id));
    } else {
      const parent = map.get(item.parentId);
      parent?.children.push(map.get(item.id));
    }
  });

  return roots;
}

export const mapToTreeData = (
  nodes: any[],
  parentKey = '0'
): TreeDataNode[] => {
  return nodes?.map((node, index) => {
    const key = `${parentKey}-${index}`;

    return {
      title: node.name,
      key,
      // icon: node.parentId === null ? <MdFactory /> : <CarryOutOutlined />,
      children: node.children?.length
        ? mapToTreeData(node.children, key)
        : undefined,
    };
  });
}
