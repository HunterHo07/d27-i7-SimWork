import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class ThreeScene {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.clock = new THREE.Clock();
    this.mixers = [];
    this.objects = {};
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.isInitialized = false;

    // Bind methods
    this.init = this.init.bind(this);
    this.animate = this.animate.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  init() {
    if (!this.container) return;

    // Get container dimensions
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    // Create camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(5, 5, 5);

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // Create controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 3;
    this.controls.maxDistance = 10;
    this.controls.maxPolarAngle = Math.PI / 2;

    // Add event listeners
    window.addEventListener('resize', this.handleResize);
    this.renderer.domElement.addEventListener('click', this.handleClick);

    // Set up scene
    this.setupLights();
    this.setupEnvironment();

    // Start animation loop
    this.isInitialized = true;
    this.animate();
  }

  setupLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    // Directional light (sun)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    this.scene.add(directionalLight);

    // Point lights for office stations
    const colors = [0x4f46e5, 0xec4899, 0x10b981, 0x3b82f6, 0x8b5cf6];
    const positions = [
      [-3, 1, -3], // Developer Bay
      [3, 1, -3],  // Design Lab
      [3, 1, 3],   // PM Hub
      [-3, 1, 3],  // Data Entry
      [0, 1, 0]    // AI Engineer
    ];

    positions.forEach((pos, i) => {
      const pointLight = new THREE.PointLight(colors[i], 0.5, 3);
      pointLight.position.set(...pos);
      this.scene.add(pointLight);

      // Add light indicator sphere
      const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: colors[i] });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(...pos);
      this.scene.add(sphere);
    });
  }

  setupEnvironment() {
    // Floor
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Grid helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x4f46e5, 0x334155);
    this.scene.add(gridHelper);

    // Office stations
    this.createOfficeStations();

    // Character
    this.createCharacter();
  }

  createOfficeStations() {
    const stationPositions = [
      { pos: [-3, 0.5, -3], color: 0x4f46e5, name: 'developer' }, // Developer Bay
      { pos: [3, 0.5, -3], color: 0xec4899, name: 'designer' },   // Design Lab
      { pos: [3, 0.5, 3], color: 0x3b82f6, name: 'pm' },          // PM Hub
      { pos: [-3, 0.5, 3], color: 0x10b981, name: 'data' },       // Data Entry
      { pos: [0, 0.5, 0], color: 0x8b5cf6, name: 'ai' }           // AI Engineer
    ];

    stationPositions.forEach(station => {
      // Desk
      const deskGeometry = new THREE.BoxGeometry(1.5, 0.1, 1);
      const deskMaterial = new THREE.MeshStandardMaterial({ color: 0x475569 });
      const desk = new THREE.Mesh(deskGeometry, deskMaterial);
      desk.position.set(...station.pos);
      desk.position.y = 0.5;
      desk.castShadow = true;
      desk.receiveShadow = true;
      this.scene.add(desk);

      // Computer
      const computerGeometry = new THREE.BoxGeometry(0.8, 0.5, 0.1);
      const computerMaterial = new THREE.MeshStandardMaterial({ color: 0x0f172a });
      const computer = new THREE.Mesh(computerGeometry, computerMaterial);
      computer.position.set(station.pos[0], station.pos[1] + 0.3, station.pos[2] - 0.3);
      computer.castShadow = true;
      computer.receiveShadow = true;
      this.scene.add(computer);

      // Screen
      const screenGeometry = new THREE.PlaneGeometry(0.75, 0.45);
      const screenMaterial = new THREE.MeshBasicMaterial({ color: station.color, opacity: 0.8, transparent: true });
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.set(station.pos[0], station.pos[1] + 0.3, station.pos[2] - 0.29);
      this.scene.add(screen);

      // Chair
      const chairGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16);
      const chairMaterial = new THREE.MeshStandardMaterial({ color: 0x334155 });
      const chair = new THREE.Mesh(chairGeometry, chairMaterial);
      chair.position.set(station.pos[0], station.pos[1] - 0.2, station.pos[2] + 0.7);
      chair.castShadow = true;
      chair.receiveShadow = true;
      this.scene.add(chair);

      // Store reference to interactive objects
      this.objects[station.name] = {
        desk,
        computer,
        screen,
        chair,
        position: new THREE.Vector3(...station.pos)
      };
    });
  }

  createCharacter() {
    // Simple character representation
    const characterGeometry = new THREE.CapsuleGeometry(0.2, 0.5, 4, 8);
    const characterMaterial = new THREE.MeshStandardMaterial({ color: 0x6366f1 });
    const character = new THREE.Mesh(characterGeometry, characterMaterial);
    character.position.set(0, 0.6, -2);
    character.castShadow = true;
    character.receiveShadow = true;
    this.scene.add(character);

    // Store reference to character
    this.objects.character = character;
  }

  moveCharacterTo(position) {
    if (!this.objects.character) return;

    // Create a simple animation to move the character
    const startPosition = this.objects.character.position.clone();
    const targetPosition = position.clone();
    targetPosition.y = 0.6; // Keep character at proper height

    const duration = 1.0;
    const startTime = this.clock.getElapsedTime();

    const animate = () => {
      const currentTime = this.clock.getElapsedTime();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easing function for smoother movement
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      // Interpolate position
      this.objects.character.position.lerpVectors(startPosition, targetPosition, easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }

  handleResize() {
    if (!this.container || !this.camera || !this.renderer) return;

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  handleClick(event) {
    if (!this.container || !this.camera || !this.scene) return;

    // Calculate mouse position in normalized device coordinates
    const rect = this.container.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / this.container.clientWidth) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / this.container.clientHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    if (intersects.length > 0) {
      // Check if we clicked on the floor
      const floorIntersect = intersects.find(intersect =>
        intersect.object.geometry instanceof THREE.PlaneGeometry
      );

      if (floorIntersect) {
        this.moveCharacterTo(floorIntersect.point);
      }

      // Check if we clicked on a station
      for (const stationName in this.objects) {
        if (stationName === 'character') continue;

        const station = this.objects[stationName];
        const stationIntersect = intersects.find(intersect =>
          intersect.object === station.desk ||
          intersect.object === station.computer ||
          intersect.object === station.screen ||
          intersect.object === station.chair
        );

        if (stationIntersect) {
          // Move character to the station
          this.moveCharacterTo(station.position);

          // Trigger station interaction
          if (this.onStationInteract) {
            this.onStationInteract(stationName);
          }

          break;
        }
      }
    }
  }

  animate() {
    if (!this.isInitialized) return;

    this.animationFrameId = requestAnimationFrame(this.animate);

    // Update controls
    if (this.controls) {
      this.controls.update();
    }

    // Update animations
    const delta = this.clock.getDelta();
    this.mixers.forEach(mixer => mixer.update(delta));

    // Render scene
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  cleanup() {
    if (this.renderer && this.renderer.domElement) {
      this.renderer.domElement.removeEventListener('click', this.handleClick);

      // Check if the element is still a child of the container before removing
      if (this.container && this.container.contains(this.renderer.domElement)) {
        this.container.removeChild(this.renderer.domElement);
      }
    }

    window.removeEventListener('resize', this.handleResize);

    // Cancel any animations
    if (typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.isInitialized = false;
  }
}
