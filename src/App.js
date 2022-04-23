import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import "./index.css";

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 100, 0.1, 1000)

function Mainplace () {


const renderer = new THREE.WebGLRenderer()
renderer.setSize(10, 10)
document.querySelector('#canvas-container').appendChild(renderer.domElement)

const mesh = new THREE.Mesh()
mesh.geometry = new THREE.BoxGeometry()
mesh.material = new THREE.MeshStandardMaterial()
scene.add(mesh)

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
return (
  animate()
);
};




function App() {
  return (
    <div id="canvas-container">
      {/* <Canvas >
      <Mainplace/>
        </Canvas> */}
        
    </div>
  )
}

export default App;