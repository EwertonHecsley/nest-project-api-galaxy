import { Module } from "@nestjs/common";
import { PlanetMoodule } from "./planet/planet.module";
import { StarSystemModule } from "./starSystem/starSystem.module";

@Module({
    imports: [PlanetMoodule, StarSystemModule],
    exports: [PlanetMoodule, StarSystemModule]
})
export class HttpModule { }