## Cuboid Specific Algorithms

&nbsp;

In previous dev log I have mentioned that there have been performance slowdowns for cuboid meshes. Since we expect cuboids to be the most common collision mesh used in Basilisk Engine, I have implemented a separate pipeline for cuboid collisions. 

&nbsp;

For narrow collision check, I have implemented separating axis theorem (SAT) which should return the peneration depth and direction faster than GJK/EPA. I will run performance tests comparing the two algorithms once I add GJK/EPA from previous versions of Basilisk Engine. SAT will also be used for determining whether the OBBs of two complex models intersect, which may reduce the number of times Basilisk will need to run a complex GJK/EPA. 

&nbsp;

Lastly, I added a built-in cube mesh to Basilisk Engine that has special functions for accessing data from its narrow BVH. This is especially effective for getting the vertex with the highest dot product with a given vector, resulting in a 5 times increase in performance. 