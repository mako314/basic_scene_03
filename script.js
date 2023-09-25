//Scene
const scene = new THREE.Scene()

//Red Cube
const geometry = new THREE.BoxGeometry(1, 1 , 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})

//Mesh composed of geometry and material, must be provided in this order
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera provides POV
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height )
scene.add(camera)

camera.position.z = 3

//Renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)