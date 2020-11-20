declare module "discord.js-trio" {
    import { Client } from "discord.js"

    export class TrioClient extends Client {
        public constructor(config: TrioOptions)
    }

    export interface TrioOptions {
        prefix: string;
        token: string;
        commands: any;
        defaultCommandCooldown: number;
    }
}