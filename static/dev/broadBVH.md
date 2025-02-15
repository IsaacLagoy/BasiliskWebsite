## Broad Bounding Volume Hierarchy

&nbsp;

This BVH will be used to determine which objects in a scene may be colliding with each other. It uses OBBs surruonding meshes to generate larger AABBs which will then be used to create the AABB hierarchy in the BVH. This sacrifices some accuracy for a much quicker build time for complex models. 

&nbsp;

![BroadBVH](../src/lib/images/devlogs/broad_bvh/bvh.png)

&nbsp;

Unlike the BVH from previous versions of Basilisk Engine, this BVH will not need to be recreated every collision tick. This BVH is designed to only modify its internal tree when colliders move, preserving the branches of the tree containing static colliders. 

&nbsp;

Tree rotations are also preformed during its construction to improve the quality of the tree. These rotations should help reduce the amount of AABBs containing a single collider, increasing the number of colliders pruned while traversing the tree. 