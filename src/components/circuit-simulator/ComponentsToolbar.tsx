
import React from 'react';
import { Panel } from '@xyflow/react';
import { 
  Battery, 
  Waves, 
  Zap, 
  Ruler, 
  PanelLeftClose, 
  PanelLeftOpen 
} from 'lucide-react';
import { useState } from 'react';

const ComponentsToolbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const components = [
    { type: 'dc-source', icon: <Battery />, label: 'DC Source' },
    { type: 'ac-source', icon: <Waves />, label: 'AC Source' },
    { type: 'current-source', icon: <Zap />, label: 'Current Source' },
    { type: 'resistor', icon: <Ruler className="rotate-90" />, label: 'Resistor' },
    { type: 'capacitor', icon: <div className="text-center text-xl">||</div>, label: 'Capacitor' },
  ];

  return (
    <Panel position="top-left" className="bg-white rounded shadow-md">
      <div className="flex">
        <div 
          className={`${collapsed ? 'w-12' : 'w-48'} transition-all duration-300 ease-in-out`}
        >
          <div className="flex justify-between p-2 border-b">
            <h3 className={`font-medium ${collapsed ? 'hidden' : 'block'}`}>Components</h3>
            <button 
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => setCollapsed(c => !c)}
            >
              {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
            </button>
          </div>

          <div className={`p-2 ${collapsed ? 'items-center' : ''} flex flex-col gap-2`}>
            {components.map((component) => (
              <div
                key={component.type}
                className={`
                  flex ${collapsed ? 'justify-center' : 'justify-between'} 
                  items-center p-2 border rounded cursor-grab 
                  hover:bg-gray-50 transition-colors
                `}
                onDragStart={(event) => onDragStart(event, component.type)}
                draggable
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {component.icon}
                </div>
                {!collapsed && <span className="text-sm">{component.label}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default ComponentsToolbar;
