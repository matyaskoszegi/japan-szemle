export interface Article {
    id: number;
    title: string;
    author: string;
    originalTitle: string;
    originalDate: Date;
    translator: string;
    translationDate: Date;
    category: string;
    translation: string;
    isPublished: string;
    imagePath: string;
    filePath: string;
    readNum: number;
    sender: string;
    emailAddress: string;
    firebaseID?: string;
}

// opcionális paramétert jelent a ? - a json server kezeli az id-kat