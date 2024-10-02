import { Module } from "@nestjs/common";
import { PlanetMoodule } from "./planet/planet.module";
import { StarSystemModule } from "./starSystem/starSystem.module";
import { CharacterModule } from "./character/character.module";

@Module({
    imports: [PlanetMoodule, StarSystemModule, CharacterModule],
    exports: [PlanetMoodule, StarSystemModule, CharacterModule]
})
export class HttpModule { }