
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import useCircuitStore from '@/store/useCircuitStore';

const ComponentProperties = () => {
  const {
    components,
    selectedElement,
    setSelectedElement,
    updateComponent,
    removeElement
  } = useCircuitStore();
  
  const [properties, setProperties] = useState({ value: 0, label: '', unit: '' });
  
  const selectedComponent = components.find(component => component.id === selectedElement);
  
  useEffect(() => {
    if (selectedComponent) {
      setProperties(selectedComponent.data);
    }
  }, [selectedComponent]);
  
  if (!selectedComponent) return null;
  
  const handleClose = () => {
    setSelectedElement(null);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    const newValue = name === 'value' ? parseFloat(value) : value;
    setProperties(prev => ({ ...prev, [name]: newValue }));
    
    // Update component in store
    updateComponent(selectedElement, { [name]: newValue });
  };
  
  const handleDelete = () => {
    removeElement(selectedElement);
    setSelectedElement(null);
  };
  
  const getUnitOptions = (componentType) => {
    switch (componentType) {
      case 'resistor':
        return ['Ω', 'kΩ', 'MΩ'];
      case 'capacitor':
        return ['pF', 'nF', 'μF', 'mF', 'F'];
      case 'dc-source':
      case 'ac-source':
        return ['V', 'kV', 'mV'];
      case 'current-source':
        return ['A', 'mA', 'μA'];
      default:
        return [''];
    }
  };
  
  const componentTypeLabels = {
    'resistor': 'Resistor',
    'capacitor': 'Capacitor',
    'dc-source': 'DC Voltage Source',
    'ac-source': 'AC Voltage Source',
    'current-source': 'Current Source'
  };
  
  return (
    <div className="fixed bottom-4 right-4 w-72 bg-white p-4 rounded-lg shadow-lg border z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">
          {componentTypeLabels[selectedComponent.type]}
        </h3>
        <button 
          onClick={handleClose}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={18} />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
          <input
            type="text"
            name="label"
            value={properties.label}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
          <div className="flex gap-2">
            <input
              type="number"
              name="value"
              value={properties.value}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            <select
              name="unit"
              value={properties.unit}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md bg-white"
            >
              {getUnitOptions(selectedComponent.type).map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="pt-2">
          <button
            onClick={handleDelete}
            className="w-full px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete Component
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentProperties;
