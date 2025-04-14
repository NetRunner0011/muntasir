
export type ComponentType = 
  | 'resistor'
  | 'capacitor'
  | 'dc-source'
  | 'ac-source'
  | 'current-source'
  | 'wire'
  | 'node';

export interface CircuitNode {
  id: string;
  type: 'node';
  position: { x: number; y: number };
  data: {
    voltage?: number;
  };
}

export interface CircuitComponent {
  id: string;
  type: ComponentType;
  position: { x: number; y: number };
  rotation?: number;
  data: {
    value: number;
    label?: string;
    unit?: string;
    voltage?: number;
    current?: number;
    power?: number;
  };
  sourcePosition?: 'top' | 'right' | 'bottom' | 'left';
  targetPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export interface CircuitConnection {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string;
  targetHandle?: string;
}

export type CircuitElement = CircuitNode | CircuitComponent | CircuitConnection;
