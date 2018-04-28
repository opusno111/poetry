import { IStanza, Stanza } from './stanza';
import { IAuthor, Author } from './author';
import { ISection, Section } from './section';
import { ICollection, Collection } from './collection';

export interface IPoem {
    poemId: number;
    title: string;
    body: string;
    collectionId: number;
    authorId: number;
    createdDate: Date;
    modifiedDate: Date;
    version: number;
    orderNoInCollection: number;
    orderNoInSection: number;
    live: boolean;
    isDraft: boolean;
    wordCount: number;
    lineCount: number;
    sectionId: number;

    author: IAuthor;
    collection: ICollection;
    section: ISection;
    stanzas: IStanza[];
}

export class Poem implements IPoem {
    poemId: number;
    title: string;
    body: string;
    collectionId: number;
    authorId: number;
    createdDate: Date;
    modifiedDate: Date;
    version: number;
    orderNoInCollection: number;
    orderNoInSection: number;
    live: boolean;
    isDraft: boolean;
    wordCount: number;
    lineCount: number;
    sectionId: number;

    author: Author;
    collection: Collection;
    section: Section;
    stanzas: Stanza[] = new Array();
}

// C# model
// public int PoemId { get; set; }
// public string Title { get; set; }
// public string Body { get; set; }
// public int CollectionId { get; set; }
// public int AuthorId { get; set; }
// public DateTime CreatedDate { get; set; }
// public DateTime ModifiedDate { get; set; }
// public int Version { get; set; }
// public int OrderNoInCollection { get; set; }
// public int OrderNoInSection { get; set; }
// public bool Live { get; set; }
// public bool IsDraft { get; set; }
// public int WordCount { get; set; }
// public int LineCount { get; set; }
// public int SectionId { get; set; }

// public AuthorViewModel Author { get; set; }
// public SectionViewModel Section { get; set; }
// public CollectionViewModel Collection { get; set; }
