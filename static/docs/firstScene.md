# Making Your First Scene

Like any package, Basilisk Engine can be imported in many ways. We choose to import Basilisk Engine into our Python projects in the following way to keep our code concise and clean. 

```python
import basilisk as bsk
```

Every Basilisk Engine Project requires an <span class='keyword'>Engine</span> and at least one <span class='keyword'>Scene</span>. The <span class='keyword'>Engine</span> controls variables like the change in time, elements like the projects UI, materials and textures, and many more of Basilisk Engines core features. The <span class='keyword'>Scene</span> is the stage where objects exist and can be manipulated. 

&nbsp;

Below is an example of how to create an <span class='keyword'>Engine</span> and <span class='keyword'>Scene</span>. The <span class='keyword'>Engine</span> is passed into the <span class='keyword'>Scene</span> as an argument so that the <span class='keyword'>Scene</span> can automatically access data from the <span class='keyword'>Engine</span> like <span class='keyword'>delta_time</span>.

```python
engine = bsk.Engine()
scene = bsk.Scene(engine)
```

The frame-to-frame procedures of Basilisk Engine are controlled by the user. To update the <span class='keyword'>Engine</span> or <span class='keyword'>Scene</span> simply call their respective <span class='keyword'>update()</span> function. Basilisk Engine is designed with customizability in mind to give the user more control over their projects. 

```python
while engine.running:
    engine.update()
    scene.update()
```

By putting everything together, we get a simple script for starting your very own Basilsik Engine project! 

```python
import basilisk as bsk

engine = bsk.Engine()
scene = bsk.Scene()

while engine.running:
    engine.update()
    scene.update()
```