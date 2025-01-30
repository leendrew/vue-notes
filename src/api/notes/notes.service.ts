import { apiInternal } from '@/api/internal.api';
import type { GetAllResponseDto, CreateOneRequestDto, CreateOneResponseDto } from './notes.types';

const PATH = '/notes';

export const notesService = {
  getAll() {
    return apiInternal.get<GetAllResponseDto>(PATH);
  },
  createOne(payload: CreateOneRequestDto) {
    return apiInternal.post<CreateOneResponseDto>(PATH, payload);
  },
  deleteOneById(id: number) {
    return apiInternal.delete(`${PATH}/${id}`);
  },
};
