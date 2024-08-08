import React, { ReactNode } from 'react';
import { Card } from "flowbite-react";

interface CanvasProps {
  children: ReactNode; // Mendefinisikan tipe children
}

const Canvas: React.FC<CanvasProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card href="#" className="w-full max-w-full max-h-full m-12 rounded-lg">
        <div className="p-6">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            To Do List APP 
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            By Syntax Society, 2024
          </p>
          {children} {/* Render children di sini */}
        </div>
      </Card>
    </div>
  );
}

export default Canvas;
