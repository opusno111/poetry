import { ICollection } from './collection';
import { ISection, Section } from './section';
import { IPoem, Poem } from './poem';
import { IAuthor, Author } from './author';

export interface ICollection {
    collectionId: number;
    title: string;
    createdDate: Date;
    modifiedDate: Date;
    live: boolean;
    authorId: number;

    author: IAuthor;
    poems: IPoem[];
    sections: ISection[];
}

export class Collection implements ICollection {
    collectionId: number;
    title: string;
    createdDate: Date;
    modifiedDate: Date;
    live: boolean;
    authorId: number;

    author: Author;
    poems: Poem[];
    sections: Section[];
}

// public CollectionViewModel()
// {
//     Poems = new List<PoemViewModel>();
//     Sections = new List<SectionViewModel>();
// }
// public int CollectionId { get; set; }
// public string Title { get; set; }
// public DateTime CreatedDate { get; set; }
// public DateTime ModifiedDate { get; set; }
// public bool Live { get; set; }
// public int AuthorId { get; set; }

// public AuthorViewModel Author { get; set; }
// public List<PoemViewModel> Poems { get; set; }
// public List<SectionViewModel> Sections { get; set; }
