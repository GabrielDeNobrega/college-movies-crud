export type Movie = {
  id: number;
  name: string;
  genre: string;
  release: number;
};

export type MovieValidatable = {
  name: Field;
  genre: Field;
  release: Field;
};

export type Field = {
  name: string;
  value: any;
  error: boolean;
};

export enum MovieFields {
  NAME = "name",
  GENRE = "genre",
  RELEASE = "release",
}
