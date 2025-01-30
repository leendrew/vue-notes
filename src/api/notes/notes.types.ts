export interface Note {
  id: number;
  title: string;
  content: string;
}

export type GetAllResponseDto = Note[];

export type CreateOneRequestDto = Pick<Note, 'title' | 'content'>;

export type CreateOneResponseDto = Note;
