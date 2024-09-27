import { Module } from "@nestjs/common";
import { PlanetMoodule } from "./planet/planet.module";

@Module({
    imports: [PlanetMoodule],
    exports: [PlanetMoodule]
})
export class HttpModule { }