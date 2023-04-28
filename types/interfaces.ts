export interface Slide {
  picturePath: string;
  alt: string;
  width: number;
  height: number;
  buttonPath: string;
  buttonTargetPath: string;
  buttonWidth: number;
  buttonHeight: number;
}

export interface IPicture {
  picturePath: string;
  pictureLegend: string;
  alt: string;
  width: number;
  height: number;
}

export interface IPost {
  postTitle: string;
  pictures: IPicture[];
}

export interface Data {
  pageTitle: string;
  posts: IPost[];
}
