import { apiInternal } from '@/api/internal.api';
import type { GetAllResponseDto, CreateNoteRequestDto, CreateOneResponseDto } from './notes.types';

const PATH = '/notes';

export const notesService = {
  getAll() {
    return apiInternal.get<GetAllResponseDto>(PATH);
  },
  createOne(payload: CreateNoteRequestDto) {
    return apiInternal.post<CreateOneResponseDto>(PATH, payload);
  },
  deleteOneById(id: number) {
    return apiInternal.delete(`${PATH}/${id}`);
  },
};
