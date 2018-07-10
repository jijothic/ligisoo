import faker from 'faker';

import Games from '../models/Game';

const GAMES_TOTAL = 10;

export default async () => {
    try{
        await Game.remove();

        await Array.from({ length: GAMES_TOTAL }).forEach(async () => {
            await Game.create({
                text: faker.lorem.paragraph(1),
            })
        });
    } catch (error) {
        throw error;
    }
}