import { Module } from "@nestjs/common";
import { PlanetMoodule } from "./planet/planet.module";
import { StarSystemModule } from "./starSystem/starSystem.module";
import { CharacterModule } from "./character/character.module";
import { SpaceShipModule } from "./spaceShip/spaceShip.module";

@Module({
    imports: [PlanetMoodule, StarSystemModule, CharacterModule, SpaceShipModule],
    exports: [PlanetMoodule, StarSystemModule, CharacterModule, SpaceShipModule]
})
export class HttpModule { }