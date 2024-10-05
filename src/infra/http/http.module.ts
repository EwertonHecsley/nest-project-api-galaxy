import { Module } from "@nestjs/common";
import { PlanetMoodule } from "./planet/planet.module";
import { StarSystemModule } from "./starSystem/starSystem.module";
import { CharacterModule } from "./character/character.module";
import { SpaceShipModule } from "./spaceShip/spaceShip.module";
import { UserModule } from "./user/user.module";

@Module({
    imports: [PlanetMoodule, StarSystemModule, CharacterModule, SpaceShipModule, UserModule],
    exports: [PlanetMoodule, StarSystemModule, CharacterModule, SpaceShipModule, UserModule]
})
export class HttpModule { }