export interface Personaje{
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    comics: Comics[];
    events: Events[];
    series: Series[];
    stories: Stories[];
    thumbnail: Thumbnail[];
    url: Url[];
}

interface Comics {
    available: number;
    collectionURI: string;
    returned: number;
    items: Items [];
}

interface Events {
    available: number;
    collectionURI: string;
    returned: number;
    items: Items[];
}

interface Series {
    available: number;
    collectionURI: string;
    returned: number;
    items: Items[];
}

interface Stories {
    available: number;
    collectionURI: string;
    returned: number;
    items: Items[];
}

interface Thumbnail {
    extension: string;
    path: string;
}

interface Url {
    type: string;
    url: string;
}

interface Items {
    name: string;
    resourceURI: string;
    type: string;
}