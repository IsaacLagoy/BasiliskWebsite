# Making Your First Scene

```python
import basilisk as bsk

engine = bsk.Engine()
scene = bsk.Scene()

while engine.running:
    engine.update()
    scene.update()
```