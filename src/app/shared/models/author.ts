import { ICollection, Collection } from './collection';
import { IPoem, Poem } from './poem';

export interface IAuthor {
    authorId: number;
    name: string;
    email: string;
    biography: string;
    dob: Date;
    gender: string;

    publishedPoems: IPoem[];
    collections: ICollection[];
}

export class Author implements IAuthor {
    authorId: number;
    name: string;
    email: string;
    biography: string;
    dob: Date;
    gender: string;

    publishedPoems: Poem[];
    collections: Collection[];
}

// public AuthorViewModel()
// {
//     PublishedPoems = new List<PoemViewModel>();
// }

// public int AuthorId { get; set; }
// public string Name { get; set; }
// public string Email { get; set; }
// public string Biography { get; set; }
// public DateTime Dob { get; set; }
// public string Gender { get; set; }

// public List<PoemViewModel> PublishedPoems { get; set; }
// public List<CollectionViewModel> Collections { get; set; }
