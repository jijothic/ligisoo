import GameResolvers from './game-resolver';

export default {
    Query default {
        getGames: GameResolvers.getGames
    }
}