// import React from 'react'
// import { ReactFlow } from '@xyflow/react';
// import {

//     MiniMap,
//     Controls,
//     Background,
//     useNodesState,
//     useEdgesState,
//     addEdge,
// } from '@xyflow/react';
// import '@xyflow/react/dist/style.css';
// import TurboNode from './TurboNode';
// const nodeTypes = {
//     turbo: TurboNode
// }
// function RoadmapCanvas({ initialNodes, initialEdges }) {
//     /* const initialNodes = [
//          { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//          { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
//      ];
//      const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];*/
//     return (
//         <div>
//             <div style={{ width: '100vw', height: '100vh' }}>
//                 <ReactFlow nodes={initialNodes} edges={initialEdges}
//                     nodeTypes={nodeTypes} >
//                     <Controls />
//                     <MiniMap />
//                     {/*@ts-ignore*/}
//                     <Background variant="dots" gap={12} size={1} />
//                 </ReactFlow>
//             </div>
//         </div>
//     )
// }

// export default RoadmapCanvas

// import React from 'react'
// import { ReactFlow } from '@xyflow/react';
// import {

//     MiniMap,
//     Controls,
//     Background,
//     useNodesState,
//     useEdgesState,
//     addEdge,
// } from '@xyflow/react';
// import '@xyflow/react/dist/style.css';
// import TurboNode from './TurboNode';
// const nodeTypes = {
//     turbo: TurboNode
// }
// function RoadmapCanvas({ initialNodes, initialEdges }) {
//     /* const initialNodes = [
//          { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//          { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
//      ];
//      const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];*/
//     return (
//         <div>
//             <div style={{ width: '100vw', height: '100vh' }}>
//                 <ReactFlow nodes={initialNodes} edges={initialEdges}
//                     nodeTypes={nodeTypes} >
//                     <Controls />
//                     <MiniMap />
//                     {/@ts-ignore  */}

//                     <Background variant="dots" gap={12} size={1} />
//                 </ReactFlow>
//             </div>
//         </div>
//     )
// }

// export default RoadmapCanvas

import React from 'react'
import { ReactFlow } from '@xyflow/react';
import {

    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TurboNode from './TurboNode';
const nodeTypes = {
    turbo: TurboNode
}
function RoadmapCanvas({ initialNodes, initialEdges }) {
    /* const initialNodes = [
         { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
         { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
     ];
     const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];*/
    return (
        <div>
            <div style={{ width: '100vw', height: '100vh' }}>
                <ReactFlow nodes={initialNodes} edges={initialEdges}
                    nodeTypes={nodeTypes} >
                    <Controls />
                    <MiniMap />
                    {/**@ts-ignore  */}
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
            </div>
        </div>
    )
}

export default RoadmapCanvas