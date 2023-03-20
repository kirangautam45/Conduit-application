import { apiCaller } from '../utils/api';
export const fetchTagsApi = () => apiCaller.get('/tags');

