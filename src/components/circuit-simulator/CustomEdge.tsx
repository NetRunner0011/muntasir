
import React, { memo } from 'react';
import { BaseEdge, getStraightPath } from '@xyflow/react';
import useCircuitStore from '@/store/useCircuitStore';

const CustomEdge = ({ id, source, target, sourceX, sourceY, targetX, targetY }) => {
  const removeElement = useCircuitStore((state) => state.removeElement);
  const isSimulating = useCircuitStore((state) => state.isSimulating);
  
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const handleRemove = (e) => {
    e.stopPropagation();
    removeElement(id);
  };

  return (
    <>
      <BaseEdge path={edgePath} />
      
      {!isSimulating && (
        <g
          className="cursor-pointer"
          transform={`translate(${labelX - 10},${labelY - 10})`}
          onClick={handleRemove}
        >
          <circle r={8} fill="#f0f0f0" stroke="#999" />
          <text
            fontSize={12}
            fontWeight={700}
            textAnchor="middle"
            alignmentBaseline="middle"
            x={0}
            y={1}
            fill="#777"
          >
            ×
          </text>
        </g>
      )}
      
      {isSimulating && (
        <g>
          <circle
            cx={labelX}
            cy={labelY}
            r={3}
            fill="#3498db"
            className="animate-pulse"
          />
        </g>
      )}
    </>
  );
};

export default memo(CustomEdge);
