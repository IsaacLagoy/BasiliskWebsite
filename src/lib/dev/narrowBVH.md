## Narrow Bounding Volume Hierarchy

&nbsp;

During hit scanning and collisions, we need to find the best fitting point or triangle on a mesh. Previously, we ran a brute force algorithm to check every feature on a mesh to find the best match. With the BVH, we can use O(logn) algorithms to find these features instead. 

&nbsp;

The narrow BVH uses a binary tree to recursively divide the mesh's triangles into AABBs. The BVH uses a surface area heuristic to improve the quality of divisions in the tree.

&nbsp;

| ![Layer2](../src/lib/images/devlogs/narrow_bvh/L2.png) | ![Layer9](../src/lib/images/devlogs/narrow_bvh/L9.png) |
| :----------------------------------------------------: | :----------------------------------------------------: |
| Layer 2                                                | Layer 9                                                |

&nbsp;

| Access   | Speed Increase Cube | Speed Increase Monkey |
| :------- | :-----------------: | :-------------------: |
| Vertex   | 69%                 | 1190%                 |
| Triangle | 78%                 | 2030%                 |

&nbsp;

From my testing, the speed increases from the BVH appear to increase exponentially however they may be inefficient for smaller shapes. To fix this issue, I plan on implimenting a separate method for accessing data from cuboids since it's the most common shape used in the engine. 

&nbsp;

While the BVH is in a decent state, there are still a few bugs left to sort out. There are issue with getting the best intersected triangle with models over 10,000 vertices. Also I believe that there are structural improvements that can be made to the BVH to improve performance. 