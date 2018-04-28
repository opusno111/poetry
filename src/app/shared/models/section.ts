import { IPoem, Poem } from './poem';

export interface ISection {
    sectionId: number;
    collectionId: number;
    title: string;
    createdDate: Date;
    modifiedDate: Date;
    live: boolean;

    poems: IPoem[];
}

export class Section implements ISection {
    sectionId: number;
    collectionId: number;
    title: string;
    createdDate: Date;
    modifiedDate: Date;
    live: boolean;

    poems: Poem[];
}

// public SectionViewModel()
// {
//     Poems = new List<PoemViewModel>();
// }

// public int SectionId { get; set; }
// public int CollectionId { get; set; }
// public string Title { get; set; }
// public DateTime CreatedDate { get; set; }
// public DateTime ModifiedDate { get; set; }
// public bool Live { get; set; }

// public List<PoemViewModel> Poems { get; set; }
