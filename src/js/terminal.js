// Tableau de commandes
const commandes = [
    "activate-shield: Activates the protective shield system.",
    "[ Activate Shield ] [ Analyze Environment ] [ Access Database ]",
    "analyze-environment: Analyzes the surrounding environment for potential threats.",
    "access-database: Grants access to the central database.",
    "decrypt-code: Decrypts encrypted data.",
    "encrypt-message: Encrypts a message for secure transmission.",
    "engage-warp-drive: Engages the warp drive for faster-than-light travel.",
    "run-diagnostic: Initiates a diagnostic scan of all systems.",
    "launch-probe: Launches a probe for long-range exploration.",
    "purge-memory: Clears the system memory of sensitive data.",
    "initiate-self-destruct: Begins the self-destruct sequence.",
    "override-security: Overrides security protocols for authorized access.",
    "scan-life-signs: Scans for life signs within a specified radius.",
    "upload-virus: Uploads a computer virus to a target system.",
    "deploy-drones: Deploys autonomous drones for reconnaissance.",
    "activate-cloaking-device: Activates the cloaking device to become invisible.",
    "launch-missiles: Launches guided missiles at a designated target.",
    "calibrate-sensors: Calibrates sensor arrays for enhanced accuracy.",
    "generate-random-code: Generates a random access code for security purposes.",
    "power-up-systems: Powers up all systems to full capacity.",
    "shutdown-systems: Initiates a controlled shutdown of all non-essential systems.",
    "engage-hyperdrive: Engages the hyperdrive for interstellar travel.",
    "initiate-lockdown: Initiates a facility-wide lockdown for security purposes.",
    "activate-tracker: Activates a tracking device to monitor a target's movements.",
    "decode-transmission: Decodes an encrypted transmission for analysis.",
    "execute-protocol-alpha: Executes emergency protocol alpha for crisis situations.",
    "reboot-mainframe: Reboots the mainframe computer for troubleshooting.",
    "set-navigation-course: Sets a new navigation course for the ship.",
    "engage-tractor-beam: Engages the tractor beam to capture objects in space.",
    "launch-proximity-mines: Deploys proximity mines to deter enemy ships.",
    "activate-solar-sails: Activates solar sails for propulsion using solar energy.",
    "hack-security-system: Attempts to hack into a secure system.",
    "initiate-hibernation-sequence: Initiates a hibernation sequence for crew members.",
    "launch-space-probe: Launches a space probe for scientific research.",
    "override-locks: Overrides locked doors or access points.",
    "establish-communication-link: Establishes a communication link with another vessel.",
    "deploy-energy-shield: Deploys an energy shield for added protection.",
    "scan-for-anomalies: Scans for anomalies in the space-time continuum.",
    "activate-gravity-well: Creates a localized gravity well to disrupt nearby objects.",
    "engage-stealth-mode: Engages stealth mode to avoid detection by enemy sensors.",
    "launch-nuclear-warheads: Launches nuclear warheads as a last resort.",
    "decrypt-encrypted-transmission: Decrypts an encrypted transmission for analysis.",
    "purge-toxins: Purges toxins from the ship's atmosphere.",
    "set-targeting-coordinates: Sets targeting coordinates for weapon systems.",
    "activate-anti-virus: Activates an anti-virus program to remove malicious software.",
    "establish-wormhole: Creates a temporary wormhole for instantaneous travel.",
    "deploy-repair-drones: Deploys repair drones to fix damaged systems.",
    "initialize-bio-scan: Initiates a bio-scan to detect foreign organisms.",
    "activate-laser-defenses: Activates laser defense systems to intercept incoming threats.",
    "launch-proton-torpedoes: Launches proton torpedoes at enemy vessels.",
    "reconfigure-energy-grid: Reconfigures the energy grid for optimal efficiency.",
    "initiate-gravitational-pull: Initiates a gravitational pull to attract nearby objects.",
    "activate-neural-interface: Activates the neural interface for direct mental control.",
    "engage-quantum-drive: Engages the quantum drive for near-instantaneous travel.",
    "run-encryption-algorithm: Executes a complex encryption algorithm for secure data transmission.",
    "launch-EMP-blast: Launches an electromagnetic pulse blast to disable electronics.",
    "deploy-surveillance-probes: Deploys surveillance probes to monitor enemy activity.",
    "activate-nanobot-repair: Activates nanobot repair systems to fix micro-damage.",
    "engage-time-warp: Engages a time-warp field for temporal manipulation.",
    "run-deep-space-scan: Executes a deep space scan for celestial phenomena.",
    "initialize-neutrino-detector: Initializes a neutrino detector for particle detection.",
    "activate-quantum-encryption: Activates quantum encryption for unbreakable communication.",
    "deploy-sonic-disruptor: Deploys a sonic disruptor to disorientate enemy sensors.",
    "override-autopilot: Overrides the ship's autopilot for manual control.",
    "initiate-bio-hazard-protocol: Initiates bio-hazard protocol to contain infectious agents.",
    "launch-drone-swarm: Launches a swarm of drones for reconnaissance or attack.",
    "engage-plasma-thrusters: Engages plasma thrusters for rapid acceleration.",
    "set-course-for-home: Sets a course for the nearest friendly base or planet.",
    "deploy-singularity-grenade: Deploys a singularity grenade to create a black hole.",
    "initialize-quantum-computer: Initializes a quantum computer for complex calculations.",
    "activate-solar-flare: Stimulates a solar flare to disrupt enemy electronics.",
    "hack-enemy-communications: Hacks into enemy communication channels for intelligence gathering.",
    "engage-neutrino-drive: Engages the neutrino drive for silent propulsion.",
    "launch-graviton-bomb: Launches a graviton bomb to destabilize enemy ships.",
    "activate-magnetic-shielding: Activates magnetic shielding to deflect incoming projectiles.",
    "initiate-chemical-cleanse: Initiates a chemical cleanse to remove contaminants from the air.",
    "deploy-disruption-field: Deploys a disruption field to jam enemy sensors.",
    "establish-quantum-entanglement: Establishes quantum entanglement for instantaneous communication.",
    "activate-particle-cannon: Activates a particle cannon for heavy firepower.",
    "run-decoherence-algorithm: Executes a decoherence algorithm to disrupt enemy technology.",
    "engage-inertia-dampeners: Engages inertia dampeners to reduce the effects of acceleration.",
    "initialize-synthetic-gravity: Initializes synthetic gravity for artificial gravity on the ship.",
    "activate-time-dilation-field: Activates a time dilation field for time manipulation.",
    "launch-electromagnetic-burst: Launches an electromagnetic burst to disable electronics.",
    "deploy-EMP-minefield: Deploys an EMP minefield to disrupt enemy electronics.",
    "establish-quantum-tunnel: Establishes a quantum tunnel for rapid travel.",
    "activate-teleportation-beacon: Activates a teleportation beacon for instant transport.",
    "run-heuristic-algorithm: Executes a heuristic algorithm for decision-making.",
    "engage-quantum-lock: Engages a quantum lock to secure sensitive data.",
    "initialize-virtual-reality: Initializes a virtual reality simulation for training purposes.",
    "activate-plasma-shield: Activates a plasma shield for protection against energy weapons.",
    "launch-nanite-swarm: Launches a nanite swarm for repair or sabotage.",
    "deploy-pulse-generator: Deploys a pulse generator to disrupt enemy electronics.",
    "establish-psychic-link: Establishes a psychic link for communication with telepathic beings.",
    "activate-displacement-field: Activates a displacement field for stealth maneuvers.",
    "run-sentient-ai-routine: Executes a sentient AI routine for advanced decision-making.",
    "engage-stasis-field: Engages a stasis field to freeze objects in time.",
    "initialize-quantum-network: Initializes a quantum network for secure communication.",
    "activate-chrono-shield: Activates a chrono shield for protection against temporal anomalies.",
    "launch-nuclear-disruptor: Launches a nuclear disruptor to disable enemy systems.",
    "deploy-replication-nanites: Deploys replication nanites for rapid construction or repair.",
    "establish-hyperspace-window: Establishes a hyperspace window for travel through subspace.",
    "activate-gravitic-anchor: Activates a gravitic anchor to stabilize the ship in turbulent space.",
    "run-neural-pattern-recognition: Executes a neural pattern recognition algorithm for analysis.",
    "engage-quantum-shield: Engages a quantum shield for protection against quantum threats.",
    "initialize-quantum-entanglement-array: Initializes a quantum entanglement array for interstellar communication.",
    "activate-psychoactive-field: Activates a psychoactive field to influence enemy behavior.",
    "launch-matter-antimatter-bomb: Launches a matter-antimatter bomb for devastating explosions.",
    "deploy-molecular-disruptor: Deploys a molecular disruptor to disintegrate matter at the molecular level.",
    "establish-quantum-channelling: Establishes quantum channelling for energy transmission.",
    "activate-electromagnetic-shroud: Activates an electromagnetic shroud for stealth operations.",
    "run-heisenberg-compensator: Executes a Heisenberg compensator to maintain quantum stability.",
    "engage-quantum-tesseract: Engages a quantum tesseract for multidimensional travel.",
    "initialize-neural-interface-network: Initializes a neural interface network for collective consciousness.",
    "activate-ethereal-barrier: Activates an ethereal barrier to phase out of physical reality.",
    "launch-singularity-bomb: Launches a singularity bomb to collapse spacetime in a localized area.",
    "deploy-temporal-inhibitor: Deploys a temporal inhibitor to prevent time travel in a designated area.",
    "establish-neural-interlink: Establishes a neural interlink for shared consciousness.",
    "activate-chaotic-emitter: Activates a chaotic emitter to disrupt enemy systems unpredictably.",
    "run-paradox-resolution-algorithm: Executes a paradox resolution algorithm to resolve temporal anomalies.",
    "engage-quantum-matrix: Engages a quantum matrix for reality manipulation.",
    "initialize-virtual-holographic-interface: Initializes a virtual holographic interface for user interaction.",
    "activate-graviton-field: Activates a graviton field for gravitational manipulation.",
    "launch-quantum-singularity: Launches a quantum singularity to create a localized black hole.",
    "deploy-quantum-distortion-field: Deploys a quantum distortion field to warp spacetime.",
    "establish-quantum-linkage: Establishes a quantum linkage for instantaneous data transfer.",
    "activate-psionic-shield: Activates a psionic shield to defend against psychic attacks.",
    "run-spatial-anomaly-analysis: Executes a spatial anomaly analysis for navigation purposes.",
    "engage-quantum-annihilation: Engages quantum annihilation to neutralize enemy threats.",
    "initialize-synthetic-consciousness: Initializes a synthetic consciousness for AI companionship.",
    "activate-time-ripple: Activates a time ripple to cause localized temporal disturbances.",
    "launch-quantum-pulse: Launches a quantum pulse to disrupt enemy technology.",
    "deploy-nanite-disassembler: Deploys a nanite disassembler to break down enemy structures.",
    "establish-psionic-network: Establishes a psionic network for telepathic communication.",
    "activate-hyperdimensional-anchor: Activates a hyperdimensional anchor to stabilize spacetime.",
    "run-quantum-alignment-protocol: Executes a quantum alignment protocol for dimensional stability.",
    "engage-transdimensional-drive: Engages a transdimensional drive for travel between alternate realities.",
    "initialize-artificial-singularity: Initializes an artificial singularity for energy generation.",
    "activate-neural-implant: Activates a neural implant for enhanced cognitive abilities.",


];

// Fonction pour sélectionner aléatoirement une ligne dans le tableau de commandes
function getRandomCommand() {
    return commandes[Math.floor(Math.random() * commandes.length)];
}

// Fonction pour ajouter une commande au terminal avec un délai aléatoire
function addCommandToTerminal() {
    // Sélectionner une ligne aléatoire dans le tableau de commandes
    const commande = getRandomCommand();

    // Sélectionner l'élément #terminal
    const terminal = document.getElementById('terminal');

    // Créer un élément <pre> pour afficher la commande
    const nouvelleCommande = document.createElement('pre');
    nouvelleCommande.textContent = commande;

    // Ajouter la commande au début du terminal
    terminal.insertAdjacentElement('afterbegin', nouvelleCommande);

    // Générer un délai aléatoire entre 1 et 10 secondes
    const delai = Math.floor(Math.random() * 4 + 1) * 1000;

    // Appeler récursivement la fonction pour ajouter une autre commande après le délai
    setTimeout(addCommandToTerminal, delai);
}

// Appeler la fonction pour ajouter une commande au terminal
addCommandToTerminal();
