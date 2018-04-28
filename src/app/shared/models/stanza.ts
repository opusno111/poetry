import { ISection } from './section';
export interface IStanza {
    poemId: number;
    stanzaId: number;
    orderInPoem: number;
    lines: string;
}

export class Stanza implements IStanza {
    poemId: number;
    stanzaId: number;
    orderInPoem: number;
    lines: string;
}