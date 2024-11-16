// No import statement needed

// Create a scene
const scene = new THREE.Scene();

// Set up a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.9, 1000);
camera.position.z = 1.8;
camera.position.y = 1.2; 
camera.lookAt(0, 0, 0);

// Set up a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a sphere for the Earth
const geometry = new THREE.SphereGeometry(1, 32, 32);
const texture = new THREE.TextureLoader().load('earth_texture.jpg'); // Adjust path as needed
const material = new THREE.MeshBasicMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.01; // Rotate the Earth
    renderer.render(scene, camera);
}
animate();
