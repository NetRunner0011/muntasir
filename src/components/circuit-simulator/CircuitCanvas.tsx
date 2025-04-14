
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ReactFlow, Background, Controls, Panel, Connection } from '@xyflow/react';
import { toast } from 'sonner';
import useCircuitStore from '@/store/useCircuitStore';
import ComponentsToolbar from './ComponentsToolbar';
import CustomNode from './CustomNode';
import CustomEdge from './CustomEdge';
import ComponentProperties from './ComponentProperties';
import '@xyflow/react/dist/style.css';

const nodeTypes = {
  resistor: CustomNode,
  capacitor: CustomNode,
  'dc-source': CustomNode,
  'ac-source': CustomNode,
  'current-source': CustomNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const CircuitCanvas = () => {
  const {
    nodes,
    components,
    connections,
    selectedElement,
    isSimulating,
    addConnection,
    setSelectedElement,
    toggleSimulation,
    runSimulation,
    clearCircuit,
  } = useCircuitStore();
  
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const reactFlowWrapper = useRef(null);
  
  // Convert our custom data structure to ReactFlow nodes and edges
  const rfNodes = [...components].map((component) => ({
    id: component.id,
    type: component.type,
    position: component.position,
    data: { 
      ...component.data,
      id: component.id,
      type: component.type,
      rotation: component.rotation || 0,
      selected: selectedElement === component.id
    },
    sourcePosition: component.sourcePosition || 'right',
    targetPosition: component.targetPosition || 'left',
  }));
  
  const rfEdges = [...connections].map((connection) => ({
    id: connection.id,
    source: connection.source,
    target: connection.target,
    type: 'custom',
    data: { id: connection.id },
    sourceHandle: connection.sourceHandle,
    targetHandle: connection.targetHandle,
  }));
  
  const onConnect = useCallback(
    (params: Connection) => {
      const newEdge = {
        id: `e-${params.source}-${params.target}`,
        source: params.source,
        target: params.target,
        sourceHandle: params.sourceHandle,
        targetHandle: params.targetHandle,
      };
      addConnection(newEdge);
    },
    [addConnection]
  );
  
  const onNodeClick = useCallback(
    (_, node) => {
      setSelectedElement(node.id);
    },
    [setSelectedElement]
  );
  
  const handleSimulate = () => {
    toggleSimulation();
    if (!isSimulating) {
      runSimulation();
      toast.success('Simulation started');
    } else {
      toast.info('Simulation stopped');
    }
  };
  
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);
  
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      
      if (typeof type === 'undefined' || !type) {
        return;
      }
      
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      
      const id = `${type}-${Date.now()}`;
      let componentData = {
        value: 0,
        label: '',
        unit: '',
      };
      
      // Set default values based on component type
      switch (type) {
        case 'resistor':
          componentData = { value: 1000, label: 'R', unit: 'Ω' };
          break;
        case 'capacitor':
          componentData = { value: 10, label: 'C', unit: 'μF' };
          break;
        case 'dc-source':
          componentData = { value: 5, label: 'DC', unit: 'V' };
          break;
        case 'ac-source':
          componentData = { value: 120, label: 'AC', unit: 'V' };
          break;
        case 'current-source':
          componentData = { value: 0.1, label: 'I', unit: 'A' };
          break;
      }
      
      const newComponent = {
        id,
        type,
        position,
        data: componentData,
      };
      
      useCircuitStore.getState().addComponent(newComponent);
      setSelectedElement(id);
    },
    [reactFlowInstance, setSelectedElement]
  );
  
  return (
    <div className="h-[80vh] border rounded-lg overflow-hidden" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        onNodesChange={() => {}}
        onEdgesChange={() => {}}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onDragOver={onDragOver}
        onDrop={onDrop}
        fitView
      >
        <Background />
        <Controls />
        <ComponentsToolbar />
        
        <Panel position="top-right" className="bg-white p-2 rounded shadow-md">
          <div className="flex gap-2">
            <button
              className={`px-3 py-1 text-sm rounded ${
                isSimulating ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
              }`}
              onClick={handleSimulate}
            >
              {isSimulating ? 'Stop Simulation' : 'Run Simulation'}
            </button>
            <button
              className="px-3 py-1 text-sm rounded bg-gray-200"
              onClick={clearCircuit}
            >
              Clear All
            </button>
          </div>
        </Panel>
      </ReactFlow>
      
      {selectedElement && (
        <ComponentProperties />
      )}
    </div>
  );
};

export default CircuitCanvas;
