
import { create } from 'zustand';
import { CircuitComponent, CircuitConnection, CircuitNode } from '@/types/circuit';

interface CircuitState {
  nodes: CircuitNode[];
  components: CircuitComponent[];
  connections: CircuitConnection[];
  selectedElement: string | null;
  isSimulating: boolean;
  
  // Actions
  addNode: (node: CircuitNode) => void;
  addComponent: (component: CircuitComponent) => void;
  addConnection: (connection: CircuitConnection) => void;
  removeElement: (id: string) => void;
  updateComponent: (id: string, data: Partial<CircuitComponent['data']>) => void;
  setSelectedElement: (id: string | null) => void;
  rotateComponent: (id: string) => void;
  toggleSimulation: () => void;
  clearCircuit: () => void;
  runSimulation: () => void;
}

const useCircuitStore = create<CircuitState>((set, get) => ({
  nodes: [],
  components: [],
  connections: [],
  selectedElement: null,
  isSimulating: false,
  
  addNode: (node) => set((state) => ({
    nodes: [...state.nodes, node]
  })),
  
  addComponent: (component) => set((state) => ({
    components: [...state.components, component]
  })),
  
  addConnection: (connection) => set((state) => ({
    connections: [...state.connections, connection]
  })),
  
  removeElement: (id) => set((state) => ({
    nodes: state.nodes.filter(node => node.id !== id),
    components: state.components.filter(component => component.id !== id),
    connections: state.connections.filter(conn => 
      conn.id !== id && conn.source !== id && conn.target !== id
    ),
  })),
  
  updateComponent: (id, data) => set((state) => ({
    components: state.components.map(component => 
      component.id === id 
        ? { ...component, data: { ...component.data, ...data } }
        : component
    )
  })),
  
  setSelectedElement: (id) => set({ selectedElement: id }),
  
  rotateComponent: (id) => set((state) => ({
    components: state.components.map(component => {
      if (component.id === id) {
        const rotation = (component.rotation || 0) + 90;
        return {
          ...component,
          rotation: rotation >= 360 ? 0 : rotation
        };
      }
      return component;
    })
  })),
  
  toggleSimulation: () => set((state) => ({ 
    isSimulating: !state.isSimulating
  })),
  
  clearCircuit: () => set({
    nodes: [],
    components: [],
    connections: [],
    selectedElement: null,
    isSimulating: false
  }),
  
  runSimulation: () => {
    // Simplified simulation logic
    // In a real implementation, this would be replaced with proper circuit analysis
    const { components, connections } = get();
    
    // Set some example values
    set((state) => ({
      components: state.components.map(component => {
        let voltage = 0;
        let current = 0;
        
        if (component.type === 'dc-source') {
          voltage = component.data.value;
          current = 0.1; // Example current
        } 
        else if (component.type === 'resistor') {
          voltage = 5; // Example voltage
          current = 5 / component.data.value; // V/R = I
        }
        
        return {
          ...component,
          data: {
            ...component.data,
            voltage,
            current,
            power: voltage * current
          }
        };
      })
    }));
  }
}));

export default useCircuitStore;
