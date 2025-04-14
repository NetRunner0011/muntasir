
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import useCircuitStore from '@/store/useCircuitStore';
import { Rotate3D } from 'lucide-react';

const getNodeUI = (type, data, rotation = 0) => {
  const style = { transform: `rotate(${rotation}deg)` };
  
  switch (type) {
    case 'resistor':
      return (
        <div 
          className="w-20 h-10 flex items-center justify-center border-2 border-gray-700 rounded-md bg-white" 
          style={style}
        >
          <div className="text-xs font-mono">
            {data.label} {data.value}{data.unit}
          </div>
        </div>
      );
    
    case 'capacitor':
      return (
        <div className="w-16 h-10 flex items-center justify-center" style={style}>
          <div className="flex items-center">
            <div className="w-1 h-8 bg-gray-700 mr-2"></div>
            <div className="w-1 h-8 bg-gray-700"></div>
          </div>
          <div className="text-xs font-mono absolute top-10">
            {data.label} {data.value}{data.unit}
          </div>
        </div>
      );
    
    case 'dc-source':
      return (
        <div className="w-16 h-16 relative" style={style}>
          <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center">
            <div className="absolute left-2 text-lg font-bold">−</div>
            <div className="absolute right-2 text-lg font-bold">+</div>
          </div>
          <div className="text-xs font-mono absolute top-16 w-full text-center">
            {data.label} {data.value}{data.unit}
          </div>
        </div>
      );
    
    case 'ac-source':
      return (
        <div className="w-16 h-16 relative" style={style}>
          <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12 H6 Q9 3, 12 12 T18 12 H22" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          <div className="text-xs font-mono absolute top-16 w-full text-center">
            {data.label} {data.value}{data.unit}
          </div>
        </div>
      );
    
    case 'current-source':
      return (
        <div className="w-16 h-16 relative" style={style}>
          <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6 L12 3 M12 21 L12 18" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 10 L15 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="text-xs font-mono absolute top-16 w-full text-center">
            {data.label} {data.value}{data.unit}
          </div>
        </div>
      );
    
    default:
      return (
        <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
          Unknown
        </div>
      );
  }
};

const CustomNode = ({ id, type, data }) => {
  const isSimulating = useCircuitStore((state) => state.isSimulating);
  const rotateComponent = useCircuitStore((state) => state.rotateComponent);
  const selected = useCircuitStore((state) => state.selectedElement === id);
  
  const handleRotate = (e) => {
    e.stopPropagation();
    rotateComponent(id);
  };
  
  return (
    <div 
      className={`relative ${selected ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}
    >
      {selected && (
        <button 
          onClick={handleRotate}
          className="absolute -top-2 -right-2 z-10 w-6 h-6 bg-white rounded-full shadow-md 
            flex items-center justify-center hover:bg-gray-100"
        >
          <Rotate3D size={14} />
        </button>
      )}
      
      {getNodeUI(type, data, data.rotation)}
      
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="w-2 h-2 bg-gray-700"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="w-2 h-2 bg-gray-700"
      />
      
      {isSimulating && (
        <div className="absolute -bottom-8 left-0 right-0 text-xs font-mono bg-gray-100 
          p-1 rounded border text-center whitespace-nowrap">
          {data.voltage !== undefined && `${data.voltage.toFixed(2)}V `}
          {data.current !== undefined && `${data.current.toFixed(2)}A `}
          {data.power !== undefined && `${data.power.toFixed(2)}W`}
        </div>
      )}
    </div>
  );
};

export default memo(CustomNode);
