// game settings

const GAMES = 60
const GAME_SIZE = 100
const GAME_UNIT = 5
const FRAME_RATE = 45

// game bottlenecks

const MAX_TURNS = 5000
const LOWEST_SCORE_ALLOWED = -20

// neural network settings

const mutation_rate = 0.5
const mutation_amount = 3
const elitism = Math.round(0.15 * GAMES)

// score settings

const POINTS_MOVED_TOWARDS_FOOD = 1
const POINTS_MOVED_AGAINST_FOOD = -1.5
const POINTS_ATE_FOOD = 2
